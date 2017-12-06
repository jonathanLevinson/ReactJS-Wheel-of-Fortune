export default function guessCounter(state = 5, action) {
    const NUMBER_OF_GUESSES = 5;
    switch (action.type) {
        case 'RESET':            
            return NUMBER_OF_GUESSES;
        case 'MISS':
            return state - 1;
        default:
            return state;
    }
}