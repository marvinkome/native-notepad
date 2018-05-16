/**
 * ./src/components/home/styles
 * Styles for Home component
 */

import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';
import { HomeStyles } from '../../types';

export const ListingTheme: object = {
    ...material,
    listBorderColor: 'transparent',
    listItemMargin: 0
};

const borderColors = ['#ff9800', '#00897b', '#8e24aa'];
export const styles = (category?: number) =>
    StyleSheet.create({
        listItemStyle: {
            borderLeftWidth: 7,
            borderLeftColor: borderColors[category || 0],
            marginBottom: 1
        },
        listBodyText: {
            fontWeight: '600',
            fontSize: 23
        },
        listDateText: {
            fontSize: 13,
            fontWeight: '200',
            width: 80
        },
        iconStyles: {
            marginRight: 15,
            color: '#fff'
        },
        textStyles: {
            fontSize: 19,
            textAlign: 'center',
            paddingTop: 50,
            color: 'hsl(0, 0%, 20%)'
        }
    });
