import '../components/TaskList.scss'

function TaskList({task, deleteTask, isChecked}) {
    
    return (
        <>
            <div className="TaskList">
                {task.map((item, index) => {

                    
                    return item.descripcion !== null && item.descripcion !== undefined ? (
                        <div key={index} className='item-task'>
                            <input onChange={() => isChecked} type="checkbox" name="" id="" />
                            <p key={index}>{item.descripcion}</p>
                            <input onClick={() => deleteTask(index)} type="submit" value={`Borrar`} />
                        </div>
                    )
                    : null

                })}
            </div>
        </>
    )
}

export default TaskList;