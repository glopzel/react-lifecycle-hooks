/*
cualquier cambio en el estado se ve repercutido
ejemplo uso de metodo componentDidUpdate en componente clase,
y uso de hook en componente funcional
*/

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
    componentDidUpdate() {
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>didUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }) 
    // se ejecuta todas las veces, useEffect sin corchetes
    return (
        <div>
            <h1>didUpdate</h1>
        </div>
    )
}