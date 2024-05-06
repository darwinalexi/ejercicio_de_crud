import { Router } from "express";
import { create_user, delete_users, search_for_idusuario, show_users, update_user } from "../controller/controller.users.js";
import { validator_register } from "../middlewares/middleware.js";
export const router_users= Router();

router_users.get("/listar_usuarios", show_users)
router_users.post("/crear_usuario",create_user)
router_users.delete("/eliminar_usuario/:idusuario",delete_users);
router_users.put("/actualizar_usuario/:idusuario",update_user)
router_users.get("/buscar_usuario/:idusuario",search_for_idusuario)