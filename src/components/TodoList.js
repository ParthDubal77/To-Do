import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <li className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Todo setTodos={props.setTodos} todos={props.todos} todo={todo} key={todo.id} />
                ))}
            </li>
        </div>
    )
}

export default TodoList