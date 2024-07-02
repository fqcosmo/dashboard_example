import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import profile from '../assets/profile.jpg'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <ul className='navbar-nav mr-auto d-flex flex-row'>
                <li className='nav-item'>
                <Avatar alt="Remy Sharp" src={profile}/>
                </li>
                <li className='nav-item'>
                <Link className='nav-link px-2' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link px-2' to='/registrar-alumno'>Registrar Alumno</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link px-2' to='/listar-alumnos'>Listar Alumnos</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link px-2' to='/reporte-alumnos'>Reporte Alumnos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
