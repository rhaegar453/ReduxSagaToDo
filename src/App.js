import React, {Component} from 'react';
import Navbar from './Components/Navigation';
import Body from './Components/Body';
import Footer from './Components/Footer';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}