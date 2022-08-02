import React, { useEffect } from 'react'

const AllCycles = () => {
    useEffect(() => {
        console.log('componente creado')
        
        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualizacion del componente')
        }, 1000)

        return () => {
            console.log('componente va a desaparecer')
            // componente aparece => intervalo => actualizacion => se pinta de nuevo
            document.title = "tiempo detenido"
            clearInterval(intervalID)
        }
    }, [])
    return (
        <div>

        </div>
    )
}

export default AllCycles