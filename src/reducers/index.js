const initialState = {
  gameKey: new Array(4).fill(new Array(4).fill(0)),
  winner: false
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
        correctButtonImage: action.correctButtonImage,
        winningButtonImage: action.winningButtonImage,
        chosenSound: null,
        randomSound: null,
        gameKey: new Array(4).fill(new Array(4).fill(0)),
        winner: false,
        gameData: action.gameData
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
        gameKey: action.gameKey,
        sounds: action.sounds
      })
    
    case 'WINNER':
      return({
        ...state,
        gameKey: action.gameKey,
        winner: action.winner
      })

    default:
      return (state)
  }
}

export default rootReducer
