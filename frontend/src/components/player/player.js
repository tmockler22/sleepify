import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            url: "static/shingo.mp3",
            time: 0,
            duration: ""
        }
        this.audio = new Audio(this.state.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }

    play(e) {
        e.preventDefault();
        this.setState({ play: true })
        this.audio.play();
        setInterval(() => {
            this.setState({time: this.audio.currentTime})
        }, 500)
    }

    pause(e) {
        e.preventDefault();
        this.setState({ play: false })
        this.audio.pause();
    }

    updateTime(e) {
        this.audio.currentTime = e.target.value;
        this.setState({time: e.target.value})
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
        
        const shuffle = (
            <button 
                className="player-button-shuffle pbtn">
                <i className="fas fa-random"></i>
            </button>
        )

        const repeat = (
            <button
                className="player-button-repeat pbtn">
                <i className="fas fa-redo"></i>
            </button>
        )

        const prevTrackBtn = (
            <button
                className="player-button-prev pbtn">
                <i className="fas fa-step-backward"></i>
            </button>
        )

        const nextTrackBtn = (
            <button
                className="player-button-fwd pbtn">
                <i className="fas fa-step-forward"></i>
            </button>
        )
        
        const { play } = this.state;

        return (
            <div className="player-container">
                <div className="player-audio-control">
                    <div className='player-buttons-container'>
                        { shuffle }
                        { prevTrackBtn }
                        { !play && playBtn }
                        { play && pauseBtn }
                        { nextTrackBtn }
                        { repeat }
                    </div>

                <input 
                    className="player-range"
                    type="range" 
                    onChange={this.updateTime} 
                    value={this.state.time} 
                    max={100}>
                </input>
                </div>
            </div>
        )
    }
}

export default Player;
