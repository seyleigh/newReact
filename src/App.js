import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Choices from "./components/Choices";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Choices />
      </div>
    );
  }
}
export default App;
