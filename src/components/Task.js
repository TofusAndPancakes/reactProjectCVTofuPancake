import ButtonBasic from "./ButtonBasic"

export const Task = ({ task, onDelete}) => {
    return (
        <div className="task">
        <h3>{task.text}</h3>
        <p>{task.description}</p>
        <ButtonBasic text="Delete!" 
        onClick={() => onDelete(task.id)}/>
        </div>
    )
}

export default Task