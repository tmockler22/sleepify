export const PLAY_TRACK = 'PLAY_TRACK';
export const PLAY_ALL_TRACKS = 'PLAY_ALL_TRACKS';
export const ADD_TRACK = 'ADD_TRACK'
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const REMOVE_ALL_TRACKS = 'REMOVE_ALL_TRACKS';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';

export const playTrack = track => ({
    type: PLAY_TRACK,
    track
});

export const playAllTracks = tracks => ({
    type: PLAY_ALL_TRACKS,
    tracks
});

export const addTrack = track => ({
    type: ADD_TRACK,
    track
})

export const removeTrack = trackId => ({
    type: REMOVE_TRACK,
    trackId
});

export const removeAllTracks = () => ({
    type: REMOVE_ALL_TRACKS
});

export const nextTrack = () => ({
    type: NEXT_TRACK
});

export const prevTrack = () => ({
    type: PREV_TRACK
});