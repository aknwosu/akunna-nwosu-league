import React, { Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import DoctorList from './DoctorList'
import Home from './Home'
class App extends Component {
  render() {
  return (
    <div>
      <DoctorList />
      <Home />
    </div>
  );
  }
}
export default App;
