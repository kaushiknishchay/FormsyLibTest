import React, {Component} from 'react';
import './App.css';
import TodoList from './components/Todo/List';
import Formsy from 'formsy-react';
import TodoInput from './components/Todo/Input';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import addTodoAction from './actions/addTodo';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canAdd: null
        };
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(values) {
        if(this.props.editTodo.text!==undefined) {
            console.log("edit");
            this.props.updateTodo(values.todoText, values.todoDesc);
        }else{
            this.props.addTodo(values.todoText, values.todoDesc);
        }
        this.refs.todoForm.reset();

    }

    render() {
        return (
            <div className="App">
                <Formsy onSubmit={this.addTodo} ref="todoForm" >
                    <TodoInput
                        name={"todoText"}
                        heading={"Title"}
                        // defaultValue={this.props.editTodo.text}
                    />
                    <TodoInput
                        name={"todoDesc"}
                        // defaultValue={this.props.editTodo.desc}
                        heading={"Description"}
                    />
                    <input type={"submit"} value={"Add"}/>

                </Formsy>
                <hr/>
                <TodoList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let todoApp = state.todoApp;
    return {
        todoList: todoApp.todos,
        editTodo: todoApp.editTodo
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTodo: addTodoAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);