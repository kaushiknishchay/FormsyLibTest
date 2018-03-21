import React from 'react';
import {withFormsy} from "formsy-react";


class RadioBtn extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.currentTarget);
    }

    render() {
        let style = this.props.style;
        return (
            <div style={style}>
                <input type="radio"
                       name={this.props.name}
                       value={this.props.value}
                       disabled={this.props.disabled}
                       onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default withFormsy(RadioBtn);