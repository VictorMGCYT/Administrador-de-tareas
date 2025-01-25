import '../components/TaskList.scss'

function TaskList({task, deleteTask}) {
    
    return (
        <>
            <div className="TaskList">
                {task.map((item, index) => {

                    
                    return item !== null && item !== undefined ? (
                        <div key={index} className='item-task'>
                            <input type="checkbox" name="" id="" />
                            <p key={index}>{item}</p>
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