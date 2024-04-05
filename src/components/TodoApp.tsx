import React, { useCallback, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Todo List Form

// Input and submit buttons required to write a post

export const todoListData = [{
            id : 0,
            buttonText : '삭제 버튼',
            text : '오늘의 할일 : 밥먹기',
            done : false,
        },{
            id : 1,
            buttonText : '삭제 버튼',
            text : '오늘의 할일 : 자기',
            done : true,
}]

const TodoApp = () => {

    const [todos , setTodos] = useState(todoListData);

    const nextNumber = useRef(3);

    const onInsert = useCallback((todoString : string) => {

        setTodos(todos.concat({
            id : nextNumber.current,
            buttonText : '삭제 버튼',
            text : todoString,
            done : false,
        }))

        nextNumber.current += 1;
    } , [todos]);

    const onToggle = useCallback((todoIdx : string) => {
        setTodos(todos.map((data)=> data.id === parseInt(todoIdx) ? {...data , done : !data.done} : {...data}))
    } , [todos]);

    const onRemove = useCallback((todoIdx : string) => {
        setTodos(todos.filter((data)=> data.id !== parseInt(todoIdx)))
    } , [todos]);


    return (
        <div data-testid="TodoApp">
            <TodoForm onInsert={onInsert}/>
            <TodoList todoListData={todos} onToggle={(id : string)=>onToggle(id)} onRemove={(id : string)=>{onRemove(id)}}/>
        </div>
    );
    
};

export default TodoApp;