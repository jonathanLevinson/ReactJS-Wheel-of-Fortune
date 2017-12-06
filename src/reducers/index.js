import { combineReducers } from 'redux';
import currentWord from './currentWord';
import guessCounter from './guessCounter';
import keyboard from './keyboard'

const rootReducer = combineReducers({
  keyboard,
  guessCounter,
  currentWord
  //place other reducers here...
})

export default rootReducer

