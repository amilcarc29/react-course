import React from 'react';
import Radium from 'radium'

const cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };

    
    if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
        }
    }
    
    let classes = [];
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
            <div>
                <h1>I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}> Log in</button>
            </div>
    );
};

export default Radium(cockpit);
