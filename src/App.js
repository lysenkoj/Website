import React, {Component} from 'react';
// import Home from './components/Home';
// import Develop from './components/Develop';
// import Design from './components/Design';
// import About from './components/About';
import './App.sass';
import './Sass/Home.sass';

// import VertNavbar from "./components/VertNavbar";
// import HorzNavbar from './components/HorzNavbar';
// import TCHDesign from './components/TCHDesign';
import Splash from './components/Splash';


// import {Switch, Route} from 'react-router';

class App extends Component {
  constructor(){
    super()

    let root = document.querySelector('div#root');
    // let loader = document.querySelector('div#Loader-Page');

    root.style.display = 'inline';
    // loader.style.display = 'none';
  }


    render() {
        return (
            <div className="App">
              <Splash />
              {/* <VertNavbar />
              <HorzNavbar />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Develop" component={Develop} />
                  <Route path="/Design" component={Design} />
                  <Route path="/About" component={About} />
                  <Route path="/TCHSplash" component={Develop} />
                  <Route path="/LunarAdventure" component={Develop} />
                  <Route path="/WAAPIDemo" component={Develop} />
                  <Route path="/TCHDesign" component={TCHDesign} />
                  <Route path="/indigoPunch" component={Design} />
                  <Route path="/OtherWorlds" component={Design} />
                  <Route path="/LuckyPop" component={Design} />
              </Switch> */}
            </div>
        );
    }
}

export default App;
