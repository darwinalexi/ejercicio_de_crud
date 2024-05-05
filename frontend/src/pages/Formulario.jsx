import axios from "axios"
import { useState } from "react";
import Swal from 'sweetalert2';


const Formulario = ()=>{
const [usuarios, setusuarios]=useState({
nombres:'',
direccion:'',
telefono:'',
correo:'',
password:'',
})

const registrar_usuario = async (event) => {
    try {
      event.preventDefault();
      const url = "http://localhost:4000/crear_usuario";
      const response = await axios.post(url, usuarios);
      console.log(response.data.mensaje);

    if (response.status===201) {
        Swal.fire({
            icon: "success",
            title: "Proceso Exitoso",
            text:response.data.mensaje,
            showConfirmButton: false,
            timer: 2000
          });
    }else{
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
        showConfirmButton: false,
        timer: 1500
      });
    }
    } catch (error) {
      console.log(error);
    }
  };

const handinputchange=(event)=>{
    setusuarios({
      ...usuarios,
      [event.target.name]:event.target.value
    })
    console.log(usuarios)
  }

    return(
        <>
        <div className="bg-sky-300 w-1/4 absolute right-7 mr-12">
            <form action="" onSubmit={registrar_usuario}>
                <h1 className="flex justify-center font-mono m-6">Registra Un Usuario</h1>
                <label>Ingrese Su Nombre</label>
                <br />
                <input className="rounded-xl placeholder:pl-6 focus:outline-none" type="text" placeholder="ingrese su nombre" onChange={handinputchange} name="nombres"/>
                <br />
                <label>Ingrese Su Direccion</label>
                <br />
                <input type="text" name="direccion" placeholder="INGRESE DIRECCION" onChange={handinputchange} className="rounded-xl placeholder:pl-6 focus:outline-none" />
                <br />
                <label>Ingrese Su Telefono</label>
                <br />
                <input type="number" name="telefono" placeholder="INGRESE TELEFONO" onChange={handinputchange} className="rounded-xl placeholder:pl-6 focus:outline-none" />
                <br />
                <label>Ingrese Su Correo</label>
                <br />
                <input type="email" name="correo" placeholder="INGRESE CORREO" onChange={handinputchange} className="rounded-xl placeholder:pl-6 focus:outline-none" />
                <br />
              
                <br />
                <label>Ingrese su Clave</label>
                <br />
                <input type="text"  placeholder="INGRESE CLAVE "className="rounded-xl placeholder:pl-6 focus:outline-none"  name="password" id="" onChange={handinputchange}/>
                <br />
                <input type="submit" className="bg-red-400 m-6 rounded-xl w-40"value="Registrar usuario" />
            </form>
        </div>
        </>
    );
}
export default Formulario