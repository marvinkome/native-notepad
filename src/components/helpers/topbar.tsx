/**
 * ./src/components/helpers/topbar
 * Topbar component
 * @props
 * children: string
 */

import {
    Body,
    Container,
    Header,
    StyleProvider,
    Title
} from 'native-base';
import * as React from 'react';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

interface Props {
    children: string;
}

/**
 * Topbar component, taked a string as child
 *
 * *props - children: string
 */

export default class Topbar extends React.Component<Props, {}> {
    public render() {
        return (
            <StyleProvider style={getTheme()}>
                <Header>
                    <Body>
                        <Title>{this.props.children}</Title>
                    </Body>
                </Header>
            </StyleProvider>
        );
    }
}
