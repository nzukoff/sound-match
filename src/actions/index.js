export const setupGame = (title, arr, size, playButtonImage, baseButtonImage, correctButtonImage) => {
  const shuffled = arr.sort(() => 0.5 - Math.random())
  const sounds = shuffled.slice(0, size).map((soundUrl) => {
    return new Audio(soundUrl) 
  })
  return ({
    type: 'SETUP_GAME',
    title,
    sounds,
    playButtonImage,
    baseButtonImage,
    correctButtonImage
  })
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
    let { randomSound, chosenSound, winningKey } = getState()
    const filteredSounds = sounds.filter((s, i) => !winningKey[i])
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
    let { chosenSound, randomSound, winningKey } = getState()
    if (randomSound) {
      if (!chosenSound) {
        pauseAndPlay(sounds, sound)
        if (sound.src === randomSound.src) {
          winningKey = winningKey.map((key, i) => i === sounds.indexOf(sound) ? 1 : key)
          dispatch ({
            type: 'MATCH',
            winningKey,
            sounds
          })
        }
      }
    }
    dispatch ({
      type: 'CHOSEN_SOUND_PLAYED',
      sound
    })
  }
}