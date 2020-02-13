import React from 'react';
import PlayerInfoContainer from './player_info_container';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            time: 0,
            duration: 0,
            mute: false,
            repeat: false,
        }
        this.audio = React.createRef();
        this.play = this.play.bind(this);
        this.handleonPlay = this.handleonPlay.bind(this);
        this.pause = this.pause.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.parseTime = this.parseTime.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
        this.volumeBtn = this.volumeBtn.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.toggleRepeat = this.toggleRepeat.bind(this);
        this.fetchy = this.fetchy.bind(this);
        this.nextTrack = this.nextTrack.bind(this);
        this.prevTrack = this.prevTrack.bind(this);
      
    }

    componentDidUpdate(prevProps) {
        if (prevProps.volume !== this.props.volume) {
            this.audio.volume = this.props.volume;
        }

        if (prevProps.currentTrack !== this.props.currentTrack) {
            clearInterval(this.interval);
        }
    }

    fetchy(e) {
        e.preventDefault();
        this.props.fetchSongs()
            .then(() => {
                this.props.playAllTracks(this.props.songs)
            })
    }

    play(e) {
        e.preventDefault();
        if (!this.props.currentTrack) return null;
        this.handleonPlay();
        this.audio.play();
    }
    
    handleonPlay() {
        this.setState({ play: true })
        this.audio.volume = this.props.volume;
        this.interval = setInterval(() => {
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

    nextTrack(e) {
        e.preventDefault();
        this.props.nextTrack()
    }

    prevTrack(e) {
        e.preventDefault();
        this.props.prevTrack();
    }

    updateTime(e) {
        this.audio.currentTime = e.target.value;
        this.setState({ time: e.target.value })
    }

    updateVolume(e) {
        this.props.changeVolume(e.target.value / 100)
    }

    toggleRepeat(e) {
        this.setState({ repeat: !this.state.repeat }, () => {
            this.audio.loop = this.state.repeat;
        })
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
        if (!time) return "0:00";
        let min = Math.floor(time / 60);
        let seconds = Math.floor(time - (min * 60));
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
                {button}
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

        const active = this.state.repeat ? "-active" : null;
        const repeat = (
            <button
                className={`p-button-repeat${active} pbtn`}
                onClick={this.toggleRepeat}>
                <i className="fas fa-redo"></i>
            </button>
        )

        const prevTrackBtn = (
            <button
                onClick={this.prevTrack}
                className="p-button-prev pbtn">
                <i className="fas fa-step-backward"></i>
            </button>
        )

        const nextTrackBtn = (
            <button
                onClick={this.nextTrack}
                className="p-button-fwd pbtn">
                <i className="fas fa-step-forward"></i>
            </button>
        )

        const { play, time, duration } = this.state;
        const { currentTrack } = this.props;
        return (
            <div className="p-container">
                {/* <div className="p-now-playing">
                    <button onClick={this.fetchy}>Fetch Songs</button>
                </div> */}

                <PlayerInfoContainer />

                <div className="p-audio-control">
                    <div className='p-buttons-container'>
                        <audio src={currentTrack ? currentTrack.songUrl : null}
                            ref={audio => this.audio = audio}
                            onPlay={this.handleonPlay}
                            onEnded={this.nextTrack}
                            autoPlay />
                        {shuffle}
                        {prevTrackBtn}
                        {!play && playBtn}
                        {play && pauseBtn}
                        {nextTrackBtn}
                        {repeat}
                        <button onClick={this.fetchy}>Fetch Songs</button>
                    </div>

                    <div className="p-timeline-container">
                        <span className="p-current-time">
                            {this.parseTime(time)}
                        </span>
                        <input
                            className="p-timeline"
                            type="range"
                            onChange={this.updateTime}
                            value={time}
                            max={duration}>
                        </input>

                        <span className="p-duration">
                            {this.parseTime(duration)}
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
                        max="100"
                        style={{
                            backgroundImage: '-webkit-gradient(linear, left top, right top, '
                                + 'color-stop(' + this.props.volume + ', #13db1d), '
                                + 'color-stop(' + this.props.volume + ', #666666)'
                                + ')'
                        }}>
                    </input>
                </div>

            </div>



        )
    }
}

export default Player;
