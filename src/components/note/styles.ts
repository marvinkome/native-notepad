/**
 * ./src/components/note/styles
 * Styles for Note component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';
import { NoteStyles } from '../../types';

export const BodyTheme: object = {
    ...material
};

export const styles: NoteStyles = StyleSheet.create({
    content: {
        paddingTop: 20,
        paddingLeft: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '100'
    },
    headerView: {
        flexDirection: 'row',
        marginRight: 15
    },
    headerText: {
        fontSize: 17,
        color: '#fff',
        marginLeft: 15
    }
});
