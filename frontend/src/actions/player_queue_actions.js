export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const REMOVE_ALL_TRACKS = 'REMOVE_ALL_TRACKS';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';

export const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const REMOVE_TRACK = trackId => ({
    type: RECEIVE_TRACK,
    trackId
});

export const REMOVE_ALL_TRACKS = () => ({
    type: REMOVE_ALL_TRACKS
});

export const NEXT_TRACK = () => ({
    type: NEXT_TRACK
});

export const PREV_TRACK = () => ({
    type: PREV_TRACK
});