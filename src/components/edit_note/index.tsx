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
        this.state = {
            data: {
                title: '',
                body: '',
                category: 0
            }
        };
    }

    componentWillMount() {
        this.props.navigation.setParams({ edit: this.editNote });
    }

    editNote = () => {
        const oldNote = this.props.navigation.getParam('note');
        const note = {
            ...this.state.data
        };

        this.props.editNote(
            {
                ...this.state.data,
                id: oldNote.id,
                date: oldNote.date
            },
            oldNote.id
        );

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
