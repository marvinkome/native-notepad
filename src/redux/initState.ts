/**
 * ./src/redux/initState
 */

import { AsyncStorage } from 'react-native';
import { NoteTypes } from '../types';

const initState: { notes: NoteTypes[] } = {
    notes: []
};

export default initState;
