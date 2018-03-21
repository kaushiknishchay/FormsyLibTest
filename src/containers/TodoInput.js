import Input from '../components/Todo/Input';
import {connect} from "react-redux";
// import {bindActionCreators} from "redux";

function mapStateToProps(state) {
    return {
        todoList: state.todoApp.todos
    };
}

export default connect(mapStateToProps)(Input);