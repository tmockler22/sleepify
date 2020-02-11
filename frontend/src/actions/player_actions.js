export const RECEIVE_VOLUME = 'RECEIVE_VOLUME';
export const RECEIVE_CURRENT_TIME = 'RECEIVE_CURRENT_TIME';


export const receiveVolume = volume => ({
    type: RECEIVE_VOLUME,
    volume
});

const receiveCurrentTime = time => ({
    type: RECEIVE_CURRENT_TIME,
    time
});
