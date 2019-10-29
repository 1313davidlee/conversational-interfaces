import React, { Component } from 'react';
import Button from './Button.js';
import './InformationDashboard.css';
import QAPanel from './QAPanel.js';

class InformationDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.userQuestions
        };
      }


   
    



    render() {
      return (
        <div className="infoDashBG">
            <div className='infoDashTitle'>Information Dashboard</div>
            <div className='IDinfoDump'>
                {this.props.userQuestions.map(Element => <QAPanel question={Element.question} answer={Element.answer} source={Element.source}></QAPanel>)}
            </div>
            
        </div>

        
      );
    }
  }
  
  export default InformationDashboard;