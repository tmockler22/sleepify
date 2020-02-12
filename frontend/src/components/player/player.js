import React from "react";

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            play: false,
            url: "static/shingo.mp3",
            time: 0,
            duration: 0,
            mute: false,
            repeat: false,
        }
  
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.parseTime = this.parseTime.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
        this.volumeBtn = this.volumeBtn.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.toggleRepeat = this.toggleRepeat.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs()
        .then(() => this.audio = new Audio(this.props.songs[0].songUrl))
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

    return (
      <div onClick={this.toggleMute} className="p-volume-btn">
        {button}
      </div>
    );
  }

  render() {
    const playBtn = (
      <button className="p-button-circle" onClick={this.play}>
        <i className="fas fa-play"></i>
      </button>
    );
    const pauseBtn = (
      <button className="p-button-circle" onClick={this.pause}>
        <i className="fas fa-pause"></i>
      </button>
    );

    const shuffle = (
      <button className="p-button-shuffle pbtn">
        <i className="fas fa-random"></i>
      </button>
    );

    const active = this.state.repeat ? "-active" : null;
    const repeat = (
      <button
        className={`p-button-repeat${active} pbtn`}
        onClick={this.toggleRepeat}
      >
        <i className="fas fa-redo"></i>
      </button>
    );

    const prevTrackBtn = (
      <button className="p-button-prev pbtn">
        <i className="fas fa-step-backward"></i>
      </button>
    );

    const nextTrackBtn = (
      <button className="p-button-fwd pbtn">
        <i className="fas fa-step-forward"></i>
      </button>
    );

    const { play, time, duration } = this.state;

    return (
      <div className="p-container">
        <div className="p-now-playing"></div>

        <div className="p-audio-control">
          <div className="p-buttons-container">
            {shuffle}
            {prevTrackBtn}
            {!play && playBtn}
            {play && pauseBtn}
            {nextTrackBtn}
            {repeat}
          </div>

          <div className="p-timeline-container">
            <span className="p-current-time">{this.parseTime(time)}</span>
            <input
              className="p-timeline"
              type="range"
              onChange={this.updateTime}
              value={time}
              max={duration}
            ></input>

            <span className="p-duration">{this.parseTime(duration)}</span>
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
              backgroundImage:
                "-webkit-gradient(linear, left top, right top, " +
                "color-stop(" +
                this.props.volume +
                ", #13db1d), " +
                "color-stop(" +
                this.props.volume +
                ", #666666)" +
                ")"
            }}
          ></input>
        </div>
      </div>
    );
  }
}

export default Player;
