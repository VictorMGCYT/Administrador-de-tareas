import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {

  const [task, setTask] = useState([]);
  const [textTask, setTextTask] = useState('');

  function saveTask(tarea) {
    if (tarea === '') {
      console.log('La tarea no puede estar vacía');
    } else {
      setTask([...task, tarea]);
      console.log(`La tarea ${tarea} fue agregada correctamente`)
      setTextTask('');
    }
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
      >

      </TaskList>
    </>
  )
}

export default App
