import React, { Component } from 'react';
import darklogo from '../assets/dark-logo.png';
import './App.css';
import Header from '../components/Navba';
import Banner from '../components/Banner';
import Marketing from '../components/Marketing';
import TimeLine from '../components/TimeLine';
import Planing from '../components/Planing';
import Faq from '../components/Faq';
import {connect} from 'react-redux';
import actions from '../actions/actions';

class App extends Component {
  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    if(content)
    return (
      <div className="App">
          <Header color="dark" dark={true} light={true} data={content.page.menu} switchLanguage={switchLanguage}/>
          <Banner data={content.page.banner}/>
          <Marketing data={content.page.marketing}/>
          <TimeLine data={content.page.timeline}/>
          <Planing data={content.page.planing}/>
          <Faq data={content.page.faq}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(App);;
