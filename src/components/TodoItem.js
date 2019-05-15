import React from 'react';

const TodoItem = (props) => {
    return (
        <div className="card">   
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <p>{props.id}</p>
            <input type="button" className="btn btn-danger" value="DELETE" onClick={_ => props.deleteTodo(props.id)}/>
        </div>
    )
}

export default TodoItem