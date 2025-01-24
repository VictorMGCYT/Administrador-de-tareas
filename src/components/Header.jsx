import '../components/Header.scss'

function Header({textTask, setTextTask, saveTask}) {
    


    return (

        <>
            <div className="title">
                <h1>Administrador de tareas</h1>
                <input value={textTask} onChange={(e) => setTextTask(e.target.value)} id='task' type="text" placeholder='Ingresa una nueva tarea'/>
                <input onClick={() => saveTask(textTask)} type="submit" value='Guardar'/>
            </div>

        </>

    )

}

export default Header;