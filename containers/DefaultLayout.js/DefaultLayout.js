import React, { Component } from 'react'
import DefaultHeader from '../DefaultHeader.js';

import './../../static/css/style.css'

export default class DefaultLayout extends Component {


    constructor(props){
        super(props);
    }

  render() {
      
    return (
      <div>
          <div className="container-fluid">
           {this.props.children}  
         </div>
         <br/>
         <footer class="footer">
      <div class="container">
        <span class="text-muted"><b>Developed By: </b>Abhilash Kumar Pandey</span>
      </div>
    </footer>
      </div>
    )
  }
}
