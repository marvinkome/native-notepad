/**
 * ./src/components/new_note/index.tsx
 */

import { Container } from 'native-base';
import * as React from 'react';
import Topbar from '../helpers/topbar';
import NoteForm from './note_form';

/**
 * NewNote component
 */
export default class NewNote extends React.Component {
    render() {
        return (
            <Container>
                <Topbar>Add new note</Topbar>
                <NoteForm />
            </Container>
        );
    }
}
