import { conexion } from "../database/conexion.js";
import { validationResult } from "express-validator";

export const show_users= async(req, res)=>{
    try {
        const show = await conexion.query("select*from usuarios");
        if (show.length>0) {
            res.status(200).json({
                "mensaje":show
            })
        }else{
            res.status(404).json({
                "mensaje":"algo salio mal"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje":error
        })
    }
}

export const create_user = async (req, res) => {
    try {
        const { nombres, direccion, telefono, correo, rol, password } = req.body;


        const error= validationResult(req)

        if (!error.isEmpty()) {
            return res.status(404).json({error})
        }

        const [create ]= await conexion.query("INSERT INTO usuarios (nombres, direccion, telefono, correo, rol, password) VALUES (?, ?, ?, ?, ?, ?)", [nombres, direccion, telefono, correo, rol, password]);
        if (create.affectedRows > 0) {
            res.status(201).json({
                "mensaje": "se creó con éxito el usuario"
            });
        } else {
            res.status(404).json({
                "mensaje": "no se pudo crear el usuario"
            });
        }
    } catch (error) {

        console.log(error)
        res.status(500).json({
            "mensaje": error
        });
    }
};

export const  delete_users = async(req, res)=>{
    try {
        const {idusuario}=req.params;
        
        const [borrar] = await conexion.query("delete from usuarios where idusuario=?",[idusuario])

        if (borrar.affectedRows>0) {
            res.status(200).json({
                "mensaje":"se elimino con exito"
            })
        }else{
            res.status(404).json({
                "mensaje":"no se  elimino el usuario"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje":error
        })
    }
    }

    export const update_user = async (req, res) => {
        try {
            const {idusuario}=req.params;
            const { nombres, direccion, telefono, correo, rol, password } = req.body;
    
            const [UPDATE ]= await conexion.query("UPDATE usuarios set nombres=?, direccion=?,telefono=?,correo=?, rol=?,password=? where idusuario=?", [nombres, direccion, telefono, correo, rol, password, idusuario]);
            if (UPDATE.affectedRows > 0) {
                res.status(201).json({
                    "mensaje": "se actualizo con éxito el usuario"
                });
            } else {
                res.status(400).json({
                    "mensaje": "no se pudo actualizar el usuario"
                });
            }
        } catch (error) {
            res.status(500).json({
                "mensaje": error
            });
            console.log(error)
        }
    };

    export const search_for_idusuario = async(req, res)=>{
        try {
            const {idusuario}=req.params;

            const [search]= await conexion.query("select*from usuarios where idusuario=?",[idusuario])
            if (search.length>0) {
                res.status(200).json({
                    "mensaje":search
                })
            }else{
                res.status(404).json({
                    "mensaje":"no se encontro el usuario"
                })
            }
        } catch (error) {
            res.status(500).json({
                "mensaje":error
            })
        }
    }