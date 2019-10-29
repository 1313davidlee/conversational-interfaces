import React, { Component } from 'react';
import Button from './Button.js';
import InformationDashboard from './InformationDashboard.js'
import './InteractionsPage.css';
import SummaryPanel from './SummaryPanel.js'



class InteractionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userQuestions: [
                {
                    "question": "is bernie sanders healthy?",
                    "source": "the daily northwestern",
                    "answer": "no",
                },
            ]
        };
      }


    askQuestions(){
        var input_text = document.getElementById('IPurlForm').value
        document.getElementById('IPurlForm').value = ''
        this.state.userQuestions.push({
            "question" : input_text,
            "source": "The New York Times",
            "answer": "no",
        })
    }

        


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
                <InformationDashboard userQuestions={this.state.userQuestions}></InformationDashboard>
                <SummaryPanel></SummaryPanel>

            </div>
            <div class='IPfooterBar'>
                <input type='text' id='IPurlForm'></input>
                <div onClick={() => this.askQuestions()} className='enterButton'>Enter</div>
            </div>
        </div>
        
      );
    }
  }
  
  export default InteractionsPage;
  