/* usar props.children */
import React from 'react'

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                ejemplo de children props
            </h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* props.children pintara por defecto aquello que se
            encuentre entre las etiquetas de apertura
            y cierre de este componente desde el componente de orden superior*/}
            {props.children}

        </div>
    )
}

export default Ejemplo4