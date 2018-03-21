import React from 'react';
import {withFormsy} from 'formsy-react';


class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.currentTarget);
    }

    render() {
        let style = this.props.style;
        return (<div style={style}>
            <input
                type={"checkbox"}
                name={this.props.name}
                disabled={this.props.disabled}
                onChange={this.onChange}/>
        </div>);
    }
}

export default withFormsy(CheckBox);