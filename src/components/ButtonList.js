import React, { Component } from 'react'
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
    position: 'relative',
    height: 100,
    width: 100,
    '&:hover, &$focusVisible': {
      zIndex: 1,
    },
    borderRadius: '10px'
  },
  focusVisible: {},
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    borderRadius: '10px'
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  gridList: {
    width: 416,
    height: 416,
  },
});

class ButtonList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={100} className={classes.gridList} cols={4}>
          {this.props.sounds.map((sound, i) => (
            <GridListTile key={sound.src} cols={1}>
              <ButtonBase
                focusRipple
                key={sound.src+i}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={() => this.props.playSound(this.props.sounds, sound)}
                disabled={this.props.winningKey[i] === 1 ? true : false}
              >
                <span
                  className={classes.imageSrc}
                  style={this.props.winningKey[i] === 1 ? {backgroundImage: `url(${this.props.correctButtonImage})`} : {backgroundImage: `url(${this.props.baseButtonImage})`}}
                />
              </ButtonBase>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sounds: state.sounds,
  baseButtonImage: state.baseButtonImage,
  correctButtonImage: state.correctButtonImage,
  winningKey: state.winningKey
})

const mapDispatchToProps = dispatch => ({
  playSound: (sounds, sound) => dispatch(playSound(sounds, sound)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ButtonList))