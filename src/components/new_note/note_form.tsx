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
import { ToastAndroid, View } from 'react-native';

import getTheme from '../../../native-base-theme/components';
import { FormState, NoteFormProps } from '../../types';
import { NoteFormTheme, styles } from './styles';

/**
 * New note form component
 */
export default class NoteForm extends React.Component<
    NoteFormProps,
    FormState
> {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            category: 0
        };
    }
    onChange = (id, value) => {
        if (id === 'title' && value.length > 25) {
            ToastAndroid.show(
                'Max length reached',
                ToastAndroid.SHORT
            );
            return;
        }
        this.setState(
            {
                [id]: value
            },
            () => this.props.onChange(this.state)
        );
    };
    onChangeText = (value) => {
        if (value.length > 25) {
            ToastAndroid.show(
                'Max length reached',
                ToastAndroid.SHORT
            );
        } else {
            this.setState(
                {
                    title: value
                },
                () => this.props.onChange(this.state)
            );
        }
    };
    render() {
        const categories: string[] = ['Personal', 'School', 'Work'];
        return (
            <StyleProvider style={getTheme(NoteFormTheme)}>
                <Content style={styles.content}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Note Title</Label>
                            <Input
                                onChangeText={(text) =>
                                    this.onChangeText(text)
                                }
                                value={this.state.title}
                                maxLength={25}
                            />
                        </Item>
                        <Textarea
                            style={styles.textArea}
                            rowSpan={3}
                            placeholder="Note content"
                            value={this.state.body}
                            onChangeText={(text) =>
                                this.onChange('body', text)
                            }
                        />
                        <View style={styles.pickerCont}>
                            <Text style={styles.pickerText}>
                                Category:
                            </Text>
                            <Picker
                                selectedValue={this.state.category}
                                iosHeader="Select Category"
                                mode="dropdown"
                                onValueChange={(item, index) =>
                                    this.onChange('category', index)
                                }
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
