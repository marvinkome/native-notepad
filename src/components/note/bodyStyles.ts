/**
 * ./src/components/note/bodyStyle
 * Styles for NoteBody component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';

export const BodyTheme: object = {
    ...material
};

export const styles = StyleSheet.create({
    content: {
        paddingTop: 20,
        paddingLeft: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '100'
    }
});
