/**
 * ./src/components/new_note/styles
 * Styles for New Note component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';
import { NewNoteStyles } from '../../types';

export const NoteFormTheme: object = {
    ...material,
    inputFontSize: 15,
    inputPaddingRight: 0,
    inputPaddingLeft: 0
};

export const styles: NewNoteStyles = StyleSheet.create({
    content: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10
    },
    textArea: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D5DC',
        marginLeft: 13,
        marginRight: 8,
        marginTop: 15
    },
    pickerCont: {
        marginTop: 15,
        marginLeft: 10
    },
    pickerText: {
        paddingLeft: 8,
        fontSize: 15,
        color: '#575757'
    },
    headerText: {
        color: '#ff9800',
        fontSize: 15,
        marginRight: 15,
        fontFamily: 'JosefinSans'
    }
});
