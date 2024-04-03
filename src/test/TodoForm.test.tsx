// 1. Are the input and submit buttons rendered properly?
// 2. Does the input work properly? (Does the value in the input change as the user changes the value?)
// 3. When the button is pressed, is the value returned normally based on the form data?

import { fireEvent, render } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import "@testing-library/jest-dom/extend-expect";

describe('<TodoForm />', () => {

    const setup = (props = {}) => {
        const utils = render(<TodoForm {...props} />);
        const { getByPlaceholderText , getByText , getByTestId } = utils;
        const input = getByTestId('todo-form-input');
        const button = getByTestId('todo-form-submit-button');
        return {
            ...utils,
             input,
             button,
             getByPlaceholderText,
             getByText
        }
    }

    it('Check if you have a button and an input', () => {
        const { getByPlaceholderText, getByText } = render(<TodoForm />)
        getByPlaceholderText('Enter your todo');
        getByText('Submit');
    })

    it('Check input works properly', () => {
        const {input} = setup();

        fireEvent.change(input , {
            target : {
                value : 'Upload a text'
            }
        })

        expect(input).toHaveAttribute('value', 'Upload a text');
    })

    it('Check button works properly and input clear', () => {

       // Error: Not implemented: HTMLFormElement.prototype.requestSubmit
       // submit implemnted 스코프 안에서 돌게 하기의 객체로 묶어줌
       window.HTMLFormElement.prototype.submit = () => {

            // 이 함수를 사용하면 이 함수가 호출 된 다음 toBeCalled 또는 toBeCalledWith 같은 matcher 를 사용해서 함수가 호출됐는지, 
            // 호출 됐다면 어떤 파라미터로 호출 됐는지 이런 것들을 쉽게 확인 할 수 있습니다.
            const onInsert = jest.fn();
           
            const {input , button} = setup();
            
            fireEvent.change(input,{
                target : {
                    value : 'Upload a text'
                }
            });
    
            fireEvent.click(button);
    
            expect(onInsert).toBeCalledWith('Upload a text');
            expect(input).toHaveAttribute('value', '');

        }
    })
})