import React, { useCallback, useState } from 'react';
import TodoCard from './TodoCard';

const TodoList = ({todoListData , onToggle , onRemove} : any) => {
    return (
    <ul data-testid="todo-list">
        {
            todoListData.map((todo : any) => {
                return <div key={`todo-list-item-${todo.id}`}><TodoCard todo={todo} onToggle={(id : string)=>{onToggle(id)}} onDelete={(id : string)=>{onRemove(id)}}/></div>
            })
        }
    </ul>
    );
}

export default TodoList;