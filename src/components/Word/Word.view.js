import React, {Component} from 'react';

export default function Word(props) {
    let current = props.word.map((letter) => 
                                <div className="square" key={letter.key}>{letter.isVisible ? letter.letter : ""}</div>)
    return (
        <div className="word">
            {current}
        </div>
    )
}