export const setupGame = (gameData, size, title) => {
  return (dispatch, getState) => {
    const { sounds: prevSounds } = getState()
    if (prevSounds) {
      prevSounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
      })
    }

    const game = gameData.find(game => game.title === title)
    const {sounds, playButtonImage, baseButtonImage, correctButtonImage, winningButtonImage} = game
    const shuffled = sounds.sort(() => 0.5 - Math.random())
    const sampledSounds = shuffled.slice(0, size).map((soundUrl) => {
      return new Audio(soundUrl) 
    })
    dispatch ({
      type: 'SETUP_GAME',
      title,
      sounds: sampledSounds,
      playButtonImage,
      baseButtonImage,
      correctButtonImage,
      winningButtonImage,
      gameData,
      winner: false
    })
  }
}

const pauseAndPlay = (sounds, sound) => {
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  })  
  sound.play()
}

export const selectRandomSound = (sounds) => {
  return (dispatch, getState) => {
    let { randomSound, chosenSound, gameKey, winner, title, gameData } = getState()
    const flatKey = gameKey.flat()
    const filteredSounds = sounds.filter((s, i) => !flatKey[i])
    if (!randomSound || chosenSound) {
      randomSound = filteredSounds[Math.floor(Math.random() * filteredSounds.length)];
      pauseAndPlay(sounds, randomSound)
    } else {
      pauseAndPlay(sounds, randomSound)
    }
    dispatch ({
      type: 'RANDOM_SOUND_PLAYED',
      randomSound
    })
  }
}

export const playSound = (sounds, sound) => {
  return (dispatch, getState) => {
    let { chosenSound, randomSound, gameKey } = getState()
    if (randomSound) {
      if (!chosenSound) {
        pauseAndPlay(sounds, sound)
        if (sound.src === randomSound.src) {
          const index = sounds.indexOf(sound)
          const x = Math.floor(index / 4)
          const y = index % 4
          const newKey = gameKey.map((row, rowIndex) => {
            if (rowIndex === x) {
              return row.map((v,i) => {
                if (i === y) {
                  return 1
                }
                else return v
              })
            }
            else return row
          })
          dispatch ({
            type: 'MATCH',
            gameKey: newKey,
            sounds
          })
          const {updatedKey, winner} = checkWinner(newKey)
          if (winner) {
            dispatch({
              type: 'WINNER',
              gameKey: updatedKey,
              winner: true
            })
          }
        }
      }
    }
    dispatch ({
      type: 'CHOSEN_SOUND_PLAYED',
      sound
    })
  }
}

const checkWinner = (gameKey) => {
  const columns = gameKey[0].length
  const rows = gameKey.length
  const updatedKey = gameKey.map(r => r.map(v => v))
  let winner = false

   // horizontalCheck 
  for (let j = 0; j<columns-3 ; j++ ){
    for (let i = 0; i<rows; i++){
        if (gameKey[i][j] === 1 && gameKey[i][j+1] === 1 && gameKey[i][j+2] === 1 && gameKey[i][j+3] === 1){
            updatedKey[i][j] = 2
            updatedKey[i][j+1] = 2
            updatedKey[i][j+2] = 2
            updatedKey[i][j+3] = 2
            winner = true
        }           

    }
  }
  // verticalCheck
  for (let i = 0; i<rows-3 ; i++ ){
      for (let j = 0; j<columns; j++){
          if (gameKey[i][j] === 1 && gameKey[i+1][j] === 1 && gameKey[i+2][j] === 1 && gameKey[i+3][j] === 1){
            updatedKey[i][j] = 2
            updatedKey[i+1][j] = 2
            updatedKey[i+2][j] = 2
            updatedKey[i+3][j] = 2
            winner = true
          }           
      }
  }
  // ascendingDiagonalCheck 
  for (let i=3; i<rows; i++){
      for (let j=0; j<columns-3; j++){
          if (gameKey[i][j] === 1 && gameKey[i-1][j+1] === 1 && gameKey[i-2][j+2] === 1 && gameKey[i-3][j+3] === 1) {
            updatedKey[i][j] = 2
            updatedKey[i-1][j+1] = 2
            updatedKey[i-2][j+2] = 2
            updatedKey[i-3][j+3] = 2
            winner = true
          }
        }
  }
  // descendingDiagonalCheck
  for (let i=3; i<rows; i++){
      for (let j=3; j<columns; j++){
          if (gameKey[i][j] === 1 && gameKey[i-1][j-1] === 1 && gameKey[i-2][j-2] === 1 && gameKey[i-3][j-3] === 1) {
            updatedKey[i][j] = 2
            updatedKey[i-1][j-1] = 2 
            updatedKey[i-2][j-2] = 2 
            updatedKey[i-3][j-3] = 2 
            winner = true
          }
      }
  }
  return {updatedKey, winner}


}