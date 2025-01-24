import '../components/TaskList.scss'

function TaskList({task}) {
    
    return (
        <>
            <div className="TaskList">
                {task.map((item, index) => {

                    return (
                        <div className='item-task'>
                            <input type="checkbox" name="" id="" />
                            <p key={index}>{item}</p>
                            <input type="submit" value={`Borrar`} />
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default TaskList;