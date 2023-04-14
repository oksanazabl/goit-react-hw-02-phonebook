import {Component} from 'react';
import Section from './Section';
// import Counter from './FeedbackOptions';
// import Statistics from './Statistics';
// import Notification from './Notification';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

 
  render() {
    return (
      <div>
        <Section title="Phonebook">
         
        </Section>
        <Section title="Cnotacts">
         
        </Section>
      </div>
    );
  }
}

export default App;
