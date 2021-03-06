/**
 * ./src/components/note/index
 */

import { Container, StyleProvider, Text, View } from 'native-base';
import * as React from 'react';
import { Alert, ToastAndroid, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';

import getTheme from '../../../native-base-theme/components';
import { deleteNote } from '../../redux/actions';
import { NoteProps } from '../../types';
import NoteBody from './body';
import { BodyTheme, styles } from './styles';

/**
 * Note component
 */
export class Note extends React.Component<NoteProps, {}> {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: '',
            headerRight: (
                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={params ? params.edit : () => false}
                    >
                        <Text style={styles.headerText}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={params ? params.delete : () => false}
                    >
                        <Text style={styles.headerText}>DELETE</Text>
                    </TouchableOpacity>
                </View>
            )
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({
            edit: this.edit,
            delete: this.delete
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
                { text: 'Cancel', style: 'cancel' },
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
            <StyleProvider style={getTheme(BodyTheme)}>
                <Container style={{ backgroundColor: '#fff' }}>
                    <Text style={styles.noteTitle}>{note.title}</Text>
                    <NoteBody>{note.body}</NoteBody>
                </Container>
            </StyleProvider>
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
