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

  return (
    <>
      <h1>Usuarios</h1>
      <table>
  <thead>
    <tr>
      <th>ID Usuario</th>
      <th>Nombres</th>
      <th>Dirección</th>
      <th>Teléfono</th>
      <th>Correo</th>
      <th>Rol</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    {usuarios.map((usuario) => (
      <tr key={usuario.idusuario}>
        <td>{usuario.idusuario}</td>
        <td>{usuario.nombres}</td>
        <td>{usuario.direccion}</td>
        <td>{usuario.telefono}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.rol}</td>
        <td>{usuario.password}</td>
      </tr>
    ))}
  </tbody>
</table>
    </>
  );
};

export default Usuarios;