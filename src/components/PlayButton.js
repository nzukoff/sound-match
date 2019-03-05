import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { selectRandomSound } from '../actions/index'
import { Card, CardMedia, ButtonBase } from '@material-ui/core/';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  imageCard: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  image: {
    height: 'auto',
    width: 'auto',
    maxHeight: 150,
    maxWidth: 335
  },
  button: {
    borderRadius: 10,
  }
})

export const PlayButton = (props) => {
  const { classes } = props
  return (
      <div className={classes.root}>
        {props.playButtonImage ? 
          <ButtonBase
            disableRipple={true}
            onClick={() => props.selectRandomSound(props.sounds)}
            className={classes.button}
          >
            <Card 
              className={classes.imageCard} 
              >
              <CardMedia
                className={classes.image}
                image={props.playButtonImage}
                component='img'
                style={{cursor: 'pointer'}}
              />
            </Card> 
          </ButtonBase>
          : null 
        }
      </div>
  );
}

const mapStateToProps = state => ({
  playButtonImage: state.playButtonImage,
  sounds: state.sounds,
  winner: state.winner
})

const mapDispatchToProps = dispatch => ({
  selectRandomSound: (sounds) => dispatch(selectRandomSound(sounds))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PlayButton))