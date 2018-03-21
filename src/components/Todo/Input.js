import React from 'react';
import {withFormsy} from 'formsy-react';

class TodoInput extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    // componentWillReceiveProps(nextProps) {
    //
    //     if (this.props.getValue() === this.props.defaultValue && nextProps.defaultValue !== this.props.defaultValue) {
    //         this.props.setValue(nextProps.defaultValue);
    //     }
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.todoText !== this.props.getValue();
    // }

    onChange(e) {
        this.props.setValue(e.currentTarget.value);
    }

    render() {

        let errorMessage = this.props.getErrorMessage();

        return (
            <div>
                <label>{this.props.heading}</label>
                <br/>
                <input
                    type="text"
                    name={this.props.name}
                    value={this.props.getValue() || ''}
                    onChange={e => this.onChange(e)}
                    required/>
                {
                    errorMessage && <p className="alert alert-danger">{errorMessage}</p>
                }
                <br/>
                <br/>
            </div>
        );
    }

}


export default withFormsy(TodoInput);