/**
 * ./src/redux/actions
 */

import { NoteTypes } from './../types';
import constants from './constants';

export const addNote = (note: NoteTypes) => ({
    type: constants.ADD_NOTE,
    payload: note
});

export const editNote = (note: NoteTypes, id: string) => ({
    type: constants.EDIT_NOTE,
    payload: note,
    id
});

export const deleteNote = (id: string) => ({
    type: constants.DELETE_POST,
    id
});
