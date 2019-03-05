import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Dialog, DialogTitle } from '@material-ui/core/'
import PlayButton from './PlayButton'
import ButtonList from './ButtonList'
import { setupGame } from '../actions/index'

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around'
  }
})

export const Game = (props) => {
  return (
    <div className="Game">
      <Grid container >
        <Grid item xs>
        </Grid>
        <Grid item xs={10}>
          <PlayButton />
        </Grid>
        <Grid item xs>
            {props.winner ? 
            <Dialog
              open={true}
              onClose={() => props.setupGame(props.gameData, 16, props.title)}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{"YOU WIN!!!"}</DialogTitle>
            </Dialog>
            : null}
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs>
        </Grid>
        <Grid item xs={10}>
          {props.sounds ? 
            <ButtonList /> :
            null
          }
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
    sounds: state.sounds,
    randomSound: state.randomSound,
    chosenSound: state.chosenSound,
    winner: state.winner, 
    gameData: state.gameData, 
    title: state.title
})

const mapDispatchToProps = dispatch => ({
  setupGame: (gameData, size, title) => dispatch(setupGame(gameData, size, title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Game))