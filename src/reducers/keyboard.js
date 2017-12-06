export default function keyboard(state = [], action) {
    switch (action.type) {
        case 'RESET':
            return state.map(item => ({letter: item.letter, key: item.key, isVisible: true}));
        case 'MATCH':
        case 'MISS':
            return state.map(item => {
                                        if (item.letter == action.letter) {
                                            item.isVisible = false
                                        }
                                        return item;
            });        
        default:
            return state;        
    }
}