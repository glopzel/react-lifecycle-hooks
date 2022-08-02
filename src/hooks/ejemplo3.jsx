import React, { useState, useContext } from 'react'
/*
useState y useContext
*/

/*Componente 1 dispone de un valor
que va a tener un valor que recibe 
desde el padre */

const miContexto = React.createContext(null)

const Componente1 = () => {
    // inicializamos null , un estado vacio que va a rellenarse 
    // con los datos del padre
    const state = useContext(miContexto)
    
    return (
        <div>
        {/* el padre me pasa el valor del token, como hijo tengo el dato gracias al contexto */}
            <h1>
                El token es: {state.token}
            </h1>
            {/* pintar componente 2 */}
            <Componente2></Componente2>
        </div>
    )
}

const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                la sesion es: {state.session}
            </h2>
        </div> 
    )
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    // creamos estado de este componente
    const [ sessionData, setSessionData ] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JWT123456789',
                session: sessionData.session + 1
            }
        )
    }

    return (
        // da contexto
        // le paso a lo que esta dentro
        <miContexto.Provider value={sessionData}>
        <h1>ejemplo de useState y useContext</h1>
        {/* todo aca dentro puede leer los datos de sessionData, ademas de actualizarse, si se actualiza los componentes de aqui tambien lo actualizan */}
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>actualizar</button>
        </miContexto.Provider> 
    )
}