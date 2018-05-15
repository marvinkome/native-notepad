/**
 * ./src/components/home/styles
 * Styles for Home component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';

export const ListingTheme: object = {
    ...material,
    listBorderColor: 'transparent',
    listItemMargin: 0
};

export const styles: {
    listItemStyle: object;
    listBodyText: object;
    listDateText: object;
    iconStyles: object;
} = StyleSheet.create({
    listItemStyle: {
        borderLeftWidth: 7,
        borderLeftColor: 'red',
        marginBottom: 1
    },
    listBodyText: {
        fontWeight: '600',
        fontSize: 23
    },
    listDateText: {
        fontSize: 13,
        fontWeight: '200'
    },
    iconStyles: {
        marginRight: 15,
        color: '#fff'
    }
});