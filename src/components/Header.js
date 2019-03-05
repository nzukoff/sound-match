import React from 'react';
import { connect } from 'react-redux'

import { setupGame } from '../actions/index'

import { AppBar, Toolbar, Typography, ButtonBase, Card, CardMedia, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#dfe6e6',
        marginBottom: theme.spacing.unit * 4,
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)',
    },
    grow: {
        flexGrow: 1,
    },
    imageCard: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      paddingLeft: 15
    },
    image: {
      height: 'auto',
      width: 'auto',
      maxHeight: 35,
    }
})

export const Header = (props) => {
  const { classes } = props
  return (
    <div className="Header">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container >
            <Grid item xs>
              <Typography variant="h4" className={classes.grow}>
                {props.title ? props.title.toUpperCase() : null}
              </Typography>
            </Grid>

            <Grid item container xs justify='flex-end'>  
              {props.gameData ? 
                props.gameData.map((game) => {
                  return (
                    <ButtonBase
                      key={game.title}
                      onClick={() => props.setupGame(props.gameData, 16, game.title)}
                    >
                      <Card 
                        className={classes.imageCard}>
                        <CardMedia
                          className={classes.image}
                          image={game.setButton}
                          component='img'
                          style={{cursor: 'pointer'}}
                        />
                      </Card> 
                    </ButtonBase>
                  )
                }) 
                : null
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setupGame: (gameData, size, title) => dispatch(setupGame(gameData, size, title))
})

const mapStateToProps = state => ({
  title: state.title,
  gameData: state.gameData
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header))