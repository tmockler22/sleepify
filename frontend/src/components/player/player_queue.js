import React from 'react';

class PlayerQueue  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.comingUp = this.comingUp.bind(this);
        this.closeTrack = this.closeTrack.bind(this);    }

    comingUp() {
        let nextUp;
        if (this.props.nextTrack) {
           nextUp = this.props.tracks.slice(1).map((track, i) => (
                <div key={i} className="pq-next-container">
                     <i className="fas fa-bed"></i>
                     <div className="pq-details">
                         <span className="pq-title">
                             {track.title}
                         </span>
                         <span className="pq-artist">
                             {track.artist.name}
                         </span>
                       <span className="pq-close" onClick={this.closeTrack(track)}><i className="fas fa-times"></i></span>

                    </div>
                 </div>
            ))
        }
       return nextUp;
    }

    closeTrack(track) {
        return e => {
            this.props.removeTrack(track._id);
        }
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
                        <span className="pq-close" onClick={this.closeTrack(currentTrack)}><i className="fas fa-times"></i></span>
                    </div>
                    <h2>Next Up</h2>
                    {this.comingUp()}
                </div>
            </div>
        )
    }
}

export default PlayerQueue;