import React, { Component } from 'react';
import darklogo from '../assets/dark-logo.png';
import './App.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Marketing from '../components/Marketing';
import TimeLine from '../components/TimeLine';
import Planing from '../components/Planing';
import Faq from '../components/Faq';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Banner/>
          <Marketing/>
          <TimeLine/>
          <Planing/>
          <Faq/>
      </div>
    );
  }
}

export default App;
