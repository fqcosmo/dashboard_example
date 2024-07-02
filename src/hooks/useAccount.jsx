import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie';

const useAccount = () => {

    const API_KEY = '';
    const [loginUser,setLoginUser] = useState({
        email: "",
        password: ""
    });

    const [registerUser,setRegisterUser] = useState({
        id: "",
        nombre: "",
        email: "",
        password: "",
        dni: "",
        ruc: "",
        telefono: ""
    });

    const handleLogin = async() => {
        try {
            const response = await fetch(API_KEY,{
                method: 'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(loginUser)
            })

            const data = await response.json();
            Cookies.set('user',JSON.stringify(data),{expires: 2})
            return data;
        } catch (error) {
            throw new Error('Error Server Response: ' + error);
        }
    }

    const handleRegister = async() => {
        try {
            const response = await fetch(API_KEY,{
                method: 'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(registerUser)
            })

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error Server Response: ' + error);
        }
    }

    const handleLogout = () => {
        Cookies.remove('user')
        window.location.href = '/'
    }

    const onChangeInputLogin = (e) => {
        setLoginUser(
            {
                ...loginUser,
                [e.target.name] : e.target.value
            }
        )
    }

    const onChangeInputRegister = (e) => {
        setRegisterUser(
            {
                ...registerUser,
                [e.target.name] : e.target.value
            }
        )
    }

    return{
        onChangeInputLogin,
        onChangeInputRegister,
        handleLogin,
        handleLogout,
        handleRegister
    }
}

export default useAccount
