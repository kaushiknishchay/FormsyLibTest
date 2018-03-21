import actionConstant from '../lib/actionConstants';

let {ADD_TODO} = actionConstant;

export default function addTodo(text, desc) {
    return {
        type: ADD_TODO,
        text,
        desc
    };
}
