import React, { Component } from 'react';
import './SummaryPanel.css';
import ArticleClip from './ArticleClip.js'


class SummaryPanel extends Component {
    render() {
        return (
            <div className='SPbackground'>
                <div className='SPheaderBar'>
                    <div className="SPheaderBarContent">
                        Summary
                    </div>
                </div>
                <div className='SParticleClip'>
                    <ArticleClip></ArticleClip>
                </div>
                    
                <div className='SPsummary'></div>
            </div>
        )
    };
}

export default SummaryPanel;