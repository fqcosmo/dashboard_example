import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='border rounded p-4' style={{marginTop: '120px'}}>
              <form action="" className='login-form'>
                <h2 className='text-center'>Gestión Ticketera</h2>
                <div className='form-group'>
                  <label htmlFor="email">Ingresar email</label>
                  <input className='form-control' type="text" id="email" name="email" />
                </div>
                <div className='form-group'>
                  <label htmlFor="password">Ingresar contraseña</label>
                  <input className='form-control' type="password" id="password" name="password" />
                </div>
                {/* <button className='btn btn-success btn-block'>Ingresar</button> */}
                <Link to='/dashboard' className='btn btn-success'>Ingresar</Link>
                <Link to='/register' className='btn btn-warning'>Crear Cuenta</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
