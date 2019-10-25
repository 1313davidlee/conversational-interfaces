import React, { Component } from 'react';
import Button from './Button.js';
import './QAPanel.css';

class QAPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            answer: this.props.answer,
            source: this.props.source,
      }
    }
    render() {
      return (
       
            <div className='QAPanel'>
                <div className='IDquestionBar'>
                    {this.state.question}
                </div>
                <div className='IDanswerBar'>
                    <div className='IDanswerQuote'>{this.state.answer}</div>
                    <div className='IDanswerSource'>{this.state.source}</div>
                </div>
            </div>
        
      );
    }
  }
  
  export default QAPanel;