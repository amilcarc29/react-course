import React, {Component} from 'react';
import Person from './Person/Person';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class Persons extends Component {

    render() {
        return this.props.persons.map((person, index) => {
            //return <ErrorBoundary key={person.id}>
            return  <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)} />
              //  </ErrorBoundary>
        });
    }   
}

export default Persons;
