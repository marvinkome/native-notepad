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
import { NoteFormProps, NoteFormState } from '../../types';
import { NoteFormTheme, styles } from './styles';

/**
 * New note form component
 */
export default class NoteForm extends React.Component<
    NoteFormProps,
    NoteFormState
> {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            category: 0
        };
    }
    onChange = (state: NoteFormState) => {
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
                            rowSpan={5}
                            placeholder="Note content"
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
                                selectedValue={this.state.category}
                                iosHeader="Select Category"
                                mode="dropdown"
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
