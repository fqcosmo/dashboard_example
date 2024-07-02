import React from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import Grafic from '../components/Grafic'

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <Navbar />
      <div>
        <h1>Bienvenido a tu dashboard</h1>
        <article className='filter_dates' style={{ display: 'flex' ,justifyContent: 'space-evenly'}}>
          <form action="" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="">Desde: </label>
            <input type="date" name="" id="" style={{ marginLeft: '5px', marginRight: '10px' }} />
            <label htmlFor="">Hasta: </label>
            <input type="date" name="" id="" style={{ marginLeft: '5px', marginRight: '10px' }} />
            <div className='btns' style={{ marginLeft: '10px' }}>
              <button className='btn btn-primary' style={{ marginLeft: '5px' }}>Filtrar</button>
              <button className='btn btn-danger'>Mostrar PDF</button>
              <button className='btn btn-success' style={{ marginLeft: '5px' }}>Exportar a Excel</button>
            </div>
          </form>
        </article>

        <Grafic />
      </div>
      <article className='homepage pd-4 '>
        <Table />
      </article>

    </section>
  )
}

export default Dashboard
