/**
 * ./src/components/new_note/index.tsx
 */

import { Container } from 'native-base';
import * as React from 'react';
import Topbar from '../helpers/topbar';
import NoteForm from './note_form';

/**
 *  Edit Note component
 */
export default class EditNote extends React.Component {
    static navigationOptions: object = {
        title: 'Edit Note'
    };

    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <NoteForm />
            </Container>
        );
    }
}
