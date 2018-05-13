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
    render() {
        return (
            <Container>
                <Topbar>Edit note</Topbar>
                <NoteForm />
            </Container>
        );
    }
}
