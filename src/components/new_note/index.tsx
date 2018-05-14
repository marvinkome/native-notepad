/**
 * ./src/components/new_note/index.tsx
 */

import { Container, Text } from 'native-base';
import * as React from 'react';
import { View } from 'react-native';
import Topbar from '../helpers/topbar';
import NoteForm from './note_form';
import { styles } from './styles';

/**
 * NewNote component
 */
export default class NewNote extends React.Component {
    static navigationOptions: object = {
        title: 'Add new note',
        headerRight: <Text style={styles.headerText}>Save</Text>
    };
    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <NoteForm />
            </Container>
        );
    }
}
