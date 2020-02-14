import React from 'react';
import { Link } from 'react-router-dom';

class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { currentTrack, nextTrack } = this.props
        if (!currentTrack) return <div className="pi-container"></div>;
        let msg;
        
        if (this.props.shuffle) {
            msg = "Currently shuffling... ¯\\_(ツ)_/¯"
        } else if (!nextTrack) {
            msg = null;
        } else {
            msg = `Coming up next: ${nextTrack.title} By ${nextTrack.artist.name}`;
        }
        
        return (
            <div className="pi-container">
                <img className="pi-image" src={currentTrack.imageUrl} />
                <div className="pi-details">
                    <Link>
                        <div className="pi-details-title">
                            { currentTrack.title }
                        </div>
                    </Link>
                    <Link>
                        <div className="pi-details-artist">
                            {currentTrack.artist.name}
                        </div>
                    </Link>
                    {nextTrack ? <div className="pi-details-next">{msg}</div> : null }
                </div>
                <i className="far fa-heart"></i>
            </div>
        )
    }
}

export default PlayerInfo;