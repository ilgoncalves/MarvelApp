import { PULL_CHARS, UPDATE_CHARS } from './actionTypes';

export const pullChars = (characters) => ({
    type: PULL_CHARS,
    characters: characters
})

export const updateChars = (characters) => ({
    type: UPDATE_CHARS,
    characters
})