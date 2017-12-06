import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import Keyboard from '../../components/Keyboard/Keyboard.view';
import Word from '../../components/Word/Word.view';
import Counter from '../../components/Counter/Counter';
import { match, reset, miss } from '../../actions/game';

import css from './App.css';

class App extends Component {

	constructor(props) {
		super(props);
	}

	reset() {
		this.isClickDisabled = false;
		this.message = this.selectMessage();
		this.props.doReset(this.chooseRandomWord());
	}

	componentWillMount() {
		this.reset();		
	}

	processClick(ev) {
		let char = ev.target.innerHTML;
		let current = this.props.currentWord;
		let found = false;
		
		current.map(letter => {if (char == letter.letter) { found = true}});

		if (found) {
			this.props.doMatch(char);
		}
		else {
			this.props.doMiss(char);
		}
	}

	chooseRandomWord() {
        let words = ["HOUSE", "NECESSARY", "GLOVE", "DICTIONARY", "TABLE", "PARTY"];
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

	componentWillUpdate(props) {
		if (this.checkWin(props.currentWord)) {
			this.isClickDisabled = true;
			this.message = this.selectMessage('WON');
		}
		if (props.guessCounter == 0) {
			this.isClickDisabled = true;
			this.message = this.selectMessage('LOST');
		}
	}

	checkWin(word) {
		let isWon = true;
		for (let letter of word) {
			if (letter.isVisible == false) {
				isWon = false;
			}
		}
		return isWon;
	}

	selectMessage(status) {
		let reset = this.reset.bind(this);
		switch (status) {
			case 'WON':
				return <span className="msg won" onClick={reset}>Good Job - click to continue</span>;
			case 'LOST': 
				return <span className="msg lost" onClick={reset}>Out of Guesses - click to continue</span>;
			default:
				return <span></span>;
		}
	}

	render() {
		const { 
			guessCounter, 
			currentWord, 
			keyboard
		} = this.props;

		let clickFunction = this.isClickDisabled ? ()=>{} : this.processClick.bind(this);	
		let reset = this.reset.bind.this;	

		return (
			<div className="app">
				<Counter guesses={guessCounter}/>
				<Word word={currentWord}/>
				<div className="msgContainer">{this.message}</div>
				<Keyboard letters={keyboard} handleClick={clickFunction}/>			
			</div>
		)
	}

}

function mapStateToProps(state) {
	
	const { guessCounter, currentWord, keyboard } = state
	return {
		guessCounter, currentWord, keyboard
	}
}

function mapDispatchToProps(dispatch) {
	return {
		doMatch: (char) => dispatch(match(char)),
		doMiss: (char) => dispatch(miss(char)),
		doReset: (word) => dispatch(reset(word))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);