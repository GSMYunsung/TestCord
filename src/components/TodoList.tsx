import React, { useCallback, useState } from 'react';
import TodoCard from './TodoCard';

const TodoList = ({todoListData , onToggle , onRemove} : any) => {
    return (
    <ul data-testid="todo-list">
        {
            todoListData.map((todo : any) => {
                return <div key={`todo-list-item-${todo.id}`}><TodoCard todo={todo} onToggle={onToggle} onDelete={onRemove}/></div>
            })
        }
    </ul>
    );
}

export default TodoList;