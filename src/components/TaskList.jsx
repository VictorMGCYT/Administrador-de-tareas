import '../components/TaskList.scss'

function TaskList({task, deleteTask, isChecked, check}) {
    
    return (
        <>
            <div className="TaskList">
                {task.map((item, index) => {

                    
                    return item.descripcion !== null && item.descripcion !== undefined ? (
                        <div key={index} className='item-task'>
                            <input checked={item.completada} onChange={() => isChecked(item.completada, item.descripcion, index)} type="checkbox" name="" id="" />
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