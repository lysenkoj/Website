import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import '../Sass/Splash.sass'




export default class TCHDesign extends Component {
  constructor() {
    super()
    this.state = {
      animationWord: 'Coming Soon...'
    }

    this.handleResize = this.handleResize.bind(this);
    this.animateLogo = this.animateLogo.bind(this);
    this.highlight = this.hightlight.bind(this);
    this.unHightlight = this.unHightlight.bind(this);
  }

  componentDidMount(){
    let el = document.getElementById('ComingSoon');
    window.addEventListener("resize", this.handleResize);
    let logo = document.querySelector('#SplashLogo');
    logo.style.left = `${el.offsetLeft - 54}px`;
  }

  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  handleResize(WindowSize, event) {
    let el = document.getElementById('ComingSoon');
    let logo = document.querySelector('#SplashLogo');
    logo.style.left = `${el.offsetLeft}px`;
  }

  hightlight(evt){
    let link = evt.currentTarget;
    link.style.backgroundColor = 'yellow';
  };

  unHightlight(evt){
    let link = evt.currentTarget;
    link.style.backgroundColor = 'white';
  };

  animateLogo(){
    let logo = document.querySelector('#SplashLogo');

    let keyframes = {
      // start: [
      //   {transform: 'translateY(-1650px) translateX(0px) scaleX(.8) scaleY(1.2)'},
      //   {transform: 'translateY(0px) translateX(0px) scaleX(1) scaleY(1)'},
      //   {transform: 'translateY(0px) translateX(0px) scaleX(1.2) scaleY(.8)'}
      // ],
      c: [
        {transform: 'translateY(0px) translateX(0px) rotate(0) scaleX(1.2) scaleY(.8)'},
        {transform: 'translateY(-150px) translateX(36px) rotate(45deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(20px) translateX(72px) rotate(90deg) scaleX(1) scaleY(1)'}
      ],
      o1: [
        {transform: 'translateY(20px) translateX(72px) rotate(90deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-150px) translateX(115px) rotate(135deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(20px) translateX(150px)  rotate(180deg) scaleX(1) scaleY(1)'}
      ],
      m: [
        {transform: 'translateY(20px) translateX(150px) rotate(180deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-150px) translateX(181px) rotate(225deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(0px) translateX(212px)  rotate(270deg) scaleX(1) scaleY(1)'}
      ],
      i: [
        {transform: 'translateY(0px) translateX(212px) rotate(270deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-150px) translateX(236px) rotate(315deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(20px) translateX(260px)  rotate(360deg) scaleX(1) scaleY(1)'}
      ],
      n1: [
        {transform: 'translateY(20px) translateX(260px) rotate(0) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-150px) translateX(291px) rotate(45deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(10px) translateX(322px)  rotate(90deg) scaleX(1) scaleY(1)'}
      ],
      g: [
        {transform: 'translateY(10px) translateX(322px) rotate(90deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-1650px) translateX(376px) rotate(135deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(20px) translateX(430px)  rotate(180deg) scaleX(1) scaleY(1)'}
      ],
      s: [
        {transform: 'translateY(20px) translateX(430px) rotate(180deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-60px) translateX(464px) rotate(225deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(40px) translateX(502px)  rotate(270deg) scaleX(1) scaleY(1)'}
      ],
      o2: [
        {transform: 'translateY(40px) translateX(502px) rotate(270deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-30px) translateX(531px) rotate(315deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(40px) translateX(562px)  rotate(360deg) scaleX(1) scaleY(1)'}
      ],
      o3: [
        {transform: 'translateY(40px) translateX(562px) rotate(0) scaleX(1) scaleY(1)'},
        {transform: 'translateY(-100px) translateX(603px) rotate(45deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(55px) translateX(644px)  rotate(115deg) scaleX(1) scaleY(1)'}
      ],
      n2: [
        {transform: 'translateY(55px) translateX(644px) rotate(115deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(40px) translateX(674px) rotate(148deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(65px) translateX(703px)  rotate(180deg) scaleX(1) scaleY(1)'}
      ],
      final: [
        {transform: 'translateY(65px) translateX(703px) rotate(180deg) scaleX(1) scaleY(1)'},
        {transform: 'translateY(85px) translateX(750px) rotate(225deg) scaleX(.8) scaleY(1.2)'},
        {transform: 'translateY(1000px) translateX(800px)  rotate(360deg) scaleX(1) scaleY(1)'}
      ]

    };

    let mainTiming = {
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      iterations: 1,
      direction: 'normal',
      fill: 'both',
      duration: 600
    }

    let timingLong = {
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      iterations: 1,
      direction: 'normal',
      fill: 'both',
      duration: 1200
    }

    let timingShort = {
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      iterations: 1,
      direction: 'normal',
      fill: 'both',
      duration: 300
    }


    // let start = logo.animate(keyframes.start, timingLong);
    // start.onfinish = function() {
      let firstBounce = logo.animate(keyframes.c, mainTiming);
      firstBounce.onfinish = function() {
        let secondBounce = logo.animate(keyframes.o1, mainTiming);
        secondBounce.onfinish = function(){
          let thirdBounce = logo.animate(keyframes.m, mainTiming);
          thirdBounce.onfinish = function(){
            let fourthBounce = logo.animate(keyframes.i, mainTiming);
            fourthBounce.onfinish = function(){
              let fifthBounce = logo.animate(keyframes.n1, mainTiming);
              fifthBounce.onfinish = function(){
                let sixthBounce = logo.animate(keyframes.g, timingLong);
                sixthBounce.onfinish = function(){
                  let seventhBounce = logo.animate(keyframes.s, timingShort);
                  seventhBounce.onfinish = function(){
                    let eighthBounce = logo.animate(keyframes.o2, timingShort);
                    eighthBounce.onfinish = function(){
                      let ninthBounce = logo.animate(keyframes.o3, timingShort);
                      ninthBounce.onfinish = function(){
                        let final = logo.animate(keyframes.n2, timingShort);
                        final.onfinish = function(){
                          logo.animate(keyframes.final, mainTiming);
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    // };
  }

  // Start animation
  // First Logo comes in from left
  // Next Animation
  // Arrives at first letter and then they bounce it back and then forth

  render(){
    return(
      <div id='SplashContainer'>
        <div id='AnimationContainer'>
          <div id='SplashLogoContainer'>
            <div id='SplashLogo'>
              <div id='LogoBorder'>
                <div id='LogoEyesContainer'>
                  <div className='LogoEye'/>
                  <div className='LogoEye'/>
                </div>
              </div>
            </div>
          </div>
          <div id='ComingSoonContainer'>
            <div id='ComingSoon' >
            {
              this.state.animationWord.split('').map( (letter, index) => {
                  return <span className='SplashLetter' id={`Letter${index}`} key={index}>{letter}</span>
              })
            }
            </div>
          </div>
        </div>
        <div id='InfoContainer'>
          <div id='Name' onClick={this.animateLogo}>
            <h3>JORDAN LYSENKO</h3>
          </div>
          <div id='Roles'>
            <h3><span onMouseEnter={this.highlight} onMouseLeave={this.unHightlight}>Developer</span> - <span onMouseEnter={this.highlight} onMouseLeave={this.unHightlight}>Designer</span> - <span onMouseEnter={this.highlight} onMouseLeave={this.unHightlight}>Illustrator</span></h3>
          </div>
          <div id='Social'>
            <div className='Icon'>
              <img />
            </div>
            <div className='Icon'>
              <img />
            </div>
            <div className='Icon'>
              <img />
            </div>
          </div>

        </div>
      </div>
    )
  }
}