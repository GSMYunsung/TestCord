export type TodoItemWithTextButton = {
    id : number,
    text : string,
    buttonText : string,
    buttonClickEvent : ()=> void,
}