import axios from "axios";
import { useEffect, useState } from "react";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    try {
     await axios.get("http://localhost:4000/listar_usuarios").then((response) => {
      console.log(response.data)
      setUsuarios(response.data[0])
     })

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  const borrar_usuario= async(idusuario)=>{
    try {

      await axios.delete(`http://localhost:4000/eliminar_usuario/${idusuario}`)
       .then((response)=>{
        const borrar_user = usuarios.filter(usuario => usuario.idusuario!== idusuario);
        setUsuarios(borrar_user)

     if (response.status==200) {
      Swal.fire({
        title: "Eliminado!",
        text: response.data.mensaje,
        icon: "success"
      });
     }else{
      Swal.fire({
        title: "Algo salio Mal",
        text: response.data.mensaje,
        icon: "error"
      });
     }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Usuarios</h1>
      <table className="w-5 mr-5 border-b-2 border-gray-300 relative top-12 left-12">
  <thead>
    <tr className="w-5 mr-5 border-b-2 border-gray-300 ">
      <th className="p-2 border-r-2">ID Usuario</th>
      <th className="p-2 border-r-2">Nombres</th>
      <th className="p-2 border-r-2">Dirección</th>
      <th className="p-2 border-r-2">Teléfono</th>
      <th className="p-2 border-r-2">Correo</th>
      <th className="p-2 border-r-2">Rol</th>
      <th className="p-2 border-r-2">Password</th>
      <th className="p-2">Accion</th>
    </tr>
  </thead>
  <tbody>
    {usuarios.map((usuario) => (
      <tr key={usuario.idusuario}>
        <td className="p-2 border-r-2 border-b-2">{usuario.idusuario}</td>
        <td className="p-2 border-r-2 border-b-2">{usuario.nombres}</td>
        <td className="p-2 border-r-2 border-b-2">{usuario.direccion}</td>
        <td className="p-2 border-r-2 border-b-2">{usuario.telefono}</td>
        <td className="p-2 border-r-2 border-b-2">{usuario.correo}</td>
        <td className="p-2 border-r-2 border-b-2">{usuario.rol}</td>
        <td className="p-2 border-r-2 border-b-2">{usuario.password}</td>
        <td className="p-2 border-b-2">
          <button onClick={() => borrar_usuario(usuario.idusuario)}>borrar</button>
      <button>Actualizar </button>
     
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </>
  );
};

export default Usuarios;