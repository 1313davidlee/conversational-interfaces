import React, { Component } from 'react';
import Button from './Button.js';
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
                        Let our deep learning model read it, and thousands of other articles, to answer your questions 
                    </div>
                </div>
            </div>

            <div className='footerBar'>
                <div id='inputBar'>
                    <input type='text' id='urlForm'></input>
                    <Button  onClick={() => this.clickGo()} buttonText = {"ANALYZE TEXT"}></Button>
                </div>
                
                
            
            </div>
        </div>
        
      );
    }

  }
  
  export default LandingPage;
  