/**
 * ./src/components/helpers/listing
 */

import moment from 'moment';
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
    truncate = (text: string) => {
        return text.length > 20
            ? text.substring(0, 20 - 3) + '...'
            : text;
    };
    render() {
        return (
            <StyleProvider style={getTheme(ListingTheme)}>
                <Content>
                    <List
                        dataArray={this.props.items}
                        renderRow={(item: NoteTypes) => (
                            <ListItem
                                style={
                                    styles(item.category)
                                        .listItemStyle
                                }
                                onPress={() =>
                                    this.props.onPress('Note', {
                                        noteId: item.id
                                    })
                                }
                            >
                                <Body>
                                    <Text
                                        style={styles().listBodyText}
                                    >
                                        {item.title.length <= 0
                                            ? this.truncate(item.body)
                                            : this.truncate(
                                                  item.title
                                              )}
                                    </Text>
                                </Body>
                                <Right>
                                    <Text
                                        style={styles().listDateText}
                                    >
                                        {moment(item.date).format(
                                            'D MMM YYYY'
                                        )}
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
