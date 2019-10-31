import React, { Component } from 'react';
import './SummaryPanel.css';


class SummaryPanel extends Component {
    render() {
        return (
            <div className='SPbackground'>
                <div className='SPheader'>
                        Further Reading
                </div>
                    <div className='wrapper'>
                        <img class="image" src="https://cdn.cnn.com/cnnnext/dam/assets/191013173100-biden-10-13-exlarge-169.jpg"></img>
                        <div class="headline">
                            Biden Calls for Trump Impeachment for First Time
                        </div>
                        <div class="description">
                            It was the first time the former vice president expressed support for full impeachment. He had previously backed a congressional inquiry.
                        </div> 
                    </div>   
                    <div className='linkBox'></div>
            </div>
        )
    };
}

export default SummaryPanel;