import React, { useCallback, useState } from 'react';

// Todo List Form

// Input and submit buttons required to write a post

const TodoForm = ({onInsert} : any) => {

    const [boardValue , setBoardValue] = useState('');

    const handleSubmit = useCallback((e : any) =>  setBoardValue(e.target.value), []);

    const onSubmit = useCallback((e : any) => {
        onSubmit(boardValue);
        setBoardValue('');
        e.preventDefault(); //새로고침 방지
    },[onInsert, boardValue]);

    return (
        <form onSubmit={onInsert}>
            <input data-testid="todo-form-input" value={boardValue} onChange={handleSubmit} placeholder='Enter your todo' type="text" />
            <button data-testid="todo-form-submit-button" type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;