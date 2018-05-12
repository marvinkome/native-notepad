/**
 * ./src/components/helpers/listing
 * Listing component
 * @props
 * items: array of strings
 */

import {
    Body,
    Container,
    Content,
    List,
    ListItem,
    Right,
    StyleProvider,
    Text
} from 'native-base';

import * as React from 'react';
import styled from 'styled-components';
import getTheme from '../../../native-base-theme/components';
import { ListingTheme, styles } from './listingStyle';

interface Props {
    items: string[];
}

/**
 * Listing component. Recieve items props (an array of strings) to render
 *
 * *props - items: string[]
 */
export default class Listing extends React.Component<Props, {}> {
    render() {
        return (
            <StyleProvider style={getTheme(ListingTheme)}>
                <Content>
                    <List
                        dataArray={this.props.items}
                        renderRow={(item: string) => (
                            <ListItem style={styles.listItemStyle}>
                                <Body>
                                    <Text style={styles.listBodyText}>
                                        {item}
                                    </Text>
                                </Body>
                                <Right>
                                    <Text style={styles.listDateText}>
                                        11/12/18
                                    </Text>
                                </Right>
                            </ListItem>
                        )}
                    />
                </Content>
            </StyleProvider>
        );
    }
}
