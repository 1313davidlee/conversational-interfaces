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
        print("hello!")
    }

    render() {
      return (
        <div class='background'>
            <div class='headerBar'>
                
                <div class='headerBarContent'>
                    <div class='headerBarTitle'>
                        Read something that confused you?
                    </div>
                    <div class='headerBarSubtitle'>
                        Let our deep learning model read it, and thousands of other articles, to answer your questions 
                    </div>
                </div>
            </div>

            <div class='footerBar'>
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
  