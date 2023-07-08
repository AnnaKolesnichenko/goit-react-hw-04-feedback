import { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import Feedback from './components/Feedback/Feedback';

import './App.css';



class App extends Component {

  static positivePercent = 0;

  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }))
  };



  render () {

    return (
      <div className="App">
        <Feedback 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}/>

        <Statistics 
        stats={this.state}
        />
  
      </div>
    );
  }
}

export default App;
