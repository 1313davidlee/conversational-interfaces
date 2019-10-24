import React, { Component } from 'react';
import Button from './Button.js';
import './InteractionsPage.css';
import SummaryPanel from './SummaryPanel.js'

class InteractionsPage extends Component {

    render() {
      return (
        <div class='IPbackground'>
            <div class='IPheaderBar'>
                
                <div class='IPheaderBarContent'>
                    <div class='IPheaderBarTitle'>
                        Biden Calls for Trump Impeachment for First Time
                    </div>
                    <div class='IPheaderBarSubtitle'>
                        The New York Times (October 9, 2019)
                    </div>
                </div>
            </div>
            <div className='IPcontentBar'>
                <SummaryPanel></SummaryPanel>

            </div>
            <div class='IPfooterBar'>
                <input type='text' id='IPurlForm'></input>
            </div>
        </div>
        
      );
    }
  }
  
  export default InteractionsPage;
  