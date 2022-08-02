import React, { useState } from 'react'
// definiendo estilos en constantes

// si usuario esta loggeado
const loggedStyle = {
    color: 'greenyellow'
}
// si usuario no esta loggeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {
    // generar estado para componente y ver si usuario esta logueado
    const [logged, setLogged] = useState(false)
    
    const greetingUser = () => <p>Hola, {props.name}</p> 
    const pleaseLogin = () => <p>Please login</p>

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            
            { logged ? 
                greetingUser()
                : 
                pleaseLogin()
            }
            <button onClick={() => {
                console.log('boton pulsado')
                setLogged(!logged)
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default GreetingStyled
