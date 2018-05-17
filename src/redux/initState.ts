/**
 * ./src/redux/initState
 */

import { AsyncStorage } from 'react-native';
import { NoteTypes } from '../types';

const initState: { notes: NoteTypes[] } = {
    notes: []
};

async function getFromStorage(key: string) {
    try {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value);
    } catch (err) {
        return err;
    }
}

export const asyncStore = getFromStorage('notepad_app').then(
    (item: NoteTypes) => item
);

export default initState;
