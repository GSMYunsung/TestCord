import { fireEvent, getByText, render } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

describe('<TodoForm />', () => {

    const dummyData = [
        {
            id : 0,
            buttonText : '삭제 버튼',
            text : '오늘의 할일 : 먹기',
            done : true,
        },
        {
            id : 1,
            buttonText : '그냥 삭제 버튼',
            text : '오늘의 할일 : 자기',
            done : false,
        }
    ]

    it('todo list render', () => {
        const {getByTestId , getByText} = render(<TodoList todoListData={dummyData} />);

        expect(getByTestId('todo-list')).toBeInTheDocument();

        expect(getByText(dummyData[0].text)).toBeInTheDocument;
        expect(getByText(dummyData[1].text)).toBeInTheDocument;

    })

    it('calls on Toggle and onDelete', () => {

        const onToggle = jest.fn();
        const onRemove = jest.fn();

        const {getByText} = render(<TodoList todoListData={dummyData} onToggle={onToggle} onRemove={onRemove} />);
        
        fireEvent.click(getByText(dummyData[0].text));
        expect(onToggle).toBeCalledWith(dummyData[0].id);

        fireEvent.click(getByText(dummyData[0].buttonText));
        expect(onRemove).toBeCalledWith(dummyData[0].id);
    })
    
})