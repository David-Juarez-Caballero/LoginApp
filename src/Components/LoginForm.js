import React, { useState, useEffect } from 'react'

export const LoginForm = () => {

    const [usuario, setUsuario] = useState(undefined);

    const [password, setPasword] = useState(undefined);

    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasword(e.target.value)
    }

    const onLogInSubmitted = (e) => {
        e.preventDefault();

    }


    return (
        <>
            <form onSubmit={onLogInSubmitted}>
                <label>Usuario</label>
                <input type="text" onChange={handleUsuarioChange} />
                <label>Contraseña</label>
                <input type="password" onChange={handlePasswordChange} />
                <button type='submit'> Log In</button>
            </form>

        </>
    )
}