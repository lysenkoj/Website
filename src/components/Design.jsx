import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Sass/Design.sass'

import TCHDesignThumb from '../images/TCHDesignThumb.png';
import indigoPunch from '../images/IndigoPunchThumb.png';
import luckyThumb from '../images/LuckyThumb.png';
import otherWorldsThumb from '../images/OtherWorldsThumb.png';



export default class Design extends Component {
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
      <div id="DesignContentContainer">
        <div id='DesignProjectContainer'>
          <div id='DesignThumbContainer'>
            <Link to='/TCHDesign' className='ThumbContainer'>
              <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
                <img src={TCHDesignThumb} alt='TCHDesignThumb'/>
              </div>
            </Link>
            <Link to='/indigoPunch' className='ThumbContainer'>
              <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
                <img src={indigoPunch} alt='IndigoPunchThumb'/>
              </div>
            </Link>
            <Link to='/OtherWorlds' className='ThumbContainer'>
              <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
                <img src={otherWorldsThumb} alt='OtherWorldsThumb'/>
              </div>
            </Link>
            <Link to='/LuckyPop' className='ThumbContainer'>
              <div className='ThumbLinks' onMouseEnter={this.expandLink} onMouseLeave={this.minimizeLink}>
                <img src={luckyThumb} alt='LuckyThumb'/>
              </div>
            </Link>
          </div>
          <div id='DesignLinkTitles'>
            <Link to='/TCHDesign' id='TCHDesignTitle'>
              <h4>TCH DESIGN</h4>
            </Link>
            <Link to='/indigoPunch' id='IndigoPunchTitle'>
              <h4>indigoPunch</h4>
            </Link>
            <Link to='/OtherWorlds' id='OtherWorldsTitle'>
            <h4>OTHER WORLDS</h4>
            </Link>
            <Link to='/LuckyPop' id='LuckyPopTitle'>
            <h4>LUCKY POP</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}