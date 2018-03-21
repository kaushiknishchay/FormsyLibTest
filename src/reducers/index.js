
import {combineReducers} from 'redux';

import todoReducer from './todoReducer';


const rootReducer = combineReducers({
    todoApp: todoReducer,
});

export default rootReducer;