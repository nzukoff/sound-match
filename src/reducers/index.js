const initialState = {
  guessed: false,
  randomSoundPlayed: false,
  winningKey: new Array(16).fill(0)
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETUP_GAME':
      return({
        ...state,
        title: action.title,
        sounds: action.sounds,
        playButtonImage: action.playButtonImage,
        baseButtonImage: action.baseButtonImage,
        correctButtonImage: action.correctButtonImage
      })

    case 'RANDOM_SOUND_PLAYED':
      return({
        ...state,
        randomSound: action.randomSound,
        chosenSound: null
      })
    
    case 'CHOSEN_SOUND_PLAYED':
      return({
        ...state, 
        chosenSound: action.sound,
      })

    case 'MATCH':
      return({
        ...state,
        winningKey: action.winningKey,
        sounds: action.sounds
      })

    default:
      return (state)
  }
}

export default rootReducer
