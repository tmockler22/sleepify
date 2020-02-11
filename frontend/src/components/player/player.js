import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            url: "static/shingo.mp3",
            time: 0,
            duration: 0,
            mute: false
        }
        this.audio = new Audio(this.state.url);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.parseTime = this.parseTime.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
        this.volumeBtn = this.volumeBtn.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.volume !== this.props.volume) {
            this.audio.volume = this.props.volume;
        }
    }

    play(e) {
        e.preventDefault();
        this.setState({ play: true })
        this.audio.volume = this.props.volume;
        this.audio.play();
        setInterval(() => {
            this.setState({ 
                time: this.audio.currentTime, 
                duration: this.audio.duration 
            })
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

    updateVolume(e) {
        this.props.changeVolume(e.target.value / 100)
        
        // this.audio.volume = this.props.volume;
    }

    toggleMute(e) {
        this.setState({ mute: !this.state.mute }, () => {
            if (this.props.volume > 0) this.prevVolume = this.props.volume;
            if (this.state.mute) {
                this.props.changeVolume(0);
                this.audio.volume = 0;
            } else {
                this.props.changeVolume(this.prevVolume);
                this.audio.volume = this.prevVolume;
            }
        })
    }

    parseTime(time) {
        // if (!this.state.duration) return null;
        let min = Math.floor(time / 60);
        let seconds = Math.floor(time - (min*60));
        if (seconds < 10) seconds = `0${seconds}`;
        return `${min}:${seconds}`;
    }

    volumeBtn() {
        let button;
        const volume = this.props.volume;
        if (volume >= 0.5) {
            button = <i className="fas fa-volume-up"></i>;
        } else if (volume < 0.5 && volume > 0) {
            button = <i className="fas fa-volume-down"></i>;
        } else {
            button = <i className="fas fa-volume-mute"></i>;
        }

        return (
            <div onClick={this.toggleMute} className="p-volume-btn">
                { button }
            </div>
        )

    }

    render() {
        const playBtn = (
            <button 
                className="p-button-circle" 
                onClick={this.play}>
                <i className="fas fa-play"></i>
            </button>
        )
        const pauseBtn = (
            <button 
                className="p-button-circle"
                onClick={this.pause}>
                <i className="fas fa-pause"></i>
            </button>
        )
        
        const shuffle = (
            <button 
                className="p-button-shuffle pbtn">
                <i className="fas fa-random"></i>
            </button>
        )

        const repeat = (
            <button
                className="p-button-repeat pbtn">
                <i className="fas fa-redo"></i>
            </button>
        )

        const prevTrackBtn = (
            <button
                className="p-button-prev pbtn">
                <i className="fas fa-step-backward"></i>
            </button>
        )

        const nextTrackBtn = (
            <button
                className="p-button-fwd pbtn">
                <i className="fas fa-step-forward"></i>
            </button>
        )
        
        const { play, time, duration } = this.state;

        return (
            <div className="p-container">
                <div className="p-now-playing">

                </div>

                <div className="p-audio-control">
                    <div className='p-buttons-container'>
                        { shuffle }
                        { prevTrackBtn }
                        { !play && playBtn }
                        { play && pauseBtn }
                        { nextTrackBtn }
                        { repeat }
                    </div>

                    <div className="p-timeline-container">
                        <span className="p-current-time">
                            { this.parseTime(time) }
                        </span>
                    <input 
                        className="p-timeline"
                        type="range" 
                        onChange={this.updateTime} 
                        value={time} 
                        max={duration}>
                    </input>
                    
                        <span className="p-duration">
                            { this.parseTime(duration) }
                        </span>
                    </div>
                </div>

                <div className="p-volume-container">
                    {this.volumeBtn()}
                    <input 
                    className="p-volume"
                    type="range" 
                    onChange={this.updateVolume} 
                    value={this.props.volume * 100}
                    max="100">
        
                    </input>
                </div>

            </div>

                

        )
    }
}

export default Player;
