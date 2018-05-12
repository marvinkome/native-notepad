/**
 * ./src/components/note/body
 */

import { Content, StyleProvider, Text } from 'native-base';
import * as React from 'react';
import getTheme from '../../../native-base-theme/components';
import { BodyTheme, styles } from './bodyStyles';

interface Props {
    children: string;
}

/**
 * Renders the body of notes
 *
 * props - children: string
 */
export default class NoteBody extends React.Component<Props, {}> {
    render() {
        return (
            <StyleProvider style={getTheme(BodyTheme)}>
                <Content style={styles.content}>
                    <Text style={styles.text}>
                        {this.props.children}
                    </Text>
                </Content>
            </StyleProvider>
        );
    }
}
