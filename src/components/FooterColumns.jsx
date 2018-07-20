import React, { Component } from 'react';
import FooterColumnSingle from '../components/FooterColumnSingle';
import "../Sass/FooterColumns.sass";


export default class Footer extends Component {
  render(){
    return(
      <div id="Footer-Column-Container">
        { this.props.footerColumn.options.map( (column, index) => {
          return <FooterColumnSingle key={index} footerColumnSingle={column} />
        })}
      </div>
    )
  }
}