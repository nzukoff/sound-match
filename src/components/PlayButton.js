import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectRandomSound } from '../actions/index'


class PlayButton extends Component {
    createImage = () => {
        document.querySelector("#image").src = this.props.playButtonImage
    }

    render() {
        return (
            <div className="Image">
                {this.props.playButtonImage ? this.createImage() : null}
                <img id="image" src="" alt="" onClick={() => this.props.selectRandomSound(this.props.sounds)}></img>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  playButtonImage: state.playButtonImage,
  sounds: state.sounds
})

const mapDispatchToProps = dispatch => ({
  selectRandomSound: (sounds) => dispatch(selectRandomSound(sounds))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayButton)