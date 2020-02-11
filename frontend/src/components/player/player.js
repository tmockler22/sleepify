import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            url: "static/shingo.mp3",
        }
        this.audio = new Audio(this.state.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play(e) {
        e.preventDefault();
        this.setState({ play: true })
        this.audio.play();
        debugger
    }

    pause(e) {
        e.preventDefault();
        this.setState({ play: false })
        this.audio.pause();
    }

    render() {
        const playBtn = (
            <button 
                className="player-button-circle" 
                onClick={this.play}>
                <i className="fas fa-play"></i>
            </button>
        )
        const pauseBtn = (
            <button 
                className="player-button-circle"
                onClick={this.pause}>
                <i className="fas fa-pause"></i>
            </button>
        )
        
        const { play } = this.state;

        return (
            <div className="player-container">
                <div className="player-audio-control">
                    { !play && playBtn }
                    { play && pauseBtn }
                </div>
            </div>
        )
    }
}

export default Player;
