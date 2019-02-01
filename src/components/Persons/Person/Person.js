import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

import {AuthContext} from '../../../containers/App';

import './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        this.focus();
    }

    focus() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        };

        return (
            <StyleRoot>
                <WithClass class="Person">
                    <AuthContext.Consumer>
                        {auth => auth ? <p>I'm authenticated</p> : null}
                    </AuthContext.Consumer>
                    <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                    <p>{this.props.children}</p>
                    <input 
                        ref={this.inputElement}
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name} />
                </WithClass>
            </StyleRoot>
        );
    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Radium(Person);
