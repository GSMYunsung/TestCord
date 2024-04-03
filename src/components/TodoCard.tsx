import React, { useCallback, useState } from 'react';

// Todo List Form

// Input and submit buttons required to write a post

// 컴포넌트의 분리 할 수있는 영역 분리하기
// 컴파운드 컴포넌트 대입해보고싶은데

const TodoCard = ({todo , onToggle ,onDelete} : any ) => {

    const [boardValue , setBoardValue] = useState(todo);

    return (
        <div data-testid="TodoCardForm">
            <div data-testid="todo-toggle-view" onClick={()=>onToggle(boardValue.id)}>
                <p style={{textDecoration : boardValue.done ? 'line-through' : 'none'}} data-testid="todo-cardview-text">{boardValue.text}</p>
            </div>
            <button data-testid="todo-cardview-button" onClick={()=>onDelete(boardValue.id)} type="submit">{boardValue.buttonText}</button>
        </div>
    );
    
};

export default TodoCard;