import React, { Component } from 'react';
import Signature from '../components/Signature';
import FooterColumns from '../components/FooterColumns';
import '../Sass/Footer.sass';


export default class Footer extends Component {
  render(){
    return(
      <div id="Footer-Container">
        <Signature signatureData={this.props.data.signature}/>
        <FooterColumns footerColumn={this.props.data.footer}/>
        <div id="Copyright">{this.props.data.footer.copyright}</div>
      </div>
    )
  }
}