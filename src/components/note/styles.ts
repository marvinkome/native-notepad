/**
 * ./src/components/note/styles
 * Styles for Note component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';

export const BodyTheme: object = {
    ...material
};

export const styles: {
    content: object;
    text: object;
    headerView: object;
    headerText: object;
} = StyleSheet.create({
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
