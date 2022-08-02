/*
ejemplo uso de ciclo de vida en componente clase
y el hook de ciclo de vida en componente
funcional
*/
import React, { Component, useEffect } from 'react'

export class DidMount extends Component {
    componentDidMount() {
        console.log('comportamiento antes de que el xomponante sea añadido al DOM, antes de que se renderice')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}

const DidMountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que el xomponante sea añadido al DOM, antes de que se renderice')
    }, [])
    // si no se indica nada seria todas las veces, [] significa que se ejecuta 1 vez. cada vez que se renderiza pasa por el useEffect

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}