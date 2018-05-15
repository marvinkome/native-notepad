/**
 * ./src/components/helpers/listing
 * Listing component
 * @props
 * items: array of strings
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

import { INote } from '../../redux/reducers';
import { ListingTheme, styles } from './styles';

interface Props {
    items: INote[];
    onPress: (pagename: string, param?: object) => void;
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
                        renderRow={(item: INote) => (
                            <ListItem
                                style={styles.listItemStyle}
                                onPress={() =>
                                    this.props.onPress('Note', {
                                        noteName: item.title,
                                        noteBody: item.body,
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
