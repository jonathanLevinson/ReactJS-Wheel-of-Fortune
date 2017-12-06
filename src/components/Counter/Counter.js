import React, {Component} from 'react';

export default function Counter(props) {
    let { guesses } = props;
    return (            
        	<div className="counterContainer">
                <div className="counter">
                    <p>Guesses left</p>
                    <span>{guesses}</span>
                </div>
            </div>
    )
}