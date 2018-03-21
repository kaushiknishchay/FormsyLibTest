import actionConstant from "../lib/actionConstants";

let {ADD_TODO, CHECK_TODO, EDIT_TODO, DELETE_TODO, UPDATE_TODO} = actionConstant;

const initialState = {
    todos: [
        {
            text: "Todo 1",
            desc: "Buxum ridetiss, tanquam placidus burgus."
        },
        {
            text: "Todo 2",
            desc: "One livings facilitates most dimensions."
        },

    ],
    checkedTodos: [],
    editTodo: {}
};

export default function todoReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        desc: action.desc
                    }
                ]
            });

        case CHECK_TODO:

            let checkList = state.checkedTodos.slice(); //slice so that it creates new copy
            if (!action.isMarked) {
                checkList.splice(checkList.findIndex(x => x === action.id), 1);
            }
            else {
                checkList.push(action.id);
            }

            return Object.assign({}, state, {
                checkedTodos: checkList
            });
        case EDIT_TODO:
            return Object.assign({}, state, {
                editTodo: state.todos[action.id]
            });
        case UPDATE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, idx) => {
                    if (action.index === idx) {
                        return Object.assign({}, todo, {
                            text: action.text,
                            desc: action.desc
                        });
                    } else {
                        return todo;
                    }
                })
            });
        case DELETE_TODO:
            let todoList = state.todos.slice();
            action.idArray.map(idx => {
                todoList.splice(idx, 1);
            });
            return Object.assign({}, state, {
                todos: todoList
            });
        default:
            return state;
    }

}