import React, { Component } from 'react';
import Button from './Button.js';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: null,
          
        };
      }

    

    clickGo(){
        console.log("hi")
    }

    render() {
      return (
        <div className='background'>
            <div className='headerBar'>
                
                <div className='headerBarContent'>
                    <div className='headerBarTitle'>
                        Read something that confused you?
                    </div>
                    <div className='headerBarSubtitle'>
                        Let our model help answer the questions that you have.
                    </div>
                </div>
            </div>

            <div className='footerBar'>
                <div id='inputBar'>
                    <input type='text' id='urlForm'></input>
                    <Link style={{ textDecoration: 'none' }} to={`/ask`}>
                        <Button  onClick={() => this.clickGo()} buttonText = {"ANALYZE TEXT"}></Button>
                    </Link>
                    
                </div>
                
                
            
            </div>
        </div>
        
      );
    }

  }
  
  export default LandingPage;
  