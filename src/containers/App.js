import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Radium, {StyleRoot} from 'radium'

import withClass2 from '../hoc/withClass2';

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      {id: 'asd1', name: 'Max', age: 28},
      {id: 'asd2', name: 'Manu', age: 29},
      {id: 'asd3', name: 'Stephanie', age: 26}
    ],
    showPersons: false,
    authenticated: false
  }

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons : !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }
  
    return (
        <StyleRoot>
            <Cockpit
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              login={this.loginHandler}
              clicked={this.togglePersonsHandler} />
              <AuthContext.Provider value={this.state.authenticated}>
                {persons}
              </AuthContext.Provider>
        </StyleRoot>
    );
  }
}

export default withClass2(Radium(App), 'App');
