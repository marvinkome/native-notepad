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
        // {
        //     id: '0',
        //     title: 'Note 1',
        //     body: 'This is a notepad app',
        //     category: 0,
        //     date: 0
        // },
        // {
        //     id: '1',
        //     title: 'Note 2',
        //     body: 'This is the second note',
        //     category: 1,
        //     date: 0
        // }
    ]
};
