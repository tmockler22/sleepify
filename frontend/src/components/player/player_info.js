import React from 'react';
import { Link } from 'react-router-dom';

class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { currentTrack, nextTrack } = this.props
        if (!currentTrack) return <div className="pi-container"></div>;
        
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
                    {nextTrack ? <span className="pi-details-next">Coming up next: {nextTrack.title} By {nextTrack.artist.name}</span> : null }
                </div>
                <i className="far fa-heart"></i>
            </div>
        )
    }
}

export default PlayerInfo;