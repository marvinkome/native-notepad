/**
 * ./src/redux/initState
 */

import { AsyncStorage } from 'react-native';

async function getFromStorage(key: string) {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
}

const persistedState = getFromStorage('notepad_store');

export default {
    notes: [
        {
            id: 1,
            title: 'Note 1',
            body: 'This is a notepad app'
        },
        {
            id: 1,
            title: 'Note 2',
            body: 'This is the second note'
        }
    ]
};
