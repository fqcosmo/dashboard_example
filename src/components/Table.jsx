import React from 'react'

const Table = () => {
  return (
<table className="table">
  <thead className="thead-white">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Correo</th>
      <th scope='col'>Telefono</th>
      <th scope='col'>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>963035217</td>
      <th scope='col'>
      <i className="fa-solid fa-pen-to-square"></i>
      <i className="fa-solid fa-print"></i>
      </th>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>963035217</td>
      <th scope='col'>
      <i className="fa-solid fa-pen-to-square"></i>
      <i className="fa-solid fa-print"></i>
      </th>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>963035217</td>
      <th scope='col'>
      <i className="fa-solid fa-pen-to-square"></i>
      <i className="fa-solid fa-print"></i>
      </th>
    </tr>
  </tbody>
</table>
  )
}

export default Table
