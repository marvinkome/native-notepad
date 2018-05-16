/**
 * ./src/components/new_note/index.tsx
 */

import { Container, Text } from 'native-base';

import * as React from 'react';
import { ToastAndroid, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addNote } from '../../redux/actions';
import { NewNoteProps, NewNoteState, NoteTypes } from '../../types';
import NoteForm from './note_form';
import { styles } from './styles';

/**
 * NewNote component
 */

export class NewNote extends React.Component<
    NewNoteProps,
    NewNoteState
> {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: 'Add new note',
            headerRight: (
                <View>
                    <TouchableOpacity
                        onPress={params ? params.save : () => false}
                    >
                        <Text style={styles.headerText}>Save</Text>
                    </TouchableOpacity>
                </View>
            )
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: '',
                body: '',
                category: 0
            }
        };
    }

    componentWillMount() {
        this.props.navigation.setParams({ save: this.saveNote });
    }

    saveNote = () => {
        const id = uuid();
        const date = Date.now();

        this.props.addNote({
            title: this.state.data.title,
            body: this.state.data.body,
            category: this.state.data.category,
            id,
            date
        });

        ToastAndroid.show('Note created', ToastAndroid.SHORT);
        this.props.navigation.goBack();
    };

    getData = (state: NoteTypes) => {
        this.setState({ data: state });
    };

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <NoteForm onChange={this.getData} />
            </Container>
        );
    }
}

const mapDispatch = (dispatch) => ({
    addNote: (data: NoteTypes) => dispatch(addNote(data))
});

export default connect(null, mapDispatch)(NewNote);
