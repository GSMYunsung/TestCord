import { fireEvent, getByText, render } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";
import TodoApp, { todoListData } from "../components/TodoApp";

describe('<TodoApp />', () => {

    it('todo app render with child items', () => {
        const {getByTestId} = render(<TodoApp/>);

        expect(getByTestId('todo-list')).toBeInTheDocument();
        expect(getByTestId('todo-form')).toBeInTheDocument();

    })

    it('todo render with todo item list ' , () => {
        const {getByTestId , getAllByTestId} = render(<TodoApp/>);

        expect(getAllByTestId('todo-cardview-text')[0]).toHaveTextContent(todoListData[0].text)
        expect(getAllByTestId('todo-cardview-button')[0]).toHaveTextContent(todoListData[0].buttonText)

        expect(getAllByTestId('todo-cardview-text')[1]).toHaveTextContent(todoListData[1].text)
        expect(getAllByTestId('todo-cardview-button')[1]).toHaveTextContent(todoListData[1].buttonText)
    })

    it('add new Todo' , ()=>{
        const {getByTestId} = render(<TodoApp/>);

        const sampleNewTodo = "Todo List completed"

        expect(getByTestId('todo-list')).toBeInTheDocument();

        fireEvent.change(getByTestId('todo-form-input'), {
            target : {
                value : sampleNewTodo
            }
        })
        fireEvent.click(getByTestId('todo-form-submit-button'))

        expect(getByTestId('todo-list')).toHaveTextContent(sampleNewTodo)
    })

    it('Toggle Todo List' , ()=>{
        const {getByTestId , getAllByTestId} = render(<TodoApp/>);

        expect(getByTestId('todo-list')).toBeInTheDocument();

        expect(getAllByTestId('todo-cardview-text')[0]).not.toHaveStyle('text-decoration: line-through;');
        fireEvent.click(getAllByTestId('todo-toggle-view')[0])

        expect(getAllByTestId('todo-cardview-text')[0]).toHaveStyle('text-decoration: line-through;');
        fireEvent.click(getAllByTestId('todo-toggle-view')[0])
        
        expect(getAllByTestId('todo-cardview-text')[0]).not.toHaveStyle('text-decoration: line-through;');

    })

    it('Delete Todo List',()=>{
        const {getByTestId , getAllByTestId} =  render(<TodoApp/>);

        expect(getByTestId('todo-list')).toBeInTheDocument();

        fireEvent.click(getAllByTestId('todo-cardview-button')[0])

        expect(getAllByTestId('todo-cardview-text')[0]).not.toHaveTextContent(todoListData[0].text)
    })
})