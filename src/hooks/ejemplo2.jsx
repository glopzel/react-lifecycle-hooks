// useState
// useRef sirve para identificar/referenciar elementos dentro de la vista
// useEffect controla cambios en la vista

import React, { useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {
    // creamos 2 contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    // crear referencia con useRef para asociar una variable con un elemento del componente (vista html)
    const miRef = useRef()
    // funciones que incrementen a 1 y a 2
    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }
    // useEffect
    /*
    caso1: ejecutar siempre un snippet de codigo, cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useEffect
    */
    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // })

    /*
    case 2: ejecutar solo en casos, cuando cambie el contador 1     
    cuando contador 1 cambia se ejecuta lo que diga el useEffect
    en caso de que cambie contador 2, no habra ejecucion
    */
    // useEffect(() => {
    //     console.log('cambio en estado del contador 1')
    //     console.log('mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // }, [contador1])

    /*
    case 2: ejecutar solo en casos, cuando cambie el contador 1 o 2
    cada vez que haya un cambio en contador 1 o 2 se ejecuta lo que diga el useEffect
    */
    // useEffect(() => {
    //     console.log('cambio en estado del contador 1 o 2')
    //     console.log('mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // }, [contador1, contador2])

    return (
        <div>
            <h1>ejemplo de useState, useRef y useEffect</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>incrementar contador 1</button>
                <button onClick={incrementar2}>incrementar contador 2</button>
            </div>
            {/* <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA: </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3> */}
            {/* bloque de botones para actualizar el estado del componente */}
            {/* <button onClick={incrementarContador}>Incrementar conatador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button> */}
        </div>
    )
}

export default Ejemplo2