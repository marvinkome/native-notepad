/**
 * ./src/components/note/index
 */

import { Container, Text, View } from 'native-base';
import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';

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
                    <TouchableHighlight onPress={params.edit}>
                        <Text style={styles.headerText}>Edit</Text>
                    </TouchableHighlight>
                    <Text style={styles.headerText}>Delete</Text>
                </View>
            )
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({
            edit: this.edit,
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

export default connect(mapStore)(Note);
