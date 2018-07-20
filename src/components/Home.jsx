import React, { Component } from 'react';
import {Link} from 'react-router-dom';




export default class Home extends Component{
  constructor() {
    super()
    this.state = {
      loading: true,
      animations: []
    }
    let root = document.querySelector('div#root');
    let loader = document.querySelector('div#Loader-Page');

    root.style.display = 'none';
    loader.style.display = 'flex';

    this.animateLoader = this.animateLoader.bind(this);
    this.rotateLoader = this.rotateLoader.bind(this);

  }

  componentDidMount(){
      let vertNav = document.querySelector('#VertNavContainer');
      let horzNav = document.querySelector('#HorzNavContainer');

      vertNav.style.display = 'flex';
      horzNav.style.display = 'none';

    this.animateLoader();

    setTimeout(() => {
      let root = document.querySelector('div#root');
      let loader = document.querySelector('div#Loader-Page');
      loader.style.display = 'none';
      root.style.display = 'inline';

      this.setState(previousState => {
        previousState.loading = false;
        previousState.animations.forEach(animation => {
          // animation.pause();
        })
        return previousState;
      })


    }, 3750);
  }

  animateLoader(){
      this.rotateLoader();
  }

  rotateLoader(){
    let spin = document.querySelector('div#Logo');

    let keyframes = [
      {transform: 'rotate(0)'},
      {transform: 'rotate(360deg)'}
    ];

    let timings = {
      easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
      iterations: Infinity,
      direction: 'normal',
      fill: 'both',
      duration: 1250
    };

    spin.animate(keyframes, timings);
  }

render(){
    return (
      <div id='HomeContainer'>
        <div id='HomeContentContainer'>
          <div id="DevelopContainer">
          {/* WORD LINK EACH LETTER BOUNCES AND GROWS TO DIFFERENT SIZES ON HOVER */}
            <Link to='/Develop' id='DevelopTitleLink'>
              <h1>DEVELOPER</h1>
            </Link>
            <div id='LogoContainerLeft'>
              <div className='LogoBlock'>
                <div id='JContainer'>
                  <div id='JUpper'/>
                  <div id='JLower'/>
                </div>
              </div>
            </div>
          </div>
          <div id="DesignContainer">
          {/* WORK LINK EACH LETTER CHANGES A DIFFERENT COLOR ON HOVER */}
            <div id='LogoContainerRight'>
              <div className='LogoBlock'>
                <div id='LContainer'>
                  <div id='LUpper'/>
                </div>
              </div>
            </div>
            <Link to='/Design' id='DesignTitleLink'>
              <h1>DESIGNER</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}