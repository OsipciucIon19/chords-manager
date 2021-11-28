const initialState = {
    chordsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHORDS_LOADED":
            return {
                chordsList: action.payload
            }
        default:
            return state;
    }
}

export default reducer;