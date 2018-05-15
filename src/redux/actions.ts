/**
 * ./src/redux/actions
 */

import constants from './constants';

export const addNote = (note) => ({
    type: constants.ADD_NOTE,
    payload: note
});

export const editNote = (note, id) => ({
    type: constants.EDIT_NOTE,
    payload: note,
    id: id
});
