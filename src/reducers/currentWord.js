export default function currentWord(state = [], action) {
    switch (action.type) {
        case 'RESET':
            let newWord = action.word.split("").map((char, i) => 
                            ({letter: char, isVisible: false, key: i}));            
            return newWord;
        case 'MATCH':
            return state.map(item => {
                                        if (item.letter == action.letter) {
                                            item.isVisible = true
                                        }
                                        return item;
            });
        default:
            return state;            
    }

    function checkLtterInWord(letter, word) {
        //
    }
}