
import React from 'react';
import TodoItem from './TodoItem';

const TodosContainer = (props) => {
    const todoCards = props.todos.map((todo, i) => 
        <TodoItem {...todo} key={Date.now() + i} deleteTodo={props.deleteTodo}/>)

    return <div>{todoCards}</div>

}
export default TodosContainer;