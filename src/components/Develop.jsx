import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Sass/Develop.sass'

import WAAPIImg from '../images/WAAPIThumb.png';
import LunarThumb from '../images/LunarThumb.png';
import SplashThumb from '../images/SplashThumb.png';



export default class Develop extends Component {
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
      <div id="DevelopContentContainer">
        <div id='DevelopProjectContainer'>
          <div id='DevelopThumbContainer'>
          <Link to='/TCHSplash' className='ThumbContainer'>
            <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
            <img src={SplashThumb} alt='WAAPIThumb'/>
            </div>
          </Link>
          <Link to='/LunarAdventure' className='ThumbContainer'>
            <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
              <img src={LunarThumb} alt='WAAPIThumb'/>
            </div>
          </Link>
          <Link to='/WAAPIDemo' className='ThumbContainer'>
            <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
              <img src={WAAPIImg} alt='WAAPIThumb'/>
            </div>
          </Link>
          </div>
          <div id='DevelopLinkTitles'>
            <Link to='/TCHDesign' id='TCHDesignTitle'>
              <h4>TCH SPLASH</h4>
            </Link>
            <Link to='/indigoPunch' id='IndigoPunchTitle'>
              <h4>LUNAR ADVENTURE</h4>
            </Link>
            <Link to='/OtherWorlds' id='OtherWorldsTitle'>
            <h4>WEB ANIMATION DEMO</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}