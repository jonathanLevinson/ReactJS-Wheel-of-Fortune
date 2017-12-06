import React, {Component} from 'react';

export default function Keyboard(props) { 
        let output = props.letters.map((letter) => 
            <div className="letter square" key={letter.key}
            onClick={letter.isVisible ? (ev)=> props.handleClick(ev) : ()=>{}}>
            {letter.isVisible ? letter.letter : ""}</div>
        )
        return (
            <div className="letters">
                {output}
            </div>
        )    
}