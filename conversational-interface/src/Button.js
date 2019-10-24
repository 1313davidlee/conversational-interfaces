import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: this.props.buttonText,
            buttonText2: this.props.buttonText2
          
        };
      }

    render() {
      return (
        <div className='buttonBackground'>
            <div className='text'>
                {this.state.buttonText}
            </div>
            
            
        </div>
        
      );
    }

  }
  
  export default Button;
  