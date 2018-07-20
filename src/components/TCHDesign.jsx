import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Sass/TCHDesign.sass'

// IMAGES
import Mockup1 from '../images/Mockup1.png';
import Mockup2 from '../images/Mockup2.png';
import Mockup3 from '../images/Mockup3.png';
import Mockup4 from '../images/Mockup4.png';
import Mockup5 from '../images/Mockup5.png';



export default class TCHDesign extends Component {
  constructor() {
    super()
    this.state = {

    }

    this.expandLink = this.expandLink.bind(this);
    this.minimizeLink = this.minimizeLink.bind(this);
  }

  componentDidMount(){
    let vertNav = document.querySelector('#VertNavContainer');
    let horzNav = document.querySelector('#HorzNavContainer');

    vertNav.style.display = 'none';
    horzNav.style.display = 'flex';

  }

  expandLink(evt){
    let el = evt.currentTarget

    let keyframes = [
      {transform: 'rotate(0) scale(1)'},
      {transform: 'rotate(0) scale(1.08)'}
    ];

    let timings = {
      easing: 'ease-in',
      iterations: 1,
      direction: 'normal',
      fill: 'both',
      duration: 400
    };

    el.animate(keyframes, timings);
  }

  minimizeLink(evt){
    let el = evt.currentTarget

    let keyframes = [
      {transform: 'rotate(0) scale(1.08)'},
      {transform: 'rotate(0) scale(1)'}
    ];

    let timings = {
      easing: 'ease-in',
      iterations: 1,
      direction: 'normal',
      fill: 'both',
      duration: 200
    };

    el.animate(keyframes, timings);
  }

  render(){
    return(
      <div id='ContentPage'>
        <div id='TitleContainer'>
          <h3>The Collected Home: Design</h3>
        </div>
        <div id='ContentContainer'>
          <div id='WebsiteMockupTitle'>
            <h4>The Collected Home: eCommerce Mockup</h4>
          </div>
          <div id='WebsiteMockupContainer'>
            <div id='WebsiteMockupImages'>
              <img src={Mockup1} alt='Mockup1' />
              <img src={Mockup2} alt='Mockup2' />
              <img src={Mockup3} alt='Mockup3' />
              <img src={Mockup4} alt='Mockup4' />
              <img src={Mockup5} alt='Mockup5' />
            </div>
            <div id='WebsiteMockupWritten'></div>
          </div>
          <div id='BusinessCardsContainer'>
            <div id='BusinessCardsImages'></div>
            <div id='BusinessCardsWritten'></div>
          </div>
          <div id='WindowContainer'>
            <div id='WindowImages'></div>
            <div id='WindowWritten'></div>
          </div>
        </div>
      </div>
    )
  }
}