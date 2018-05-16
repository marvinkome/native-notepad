/**
 * ./src/components/helpers/listing
 */

import {
    Body,
    CheckBox,
    Content,
    List,
    ListItem,
    Right,
    StyleProvider,
    Text
} from 'native-base';

import * as React from 'react';
import getTheme from '../../../native-base-theme/components';

import { ListingProps, NoteTypes } from '../../types';
import { ListingTheme, styles } from './styles';

/**
 * Listing component. Recieve items props (an array of strings) to render
 */
export default class Listing extends React.Component<
    ListingProps,
    {}
> {
    render() {
        return (
            <StyleProvider style={getTheme(ListingTheme)}>
                <Content>
                    <List
                        dataArray={this.props.items}
                        renderRow={(item: NoteTypes) => (
                            <ListItem
                                style={styles.listItemStyle}
                                onPress={() =>
                                    this.props.onPress('Note', {
                                        noteId: item.id
                                    })
                                }
                            >
                                <Body>
                                    <Text style={styles.listBodyText}>
                                        {item.title.length > 19
                                            ? item.title.substring(
                                                  0,
                                                  19 - 3
                                              ) + '...'
                                            : item.title}
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
