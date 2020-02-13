import * as likeUtil from '../util/like_util'

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const DELETE_LIKE = "DELETE_LIKE"

export const receiveLike = like => ({
    type: RECEIVE_LIKE, 
    like
});

export const deleteLike = like => ({
    type: DELETE_LIKE,
    like
});

