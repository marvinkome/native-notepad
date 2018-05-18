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
        fontSize: 17,
        fontWeight: '100',
        color: 'hsl(0, 0%, 23%)'
    },
    headerView: {
        flexDirection: 'row',
        marginRight: 15
    },
    headerText: {
        fontSize: 15,
        color: '#ff9800',
        marginLeft: 15,
        fontFamily: 'JosefinSans'
    },
    noteTitle: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 20,
        paddingBottom: 5,
        fontWeight: '900',
        fontFamily: 'JosefinSans'
    }
});
