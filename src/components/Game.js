import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayButton from './PlayButton'
import ButtonList from './ButtonList'

class Game extends Component {
    render() {        
      return (
          <div className="Game">
              <div className="row">
                  <div className="col">
                  </div>
                  <div className="col-auto">
                      <PlayButton />
                  </div>
                  <div className="col">
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                  </div>
                  <div className="col-auto">
                    {this.props.sounds ? 
                      <ButtonList /> :
                      null
                    }
                  </div>
                  <div className="col">
                  </div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    sounds: state.sounds,
    randomSound: state.randomSound,
    chosenSound: state.chosenSound
})

export default connect(
    mapStateToProps, 
    null
  )(Game)