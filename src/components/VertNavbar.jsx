import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Sass/VertNavbar.sass';




export default class VertNavbar extends Component {

  render(){
    return(
      <div id="VertNavContainer">
      {/* CLosed Nav is SMALL BOUNCING LOGO ON LOOP WITH VERT LINE BELOW AND ABOVE */}
        <div id='NavContent'>
          <Link to='/' id='NavLogo'>
            <div id='LogoBorder'>
              <div id='LogoEyesContainer'>
                <div className='LogoEye'/>
                <div className='LogoEye'/>
              </div>
            </div>
          </Link>
          <div id='NavLinksContainer'>
            <Link to='/Develop' className='NavLink'>
              <h4>DEVELOPMENT</h4>
            </Link>
            <Link to='/Design' className='NavLink'>
              <h4>DESIGN</h4>
            </Link>
            <Link to='/About' className='NavLink'>
              <h4>ABOUT</h4>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}