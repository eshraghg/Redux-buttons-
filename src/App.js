import React from 'react';
import './App.css';


class App extends React.Component {
  
  constructor () {
    super ();
    this.state = {
      num : 0 
    }
  }
  
  
  render () {
    return (
      <div>
        <h1>Current number is {this.state.num}</h1>
        <button onClick={this.addone}>Plus one</button>
      </div>
    )
  }
  
  addone = () => {
    const added = this.state.num + 1;
    this.setState ({num : added});
  }

}



export default App;
