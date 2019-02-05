const INITIAL_STATE = {
    characters: [],
    fullChars: [],
    searchText: ''
}
const charactersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'pull_chars':
            console.log("pulled");
            return {...state,
                characters: action.characters,
                fullChars: [...action.characters]
            }
        case 'update_chars':
            console.log('update');
            return {
                ...state,
                characters: action.characters,
            }
        default:
            console.log("entrou aqui");
            return state;
    }
}

export default charactersReducer;