
const chordsLoaded = (newChords) => {
    return {
        type: "CHORDS_LOADED",
        payload: newChords
    }
}

export {
    chordsLoaded
}