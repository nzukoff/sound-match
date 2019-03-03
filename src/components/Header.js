import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { addVideo, getVideoList } from '../../actions/index'

import { AppBar, Toolbar, Typography } from '@material-ui/core'
// import Add from '@material-ui/icons/Add'
// import Sort from '@material-ui/icons/Sort'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
        marginBottom: theme.spacing.unit * 4,
        boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.2)'
    },
    grow: {
        flexGrow: 1,
    },
})

export class Header extends Component {
  // constructor(props) {
  //   super(props)

    // this.state = { anchorEl: null}
  // }

  // handleClose = () => {
  //   this.setState({ anchorEl: null }) 
  // }

  // handleClick = event => {
  //   this.setState({ anchorEl: event.currentTarget })
  // }

  render() {
    const { classes } = this.props
    // const { anchorEl } = this.state
    
    return (
      <div className="Header">
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h5" className={classes.grow}>
              {this.props.title}
            </Typography>
            {/* <IconButton onClick={(e) => this.handleClick(e)} id="SortButton">
              <Sort />
            </IconButton>
            <Menu
              id='SortMenu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => this.handleClose()}
            >
              <MenuItem id={'SortVoted'} onClick={() => {this.handleClose();this.props.getVideoList("voted")}}>Most Voted</MenuItem>
              <MenuItem id={'SortRecent'} onClick={() => {this.handleClose();this.props.getVideoList("recent")}}>Most Recent</MenuItem>
            </Menu>
            <IconButton onClick={() => this.props.addVideo()} id="AddButton">
              <Add />
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  }

  // const mapDispatchToProps = dispatch => ({
  //   addVideo: () => dispatch(addVideo()),
  //   getVideoList: (sortBy) => dispatch(getVideoList(sortBy))
  // })

  const mapStateToProps = state => ({
    title: state.title
  })

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Header))