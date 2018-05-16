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
import { EditFormProps, FormState } from '../../types';
import { NoteFormTheme, styles } from './styles';

/**
 * Edit note form component
 */
export default class NoteForm extends React.Component<
    EditFormProps,
    FormState
> {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.note.title,
            body: this.props.note.body,
            category: this.props.note.category
        };
    }
    onChange = (state: FormState) => {
        this.props.onChange(state);
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
                                value={this.state.title}
                                onChangeText={(text) =>
                                    this.setState(
                                        {
                                            title: text
                                        },
                                        () =>
                                            this.onChange(this.state)
                                    )
                                }
                            />
                        </Item>
                        <Textarea
                            style={styles.textArea}
                            rowSpan={3}
                            placeholder="Note content"
                            value={this.state.body}
                            onChangeText={(text) =>
                                this.setState(
                                    {
                                        body: text
                                    },
                                    () => this.onChange(this.state)
                                )
                            }
                        />
                        <View style={styles.pickerCont}>
                            <Text style={styles.pickerText}>
                                Category:
                            </Text>
                            <Picker
                                iosHeader="Select Category"
                                mode="dropdown"
                                selectedValue={this.state.category}
                                onValueChange={(item, index) =>
                                    this.setState(
                                        {
                                            category: index
                                        },
                                        () =>
                                            this.onChange(this.state)
                                    )
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
