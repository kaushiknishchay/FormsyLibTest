import actionConstant from '../lib/actionConstants';

let {EDIT_TODO} = actionConstant;

export default function editTodo(id) {
    return {
        type: EDIT_TODO,
        id
    };
}
