import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './components/Header'
import Game from './components/Game'
import { setupGame } from './actions/index'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: { fontFamily: "'Questrial', sans-serif", useNextVariants: true }
})

class App extends Component {
  componentDidMount() {
    this.props.setupGame(gameData, 16, 'Vulfpeck')
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Game />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setupGame: (gameData, size, title) => dispatch(setupGame(gameData, size, title))
})

export default connect(
  null,
  mapDispatchToProps
)(App)

const vulfGameData = {
  title: 'Vulfpeck',
  baseButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/vulfpeck/images/vulf.png',
  correctButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/vulfpeck/images/vulf_blue.png',
  playButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/vulfpeck/images/vulfs.png',
  winningButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/vulfpeck/images/vulf_red.png',
  setButton: 'https://s3.us-east-2.amazonaws.com/sound-game/vulfpeck/images/vulf_button.png',
  sounds : [
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

const rmGameData = {
  title: 'Rick and Morty',
  baseButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/images/morty.png',
  correctButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/images/rick.png',
  playButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/images/rm.png',
  winningButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/images/meeseeks.png',
  setButton: 'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/images/portal.png',
  sounds:[ 
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/And_that\'s_the_way_news_goes.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Awww_Bitch.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Come_on_old_man.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Disqualified_version1.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Good_Job!.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Help!.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Hi_I\'m_mr_meeseeks_look_at_me.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/I\'m having a party, biiiiitch!.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/I\'m_ants_in_my_eye_johnson.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/I_like_what_you_got.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/In_bird_culture__this_is_considered.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Keep_Summer_Safe.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Oooo_yeah__caaan_doo!.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Praise_the_one_true_morty.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Riggity.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/Show_Me_What_U_got.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/That\'s_retarded.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/all_aboard.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/anatomy_park.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/annoyed_rick.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/baby_legs.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/backseat_parenting.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/butthole.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/cant_hide.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/dropping_loads.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/e4fd8935c4.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/for_real_times.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/get_schwifty_in_here.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/half_morty.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/hey_ya_you_doing_ok_.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/hit_the_sack_jack.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/i_love_morty.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/inside_ruben.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/intro.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/jealousy.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/let_me_go.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/let_me_out_.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/lick_my_balls.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/life.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/losing_him.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/monster.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/my_bad.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/my_man.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/oh_man.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/ohmygod.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/old_school_jews.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/outro.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/pi.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/rick.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/rick_is_a_dick.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/rubber_baby_baby_bunkers.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/stoked.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/thank_you.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/this_is_how_you_dream_bitch.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/too_tough.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/what_.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/woo_vu_luvub_dub_dub.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/yes_fuck_you_god_not_today_bitch.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/you_can\'t_go_out_there.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/you_dont_know_me.wav',
    'https://s3.us-east-2.amazonaws.com/sound-game/rick_and_morty/sounds/you_know_what_this_human_eats.wav' ]
}

const swGameData = {
  title: 'Star Wars',
  baseButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/images/darth.png',
  correctButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/images/chewy.png',
  playButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/images/logo.png',
  winningButtonImage: 'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/images/yoda.png',
  setButton: 'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/images/death_star.png',
  sounds: [ 
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/Chewie-chatting.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/Dont_get_cocky.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/Dont_upset_a_wookie.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/I_have_you_now.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/Lightsaber_ignites.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/Obi_Wan_force_2.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/Set for stun.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/alerted.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/as_u_wish.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/bad_feeling.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/badfeeling.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/blaster.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/blaster_good.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/carpet.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/chewy_roar.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/crops.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/dark_side2_y.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/destiny.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/destroy_you.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/dont_like.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/dont_underestimate.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/expecting_you.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/fool.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/for_the_last_time.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/force be_with_us.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/force.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/forcestrong.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/forseen.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/goodshot.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/greetings_exalted.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/han_solo.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/help.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/honored.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/insignificant.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/intensify.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/jabba-the-hutt-laughing.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/jawa.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/jedi.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/lack_of_faith.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/laughfuzzball.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/learn.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/learn_the_ways.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/luke_never_turn.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/me.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/nerfherder.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/palpatine_hate.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/piece_o_junk.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/pointless.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/r2d2-scream1.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/r2d2-squeaks1.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/r2d2-squeaks2.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/r2d2-squeaks4.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/r2d2-squeaks5.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/r2d2-whistle1.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/rebelscum.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/release_anger.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/report.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/respect.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/s-foils.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/seconds.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/servant.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/situation.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/stretch_out.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/switch-off.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/swluke01.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/swvader01.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/swvader02.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/swvader03.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/swvader04.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/taught_u_well.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/technological.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/the_force.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/trap.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/vader_impressive.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/what.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/why_are_u_here_x.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/yoda-900Years.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/yoda-helpYou.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/yoda-strongAmI.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/yoda-thereIsNoTry.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/yodalaughing.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/your_father.wav',
  'https://s3.us-east-2.amazonaws.com/sound-game/star_wars/sounds/your_fault.wav' ]
}

const gameData = [vulfGameData, rmGameData, swGameData]