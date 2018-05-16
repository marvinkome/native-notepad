/**
 * ./src/components/note/index
 */

import { Container, Text, View } from 'native-base';
import * as React from 'react';
import { Alert, ToastAndroid, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';

import { deleteNote } from '../../redux/actions';
import { NoteProps } from '../../types';
import NoteBody from './body';
import { styles } from './styles';

/**
 * Note component
 */
export class Note extends React.Component<NoteProps, {}> {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title:
                params && params.note
                    ? params.note.title.length > 16
                        ? params.note.title.substring(0, 16 - 3) +
                          '...'
                        : params.note.title
                    : 'Title...',
            headerRight: (
                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={params ? params.edit : () => false}
                    >
                        <Text style={styles.headerText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={params ? params.delete : () => false}
                    >
                        <Text style={styles.headerText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({
            edit: this.edit,
            delete: this.delete,
            note: this.props.notes.filter((value) => {
                if (
                    value.id ===
                    this.props.navigation.getParam('noteId')
                ) {
                    return value;
                }
            })[0]
        });
    }

    edit = () => {
        this.props.navigation.navigate('EditNote', {
            note: this.props.notes.filter((value) => {
                if (
                    value.id ===
                    this.props.navigation.getParam('noteId')
                ) {
                    return value;
                }
            })[0]
        });
    };

    delete = () => {
        Alert.alert(
            '',
            'This note will be deleted',
            [
                { text: 'Cancel' },
                {
                    text: 'Delete',
                    onPress: () => {
                        this.props.deleteNote(
                            this.props.navigation.getParam('noteId')
                        );
                        ToastAndroid.show(
                            'deleted',
                            ToastAndroid.SHORT
                        );
                        this.props.navigation.goBack();
                    }
                }
            ],
            {
                cancelable: true
            }
        );
    };

    shouldComponentUpdate(np) {
        const note = np.notes.filter((value) => {
            if (value.id === np.navigation.getParam('noteId')) {
                return value;
            }
        })[0];

        if (note !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const note = this.props.notes.filter((value) => {
            if (
                value.id === this.props.navigation.getParam('noteId')
            ) {
                return value;
            }
        })[0];
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <NoteBody>{note.body}</NoteBody>
            </Container>
        );
    }
}

const mapStore = (store) => ({
    notes: store.main.notes
});

const mapDispatch = (dispatch) => ({
    deleteNote: (id: string) => dispatch(deleteNote(id))
});

export default connect(mapStore, mapDispatch)(Note);
