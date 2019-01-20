import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

import './Person.css';

class Person extends Component {

    render() {
        const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        };

        return (
            <StyleRoot>
                <div className="Person" style={style}>
                    <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(Person);
