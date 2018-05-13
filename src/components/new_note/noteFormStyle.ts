/**
 * ./src/components/new_note/noteForm
 * Styles for NoteForm component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';

export const NoteFormTheme: object = {
    ...material,
    inputFontSize: 15,
    inputPaddingRight: 0,
    inputPaddingLeft: 0
};

export const styles: {
    content: object;
    textArea: object;
    pickerCont: object;
    pickerText: object;
} = StyleSheet.create({
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
        marginTop: 15
    },
    pickerText: {
        paddingLeft: 8,
        fontSize: 15,
        color: '#575757'
    }
});
