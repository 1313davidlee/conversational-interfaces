import React, { Component } from 'react';
import Button from './Button.js';
import './InformationDashboard.css';
import QAPanel from './QAPanel.js';

class InformationDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userQuestions: [
            {
                "question": "is bernie sanders healthy?",
                "source": "the daily northwestern",
                "answer": "no",
            },
        ],
    };
  }


askQuestions(){
  
    var input_text = document.getElementById('IPurlForm').value
    document.getElementById('IPurlForm').value = ''
    this.state.userQuestions.push(
      {
        "question": input_text,
        "source": "the new york times",
        "answer": "no",
      }

    )
    var updated_questions = []
    updated_questions = this.state.userQuestions

    this.setState({userQuestions: updated_questions})
   /*   this.state.userQuestions.push({
        "question" : input_text,
        "source": "The New York Times",
        "answer": "no",
    })*/
}


returnstuff(){
  return(
    this.state.userQuestions.map(Element => 
      <QAPanel question={Element.question} answer={Element.answer} source={Element.source}></QAPanel>
    )
  )
}
    
    render() {
      return (
        <div className="infoDashBG">
            <div className='infoDashTitle'>Information Dashboard</div>
            <div className='IDinfoDump'>
                {this.returnstuff()}
            </div>
            <div class='IPfooterBar'>
                <input type='text' id='IPurlForm'></input>
                <div onClick={()=> this.askQuestions()} className='enterButton'>Enter</div>
            </div>
            
        </div>

        
      );
    }
  }
  
  export default InformationDashboard;