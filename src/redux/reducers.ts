/**
 * ./src/redux/reducers
 */

import { AsyncStorage } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import { combineReducers } from 'redux';

import Home from '../components/home';
import Navigator from '../routeConfig';
import { NoteTypes } from '../types';
import constants from './constants';
import initialState, { asyncStore } from './initState';

// Utility functions
async function saveToStorage(
    key: string,
    store: { notes: NoteTypes[] }
) {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(store));
    } catch (err) {
        return;
    }
}

const removeItem = (
    array: NoteTypes[],
    itemId: string,
    key: string = 'id'
) => {
    const newArray = array.slice();
    const item = array.filter(
        (arrayItems) => arrayItems[key] === itemId
    )[0];
    const index: number = array.indexOf(item);
    newArray.splice(index, 1);

    return newArray;
};

const updateItemArray = (
    array: NoteTypes[],
    itemId: string,
    callback: (item: NoteTypes) => NoteTypes,
    key: string = 'id'
) => {
    const updatedItems = array.map((item) => {
        if (item[key] !== itemId) {
            return item;
        }

        const updatedItem = callback(item);
        return updatedItem;
    });

    return updatedItems;
};

// Case reducers
const addNote = (store: { notes: NoteTypes[] }, note: NoteTypes) => {
    const newStore = {
        ...store,
        notes: [...store.notes, note]
    };

    saveToStorage('notepad_app', newStore);
    return newStore;
};

const editNote = (
    oldState: { notes: NoteTypes[] },
    note: NoteTypes,
    noteId: string
) => {
    const newStore = {
        ...oldState,
        notes: updateItemArray(oldState.notes, noteId, (item) => ({
            ...item,
            ...note
        }))
    };

    saveToStorage('notepad_app', newStore);
    return newStore;
};

const deleteNote = (
    oldState: { notes: NoteTypes[] },
    noteId: string
) => {
    const newState = {
        ...oldState,
        notes: removeItem(oldState.notes, noteId)
    };

    saveToStorage('notepad_app', newState);
    return newState;
};

export const rootReducer = (
    state = initialState,
    action: { type: string; payload: any; id: string }
) => {
    switch (action.type) {
        case constants.ADD_NOTE:
            return addNote(state, action.payload);
        case constants.EDIT_NOTE:
            return editNote(state, action.payload, action.id);
        case constants.DELETE_POST:
            return deleteNote(state, action.id);
        default:
            return state;
    }
};

// Navigation
const router = Navigator.router;
const homeAction = Navigator.router.getActionForPathAndParams('Home');
const initNavState = Navigator.router.getStateForAction(homeAction);

const navReducer = (state = initNavState, action) => {
    const nestState = Navigator.router.getStateForAction(
        action,
        state
    );

    return nestState || state;
};

export default combineReducers({
    main: rootReducer,
    nav: navReducer
});
