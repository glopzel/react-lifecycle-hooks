/*
ejemplo del uso del metodo component will unmount  para componente clase
y ejemplo de uso de hooks para componente funcional
*/

import React, { Component, useEffect } from "react";

export class willUnmount extends Component {
    componentWillUnmount() {
        console.log('comportamiento antes de que el comonente desaparezca')
    }
    render() {
        <div>
            <h1>Componente willUnmount</h1>
        </div>
    }
}

export const willUnmountHook = () => {
    useEffect(() => {
        // aca no se pone nada aca
        return () => {
        //    indica que se ejecute 
            console.log('comportamiento antes de que el comonente desaparezca')
        }
    }, [])
    return (
        <div>
            <h1>componente willUnmount</h1>
        </div>
    )
}