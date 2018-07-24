import React, { Component } from 'react';
import '../Sass/Splash.sass'

import gitBlack from '../images/gitBlack.png';
import gitYellow from '../images/gitYellow.png';
import linkedInBlack from '../images/linkedInBlack.png';
import linkedInYellow from '../images/linkedInYellow.png';
import resumeBlack from '../images/resumeBlack.png';
import resumeYellow from '../images/resumeYellow.png';
import resume from '../images/assets/Jordan_Lysenko_Resume_2018.pdf';
import emailBlack from '../images/emailBlack.png';
import emailYellow from '../images/emailYellow.png';




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
    this.linkColorSwapBlack = this.linkColorSwapBlack.bind(this);
    this.linkColorSwapYellow = this.linkColorSwapYellow.bind(this);
  }

  componentDidMount(){
    let el = document.getElementById('ComingSoon');
    window.addEventListener("resize", this.handleResize);
    let logo = document.querySelector('#SplashLogo');
    logo.style.left = `${el.offsetLeft}px`;

    setTimeout(this.animateLogo, 1000)
    setInterval(this.animateLogo, 7250);
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

  linkColorSwapYellow(evt, file){
    let link = evt.currentTarget;
    link.src = file;

  };

  linkColorSwapBlack(evt, file){
    let link = evt.currentTarget;
    link.src = file;
  };


  animateLogo(){
    let logo = document.querySelector('#SplashLogo');
    let letterC = document.querySelector('#Letter0');
    let letterO1 = document.querySelector('#Letter1');
    let letterM = document.querySelector('#Letter2');
    let letterI = document.querySelector('#Letter3');
    let letterN1 = document.querySelector('#Letter4');
    let letterG = document.querySelector('#Letter5');
    let letterS = document.querySelector('#Letter7');
    let letterO2 = document.querySelector('#Letter8');
    let letterO3 = document.querySelector('#Letter9');
    let letterN2 = document.querySelector('#Letter10');

    let stretch = [
      {transform: 'scaleX(1) scaleY(1)'},
      {transform: 'scaleX(0.8) scaleY(1.4)'},
      {transform: 'scaleX(1) scaleY(1)'}
    ];

    let squish = [
      {transform: 'scaleX(1) scaleY(1)'},
      {transform: 'scaleX(1.4) scaleY(0.8)'},
      {transform: 'scaleX(1) scaleY(1)'}
    ];

    let keyframes = {
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

    let firstBounce = logo.animate(keyframes.c, mainTiming);
    letterC.animate(stretch, mainTiming);
    firstBounce.onfinish = function() {
      let secondBounce = logo.animate(keyframes.o1, mainTiming);
      letterO1.animate(stretch, mainTiming);
      secondBounce.onfinish = function(){
        let thirdBounce = logo.animate(keyframes.m, mainTiming);
        letterM.animate(stretch, mainTiming);
        thirdBounce.onfinish = function(){
          let fourthBounce = logo.animate(keyframes.i, mainTiming);
          letterI.animate(stretch, mainTiming);
          fourthBounce.onfinish = function(){
            let fifthBounce = logo.animate(keyframes.n1, mainTiming);
            letterN1.animate(stretch, mainTiming);
            fifthBounce.onfinish = function(){
              let sixthBounce = logo.animate(keyframes.g, timingLong);
              letterG.animate(stretch, mainTiming);
              sixthBounce.onfinish = function(){
                let seventhBounce = logo.animate(keyframes.s, timingShort);
                letterS.animate(squish, timingShort);
                seventhBounce.onfinish = function(){
                  let eighthBounce = logo.animate(keyframes.o2, timingShort);
                  letterO2.animate(squish, timingShort);
                  eighthBounce.onfinish = function(){
                    let ninthBounce = logo.animate(keyframes.o3, timingShort);
                    letterO3.animate(squish, timingShort);
                    ninthBounce.onfinish = function(){
                      logo.animate(keyframes.n2, timingShort);
                      letterN2.animate(squish, timingShort);
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

// LETTER BOUNCE ANIMATIONS

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
          <div id='Name'>
            <h3>JORDAN LYSENKO</h3>
          </div>
          <div id='Roles'>
            <h3><span onMouseEnter={this.highlight} onMouseLeave={this.unHightlight}>Developer</span> - <span onMouseEnter={this.highlight} onMouseLeave={this.unHightlight}>Designer</span> - <span onMouseEnter={this.highlight} onMouseLeave={this.unHightlight}>Illustrator</span></h3>
          </div>
          <div id='Social'>
            <a href={resume} target="_blank" className='Icon'>
              <img src={resumeBlack} alt='GitBlack'
              onMouseEnter={(evt) => this.linkColorSwapYellow(evt, resumeYellow)}
              onMouseLeave={(evt) => this.linkColorSwapBlack(evt, resumeBlack)}/>
            </a>
            <a href='https://github.com/lysenkoj' target="_blank" className='Icon'>
              <img src={gitBlack} alt='GitBlack'
              onMouseEnter={(evt) => this.linkColorSwapYellow(evt, gitYellow)}
              onMouseLeave={(evt) => this.linkColorSwapBlack(evt, gitBlack)}/>
            </a>
            <a href='https://www.linkedin.com/in/jordanlysenko/' target="_blank" className='Icon'>
              <img src={linkedInBlack} alt='GitBlack'
              onMouseEnter={(evt) => this.linkColorSwapYellow(evt, linkedInYellow)}
              onMouseLeave={(evt) => this.linkColorSwapBlack(evt, linkedInBlack)}/>
            </a>
            <a href='mailto:lysenkoj@gmail.com' target="_blank" className='Icon'>
              <img src={emailBlack} alt='GitBlack'
              onMouseEnter={(evt) => this.linkColorSwapYellow(evt, emailYellow)}
              onMouseLeave={(evt) => this.linkColorSwapBlack(evt, emailBlack)}/>
            </a>
          </div>

        </div>
      </div>
    )
  }
}