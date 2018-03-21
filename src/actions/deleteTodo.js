import actionConstant from '../lib/actionConstants';

let {DELETE_TODO} = actionConstant;

export default function deleteTodo(idArray) {
    return {
        type: DELETE_TODO,
        idArray
    };
}
