import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Swal from 'sweetalert2'

function App() {

    const [task, setTask] = useState([]);
    const [textTask, setTextTask] = useState('');

    useEffect(()=>{
        
    },[task])

    function saveTask(tarea) {
        if (tarea === '') {
        console.log('La tarea no puede estar vacía');
        } else {
        setTask([...task, tarea]);
        console.log(`La tarea ${tarea} fue agregada correctamente`)
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

                updatedTask[id] = undefined;
                console.log(updatedTask);

                setTask(updatedTask);
              Swal.fire({
                title: "¡Borrado!",
                text: "Tu tarea ha sido borrada.",
                icon: "success"
              });
            }
          });
        

    }


    return (
        <>
            <Header
                textTask={textTask}
                setTextTask={setTextTask}
                saveTask={saveTask}
            >

            </Header>
            <TaskList
                task={task}
                deleteTask={deleteTask}
            >

            </TaskList>
        </>
    )
}

export default App
