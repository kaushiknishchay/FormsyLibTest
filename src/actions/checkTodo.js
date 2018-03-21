import actionConstant from '../lib/actionConstants';

let {CHECK_TODO} = actionConstant;

export default function checkTodo(id, isMarked) {
    return {
        type: CHECK_TODO,
        id,
        isMarked
    };
}
