const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <h3>Priority: {props.priority}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Task;
