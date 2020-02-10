# sleepify

## Background and Overview
Spotify clone with a relaxing library of music. Zzzzz...


## Functionality and MVP
- New account creation, login, and guest/demo login
- Playlist CRUD
- Media Player
  - Play, Stop, Pause, Next, Previous
  - Repeat, Shuffle
  - Dynamic volume slider
  - Move to different parts of the song
  - Continuous play while navigating site
- Search
- Following playlists/ Liking songs
- A production README (NB: check out the sample production README)
- Hosting on Heroku

- Bonus:
  - Popular Tracks
  - Recommendations
  - OAuth
  - Friending users
  - Explore Page
  - Radio (shuffle play)

## Technologies and Technical Challenges
- Constructing HTML5 audio player
- Storing audio in AWS S3
- Search feature



## Group Members and Work Breakdown

### Day 1
  - Tristan
    - 
  - Kevin
    - Music Player 
    
  - Don
    -  
  - Sam


Task:
  - user auth
  - db/Schema
    - user:
        - username
        - email
        - date_of_birth
        - password_digest
        - session_token
        * user has many playlist
    - playlist
        - title
        -user_id
        * belongs to user
        * has many songs
    - library
        has many artist
    - artist
        - name
        - image_url
        
        * has many songs
    - songs
        - id
        - title
        - artist_id
        - album_title
        - ID3?

    - seeding
  - user dashboard
