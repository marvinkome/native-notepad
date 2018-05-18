/**
 * ./src/components/new_note/index.tsx
 */

import { Container, Text, View } from 'native-base';
import * as React from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { editNote } from '../../redux/actions';
import { EditProps, EditState, NoteTypes } from '../../types';
import NoteForm from './note_form';
import { styles } from './styles';

/**
 *  Edit Note component
 */
export class EditNote extends React.Component<EditProps, EditState> {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: '',
            headerRight: (
                <View>
                    <TouchableOpacity
                        onPress={params ? params.edit : () => false}
                    >
                        <Text style={styles.headerText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            )
        };
    };

    constructor(props) {
        super(props);
        const oldNote = this.props.navigation.getParam('note');
        this.state = {
            data: {
                title: oldNote.title,
                body: oldNote.body,
                category: oldNote.category
            }
        };
    }

    componentWillMount() {
        this.props.navigation.setParams({ edit: this.editNote });
    }

    editNote = () => {
        const oldNote = this.props.navigation.getParam('note');
        let data: NoteTypes = {
            ...oldNote
        };

        // Checking is note changed
        // title changed?
        const titleChanged = this.state.data.title !== oldNote.title;
        if (titleChanged) {
            data = {
                ...data,
                title: this.state.data.title
            };
        }

        // content changed?
        const contentChanged = this.state.data.body !== oldNote.body;
        if (contentChanged) {
            // Check if body is empty
            if (this.state.data.body.length <= 0) {
                return ToastAndroid.show(
                    'No content not saving',
                    ToastAndroid.SHORT
                );
            }
            data = {
                ...data,
                body: this.state.data.body
            };
        }

        // category changed?
        const categoryChanged =
            this.state.data.category !== oldNote.category;
        if (categoryChanged) {
            data = {
                ...data,
                category: this.state.data.category
            };
        }

        this.props.editNote(data, oldNote.id);

        ToastAndroid.show('saved', ToastAndroid.SHORT);
        this.props.navigation.goBack();
    };

    getData = (state: NoteTypes) => {
        this.setState({ data: state });
    };

    render() {
        const note = this.props.navigation.getParam('note');
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <NoteForm note={note} onChange={this.getData} />
            </Container>
        );
    }
}

const mapDispatch = (dispatch) => ({
    editNote: (note: NoteTypes, id: string) =>
        dispatch(editNote(note, id))
});

export default connect(null, mapDispatch)(EditNote);
