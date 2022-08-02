// app => task_list => task <= task.class
import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

// que tasklist devuelva un componente de tipo tarea
const TaskListComponent = () => {
    // una tarea por defecto
    const defaultTask = new Task('example', 'Default descroption', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true)

    // control ciclo de vida del componente
    useEffect(() => {
        console.log('modificacion de tareas, task state has been modified')
        setLoading(false) // ya no esta cargando
        return () => {
            console.log('task list component is going to unmount')
        }
    }, [tasks])

    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
                <div>
                <h1>
                Your tasks:
                </h1>
                </div>
                {/* TODO: aplicar un for/map para renderizar una lista */}
                
                <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}


export default TaskListComponent