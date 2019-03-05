import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { playSound } from '../actions/index'

import { ButtonBase, GridList, GridListTile} from '@material-ui/core'

const styles = theme => ({
  root: {
    paddingTop: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    height: 75,
    width: 75,
    '&:hover': {
      zIndex: 1,
    },
    borderRadius: '10px'
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    borderRadius: '10px',
  },
  gridList: {
    width: 316,
    height: 316,
  },
});

export const ButtonList = (props) => {
  const { classes, gameKey } = props;
  let flatKey = gameKey.flat()
  return (
    <div className={classes.root}>
      <GridList cellHeight={75} className={classes.gridList} cols={4} >
        {props.sounds.map((sound, i) => (
          <GridListTile key={sound.src} cols={1}>
            <ButtonBase
              focusRipple
              key={sound.src+i}
              className={classes.image}
              onClick={() => props.playSound(props.sounds, sound)}
              disabled={flatKey[i] === 1 || props.winner ? true : false}
            >
              <span
                className={classes.imageSrc}
                style={flatKey[i] === 1 ? {backgroundImage: `url(${props.correctButtonImage})`} : flatKey[i] === 2 ? {backgroundImage: `url(${props.winningButtonImage})`} : {backgroundImage: `url(${props.baseButtonImage})`}}
              />
            </ButtonBase>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const mapStateToProps = state => ({
  sounds: state.sounds,
  baseButtonImage: state.baseButtonImage,
  correctButtonImage: state.correctButtonImage,
  winningButtonImage: state.winningButtonImage,
  gameKey: state.gameKey,
  winner: state.winner
})

const mapDispatchToProps = dispatch => ({
  playSound: (sounds, sound) => dispatch(playSound(sounds, sound)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ButtonList))