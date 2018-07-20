import React, { Component } from 'react';


export default class FooterColumnSingle extends Component {
  render(){
    return(
      <div id={`Column-${this.props.footerColumnSingle.id}`}className="Footer-Column">
        <p className="Column-Title">{this.props.footerColumnSingle.id}</p>
        {
          this.props.footerColumnSingle.text.map( (text,index) => {
            return <p key={index}>{text.description}</p>
          })
        }
      </div>
    )
  }
}