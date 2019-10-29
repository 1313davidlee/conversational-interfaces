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
        <div>
            <div className='QAPanel'>
                <div className='IDquestionBar'>

                    {this.state.question}
                </div>
                <div className='IDanswerBar'>
                    <div className='IDanswerQuote'>
                    {this.state.answer}</div>
                </div>
            </div>
            <div className='divider'>
            </div>
            <div className='noAnswer'>
                <div className='IDquestionBar'>
                    What is Elizabeth Warren's favorite color?
                </div>
                <div className='IDanswerBar'>
                    <div className='IDanswerQuote'>
                        Unfortunately, we could not find the answer to your question. You might want to check out the links in Further Reading!
                    </div>
                </div>
            </div>
        </div> 
      );
    }
  }
  
  export default QAPanel;