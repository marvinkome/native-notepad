/**
 * ./src/components/new_note/index.tsx
 */

import {
    Content,
    Form,
    Input,
    Item,
    Label,
    Picker,
    StyleProvider,
    Text,
    Textarea
} from 'native-base';
import * as React from 'react';
import { View } from 'react-native';
import getTheme from '../../../native-base-theme/components';
import Topbar from '../helpers/topbar';
import { NoteFormTheme, styles } from './styles';

/**
 * New note form component
 */
export default class NoteForm extends React.Component {
    render() {
        const categories: string[] = ['Personal', 'School', 'Work'];

        return (
            <StyleProvider style={getTheme(NoteFormTheme)}>
                <Content style={styles.content}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Note Title</Label>
                            <Input />
                        </Item>
                        <Textarea
                            style={styles.textArea}
                            rowSpan={5}
                            placeholder="Note content"
                        />
                        <View style={styles.pickerCont}>
                            <Text style={styles.pickerText}>
                                Category:
                            </Text>
                            <Picker
                                iosHeader="Select Category"
                                mode="dropdown"
                            >
                                {categories.map((item, index) => (
                                    <Picker.Item
                                        label={item}
                                        value={index}
                                        key={index}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </Form>
                </Content>
            </StyleProvider>
        );
    }
}
