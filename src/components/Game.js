import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core/'
import PlayButton from './PlayButton'
import ButtonList from './ButtonList'

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
            <Typography variant="h2" >
              {"YOU WIN!"}
            </Typography> 
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
    winner: state.winner
})

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Game))