/**
 * ./src/redux/reducers
 */

import { AsyncStorage } from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import { combineReducers } from 'redux';

import Home from '../components/home';
import Navigator from '../routeConfig';
import constants from './constants';
import initialState from './initState';

// Types
export interface INote {
    id: number;
    title: string;
    body: string;
}

// Utility functions
function saveToStorage(key: string, store: any) {
    const jsonStore = JSON.stringify(store);
    AsyncStorage.setItem(key, jsonStore);
}

const removeItem = (
    array: any[],
    itemId: number,
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

const updateObject = (oldObj: object, newValues: object) => {
    return {
        ...oldObj,
        ...newValues
    };
};

const updateItemArray = (
    array: any[],
    itemId: number,
    callback: (item) => any,
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

// Case reducers
const addNote = (store: { notes: INote[] }, note: INote) => {
    const newStore = updateObject(store, {
        notes: [...store.notes, note]
    });

    saveToStorage('notepad_app', newStore);
    return newStore;
};

const editNote = (
    store: { notes: INote[] },
    note: INote,
    noteId: number
) => {
    const newNote = updateItemArray(store.notes, noteId, (item) => {
        return updateObject(item, {
            ...note
        });
    });

    const newStore = updateObject(store, {
        notes: newNote
    });

    saveToStorage('notepad_app', newStore);
    return newStore;
};

export const rootReducer = (
    state = initialState,
    action: { type: string; payload: any; id?: number }
) => {
    switch (action.type) {
        case constants.ADD_NOTE:
            return addNote;
        case constants.EDIT_NOTE:
            return editNote;
        default:
            return state;
    }
};

export default combineReducers({
    main: rootReducer,
    nav: navReducer
});
