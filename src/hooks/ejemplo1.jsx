// ejemplo del hook useState
// crear componente de tipo funcion, acceder a estado privado a traves de un hook y poder modificarlo 
import React, { useState } from 'react'
// todos los hooks empiezan con use

const Ejemplo1 = () => {
    // valor inicial
    const valorInicial = 0
    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martion@imagimail.com'
    }
    
    /*
    queremos que el valor inicial y persona inicial sean parte del estado del componente, para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente [variable, funcion para cambiar] = useState(valor inicial)
    */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /*
     funcion para actualizar el estado privado que contiene el contador 
     */
    function incrementarContador() {
        // aumenta el contador en 1
        // funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }
    // funcion para actualizar el estado de persona en el componente
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imagimail.com'
            }
        )
    }
    return (
        <div>
            <h1>ejemplo de use state</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA: </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar conatador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1