import './App.scss'
import Header from './components/Header'
import TaskList from './components/TaskList'
import useTaskManager from './hooks/useTaskManager'

function App() {
    
    const { task, textTask, setTextTask, saveTask, deleteTask, isChecked } = useTaskManager();

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
                isChecked={isChecked}
            >

            </TaskList>
        </>
    )
}

export default App
