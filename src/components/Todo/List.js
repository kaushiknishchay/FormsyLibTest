import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Formsy from 'formsy-react';
import CheckBox from "./CheckBox";
import RadioBtn from "./RadioBtn";
import checkTodoAction from '../../actions/checkTodo';
import editTodoAction from '../../actions/editTodo';
import deleteTodoAction from '../../actions/deleteTodo';


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleChange(idx, e) {
        if (e.type === "checkbox")
            this.props.checkTodo(idx, e.checked);
        if (e.type === "change") {
            this.props.editTodo(idx);
        }
    }

    deleteTodo(){
        this.props.deleteTodo(this.props.selectedList);
    }

    resetList(){
        this.refs.todoList.reset();
    }

    render() {

        let showDeleteBtn = this.props.selectedList.length > 0 ? "block" : "none";
        let someStyle = {float: "right", padding: 2, display: showDeleteBtn};

        return (
            <React.Fragment>
                <button name="deleteTodo" onClick={this.deleteTodo} style={someStyle}>Delete</button>
                <button name="editTodo" style={someStyle}>Edit</button>
                <br/>
                <br/>
                <Formsy ref="todoList">
                    {
                        this.renderList()
                    }
                    <input type="button" value="Reset" onClick={this.resetList.bind(this)}/>

                </Formsy>
            </React.Fragment>)
    }

    renderList() {
        let someStyle = {float: "right", padding: 10};
        let {selectedList, selectedEditList} = this.props;
        let radioDisable = selectedList.length > 0;
        let checkDisable = (selectedEditList.text !== undefined);

        if (this.props.todoList.length > 0) {
            return this.props.todoList.map((val, idx) => {
                return (
                    <div className="todoList" key={idx}>
                        <CheckBox
                            name="selectedBox"
                            value={idx}
                            disabled={checkDisable}
                            style={someStyle}
                            onChange={e => this.handleChange(idx, e)}
                        />
                        <RadioBtn
                            name="editTodo"
                            value={idx}
                            style={someStyle}
                            disabled={radioDisable}
                            onChange={e => this.handleChange(idx, e)}
                        />

                        <b>{val.text}</b><br/>
                        <span>{val.desc}</span>
                    </div>)
            });
        } else {

        }
    }
}


function mapStateToProps(state) {
    let {todoApp} = state;
    return {
        todoList: todoApp.todos,
        selectedList: todoApp.checkedTodos,
        selectedEditList: todoApp.editTodo
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        checkTodo: checkTodoAction,
        editTodo: editTodoAction,
        deleteTodo: deleteTodoAction,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);