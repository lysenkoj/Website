import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import data from '../content.json';
import '../Sass/Root.sass';

// ROOT/HOME IS THE MAIN LOGO SPLIT IN TWO

//import images for sliders
import slide1 from '../images/assets/image5.jpg'
import slide2 from '../images/assets/image6.jpg'
import slide3 from '../images/assets/image4.jpg'
import slide4 from '../images/assets/image3.jpg'
import slide5 from '../images/assets/image2.jpg'
import slide6 from '../images/assets/image1.jpg'

//Components
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import Content from './Content';


export default class Root extends Component {
  constructor() {
    super()
    this.state = {
      data,
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
    //Set the current image to the updated image path after webpack
    const pictureSliderImages = [slide1, slide2, slide3, slide5];
    const articleSliderImages = [slide1, slide4, slide5, slide6];

    this.setState((previousState) => {
      for(let i = 0; i < pictureSliderImages.length; i++) {
        previousState.data.slider1.slides[i].image = pictureSliderImages[i];
        previousState.data.slider2.slides[i].image = articleSliderImages[i];
      }
      return previousState;
    })

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


    }, 3000);
  }

  animateLoader(){
    let redCircle = document.querySelector('div#Circle-Red');
    let purpleCircle = document.querySelector('div#Circle-Purple');
    let blueCircle = document.querySelector('div#Circle-Blue');

// THESE KEYFRAMES CAUSE THE LOADERS EXPAND FROM CENTER
    let keyframesRedPulse = [
      {transform: 'translateY(0) scaleX(1) scaleY(1)'},
      {transform: 'translateY(60px) scaleX(.2) scaleY(.2)'}
    ];

    let keyframesPurplePulse = [
      {transform: 'translateY(0) translateX(0) scaleX(1) scaleY(1)'},
      {transform: 'translateY(-60px) translateX(60px) scaleX(.2) scaleY(.2)'}
    ];

    let keyframesBluePulse = [
      {transform: 'translateY(0) translateX(0) scaleX(1) scaleY(1)'},
      {transform: 'translateY(-60px) translateX(-60px) scaleX(.2) scaleY(.2)'}
    ];

    let timings = {
      easing: 'cubic-bezier(.6, 0.08, 0.8, .6)',
      iterations: Infinity,
      direction: 'alternate',
      fill: 'both',
      duration: 1000
    }

    let animationArray = [
      redCircle.animate(keyframesRedPulse, timings),
      purpleCircle.animate(keyframesPurplePulse, timings),
      blueCircle.animate(keyframesBluePulse, timings)]

      this.setState(previousState => {
        previousState.animations = animationArray;
        return previousState;
      })

      this.rotateLoader();
  }

  rotateLoader(){
    let spin = document.querySelector('div#Loader-Container');

    let keyframes = [
      {transform: 'rotate(0)'},
      {transform: 'rotate(360deg)'}
    ];

    let timings = {
      easing: 'linear',
      iterations: Infinity,
      direction: 'normal',
      fill: 'both',
      duration: 2000
    };

    spin.animate(keyframes, timings);
  }


  render(){
    return(
      <div id="Root-Container">
        <Navbar data={this.state.data}/>
        <main id="Main-Content-Container">
          <Switch>
            <Route exact path="/Main" render={(props) => <Main data={this.state.data} {...props}/>} />
            <Route path="/Main/:Content" render={(props) => <Content data={this.state} {...props}/>}/>
          </Switch>
        </main>
        <Footer data={this.state.data}/>
      </div>
    )
  }
}