const RESET = 'RESET';
const MATCH = 'MATCH';
const MISS = 'MISS';

export const reset = (newWord)=> ({ type: RESET, word: newWord });
export const match = (char)=> ({ type: MATCH, letter: char});
export const miss = (char)=> ({ type: MISS, letter: char});
