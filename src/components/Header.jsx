import '../components/Header.scss'

function Header() {
    

    return (

        <>
            <div className="title">
                <h1>Administrador de tareas</h1>
                <input id='task' type="text" placeholder='Ingresa una nueva tarea'/>
                <input type="submit" value='Guardar'/>
            </div>

        </>

    )

}

export default Header;