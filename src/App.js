import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import { setupGame } from './actions/index'


class App extends Component {
  componentDidMount() {
    this.props.setupGame(vulfGameData.title, vulfGameData.vulfSounds, 16, vulfGameData.playButtonImage, vulfGameData.baseButtonImage, vulfGameData.correctButtonImage)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setupGame: (title, arr, size, playButtonImage, baseButtonImage, correctButtonImage) => dispatch(setupGame(title, arr, size, playButtonImage, baseButtonImage, correctButtonImage))
})

export default connect(
  null,
  mapDispatchToProps
)(App)

const vulfGameData = {
  title: 'Vulfpeck',
  baseButtonImage: 'https://i.imgur.com/jNdmTAD.png',
  correctButtonImage: 'https://i.imgur.com/WyXEW0b.png',
  playButtonImage: 'http://i.imgur.com/NrS2oHK.png',
  vulfSounds : [
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Antwaun1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Antwaun2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Antwaun3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Antwaun4.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Antwaun5.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612FordFocus.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Intro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/1612Star.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/adreinneBass.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/adreinneCall.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/adreinneResponse.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/adreinneRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/backPocketClarinet1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/backPocketClarinet2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/BackPocketFrogs.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/backPocketIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/backPocketOhYea.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/backPocketPutItIn.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/barbaraIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/barbaraTheme1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/barbaraTheme2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/beastlyBass1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/beastlyBass2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/beastlyTheme1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/beastlyTheme2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/beastlyTheme3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/birdwatcherIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/birdwatcherRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/birdwatcherRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/carsTooCall.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/carsTooGuitar.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/carsTooResponse.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cClubBassLick.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cClubBridge.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cClubChorus.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cClubDrumBreak.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cClubYes.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaBridge1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaCILA.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaDrumBreak.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaIntro2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaSingingRound.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaTheoJackson.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/cilaYuletideCheer.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/firstPlaceIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/firstPlaceRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/firstPlaceRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/fugueChorus.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/fugueCounterpoint.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/fugueIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkier2Intro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkier2Theme.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkier3Intro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkier3Riff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkier3Riff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkier3Riff3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkierBass.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkierBreakDown.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkierTheme1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkierTheme2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkyDuckAntwaunIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkyDuckAntwaunRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/FunkyDuckAntwaunRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkyDuckFunkyDuck.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/funkyDuckIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/gameWinnerBabyBabyBaby.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/gameWinnerBelieveInMe.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/gameWinnerGiveMeBall.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/gameWinnerLetItFly.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/kuhmilchRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/kuhmilchRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/meanGirlsIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/meanGirlsRiff.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/meanGirlsTheme.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medAcousticSounds.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medHahaRegion.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medInhale.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medRelease.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medTheseSensations.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medUnexaminedLife.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/medVulfIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/myFirstCarIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/myFirstCarRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/myFirstCarRiff3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/newsBeatRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/newsBeatRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/outroIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/outroRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/outroSax1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/outroSaxIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/promDrum.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/promIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/promTheme.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rango3GuitarRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rango3GuitarRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rango3GuitarRiff3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rango3Intro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rangoDrum.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rangoFill.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/rangoGroove.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/skyMallBass1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/skyMallBass2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/skyMallBass3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/skyMallBass4.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/skyMallIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/smileBubbles.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/smileIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/smileRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/smileRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/smileRiff3.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/smileRiff4.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/speedWalkerRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/speedwalkerRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/tomboyDrum.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/tomboyTheme.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentBass.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentLivingLoud.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentMoney.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentNiceCall.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentOutro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentProducts.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/waitMomentSoNice.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkiesFootsteps.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkiesIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkiesSynthRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkiesWoofWoof.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkRememberBass.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkRememberIntro.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkRememberRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkRememberRiff2.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/walkRememberSax.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/welcomeBassRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/welcomeGuitarRiff1.wav",
    "http://cf-public-view.s3.amazonaws.com/PN447/AZ/Sounds%20Bites/Sounds/welcomeSaxRiff1.wav"
  ]
}