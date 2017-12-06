import rootReducer from '../reducers';
import { createStore } from 'redux';

const theABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const initialState = {
    keyboard: theABC.map((char, i) => ({letter: char, isVisible: true, key: i})),
    currentWord: [],
    guessCounter: 5
}

export default createStore(rootReducer, initialState);