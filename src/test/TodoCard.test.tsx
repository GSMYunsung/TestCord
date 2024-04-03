import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import "@testing-library/jest-dom/extend-expect";
import TodoCard from "../components/TodoCard";

//Your test suite must contain at least one test.

const sampleTodo = {
    id : 0,
    buttonText : '버튼',
    text : '오늘의 할일 : 밥먹기',
    done : false,
}

describe('<TodoCard />', () => {

    const setup = (props = {}) => {
        const initialProps = {id : sampleTodo.id ,buttonText : sampleTodo.buttonText , text : sampleTodo.text };

        const todoInitialProps = {todo : initialProps}

        const utils = render(<TodoCard {...todoInitialProps} {...props}/>);
        const { getByPlaceholderText , getByText , getByTestId } = utils;
        const cardTextView = getByTestId('todo-cardview-text')
        const cardButtonView = getByTestId('todo-cardview-button')
        const cardToggleView = getByTestId('todo-toggle-view')
        return {
            initialProps,
             ...utils,
             getByPlaceholderText,
             getByText,
             cardTextView,
             cardToggleView,
             cardButtonView
        }
    }

    it('Check if you have a Todo Card, Item',()=>{

        const {getByTestId , cardTextView , cardButtonView} = setup();

        expect(cardTextView.textContent).toBe(sampleTodo.text);
        expect(cardButtonView.textContent).toBe(sampleTodo.buttonText);
        
    })

    it('If you click on the button, the text style changes to Done (line-through)',()=>{
        const {cardTextView} = setup({todo : {...sampleTodo ,done : true}});
        expect(cardTextView).toHaveStyle('text-decoration: line-through;')
    })

    it('If you click on the button, the text style changes to not Done (line-through)',()=>{
        const {cardTextView} = setup({todo : {...sampleTodo ,done : false}});
        expect(cardTextView).not.toHaveStyle('text-decoration: line-through;')
    })

    it('user button click event and calls onToggle',()=>{
        const onToggle = jest.fn();
        const {cardToggleView , } = setup({onToggle});
        fireEvent.click(cardToggleView);
        expect(onToggle).toBeCalledWith(sampleTodo.id)
    })

    it('user button click event and calls onDelete',()=>{
        const onDelete = jest.fn();
        const {cardButtonView} = setup({onDelete});
        fireEvent.click(cardButtonView);
        expect(onDelete).toBeCalledWith(sampleTodo.id);
    })

});