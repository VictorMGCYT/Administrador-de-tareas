import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

function useTaskManager() {
    const initialTasks = localStorage.getItem('tasks')

    const [task, setTask] = useState(JSON.parse(initialTasks)??[]);
    const [textTask, setTextTask] = useState('');

    useEffect(()=>{

        const stringTask = JSON.stringify(task);
        localStorage.setItem('tasks', stringTask);

    },[task])

    function saveTask(tarea) {
        if (tarea === '') {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "No puedes guardar una tarea vacía",
                });
        } 
        else {
            const createNewTask = {
                descripcion: tarea,
                completada: false
            }

            setTask([...task, createNewTask]);
                
            setTextTask('');
        }
    }

    function deleteTask(id) {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, borrarlo"
            }).then((result) => {
            if (result.isConfirmed) {
                const updatedTask = [...task];

                updatedTask[id] = {descripcion: undefined, completada: false};

                setTask(updatedTask);
                Swal.fire({
                title: "¡Borrado!",
                text: "Tu tarea ha sido borrada.",
                icon: "success"
            });
            }
            });
        

    }

    function isChecked(complet, des, id) {
        if (complet) {
            const updatedTask = [...task];

            updatedTask[id] = {descripcion: des, completada: false};
            setTask(updatedTask);
        } else {
            const updatedTask = [...task];

            updatedTask[id] = {descripcion: des, completada: true};
            setTask(updatedTask);
        }
    }

    return{
        task,
        textTask,
        setTextTask,
        saveTask,
        deleteTask,
        isChecked,
    }
}

export default useTaskManager;