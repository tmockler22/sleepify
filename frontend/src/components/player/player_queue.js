import React from 'react';

class PlayerQueue  extends React.Component {
    constructor(props) {
        super(props);
        this.comingUp = this.comingUp.bind(this);
    }

    comingUp() {
        let nextUp;
        if (this.props.nextTrack) {
           nextUp = this.props.tracks.slice(1).map(track => (
                <div className="pq-next-container">
                     <i className="fas fa-bed"></i>
                     <div className="pq-details">
                         <span className="pq-title">
                             {track.title}
                         </span>
                         <span className="pq-artist">
                             {track.artist.name}
                         </span>
                    </div>
                 </div>
            ))
        }
       return nextUp;
    }

    render() {
        const { currentTrack } = this.props;
        if (!currentTrack) return null;
        
        return (
            <div className="open-player-body">
                <div className="pq-container">
                    <h1>Play Queue</h1>
                    <h2>Now Playing</h2>
                    <div className="pq-track-container">
                        <i className="fas fa-bed"></i>
                        <div className="pq-details">
                            <span className="pq-title">
                                {this.props.currentTrack.title}
                            </span>
                            <span className="pq-artist">
                                {this.props.currentTrack.artist.name}
                            </span>
                        </div>
                    </div>
                    <h2>Next Up</h2>
                    {this.comingUp()}
                </div>
            </div>
        )
    }
}

export default PlayerQueue;