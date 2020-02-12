import React from 'react';
import SongIndexContainer from './songs_container';
import ArtistIndexContainer from './artist_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.update = this.update.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  update(e) {
   e.preventDefault(); 
   this.setState({search: e.currentTarget.value});
   this.getResults(); 
  }

  getResults() {
    return this.state.search ? (
        <div>
          <SongIndexContainer search={this.state.search} />
          <ArtistIndexContainer search={this.state.search} />
        </div>
        ) : <div></div>
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className='search-input'
          placeholder='Search for Artists or Songs'
          value={this.state.search}
          onChange ={(e) => this.update(e)}
          />
        {this.getResults()}   
      </div>
    )
  };
};

export default Search; 