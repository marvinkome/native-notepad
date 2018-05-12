/**
 * ./src/components/home/index.tsx
 */

import { Container } from 'native-base';
import * as React from 'react';
import Topbar from '../helpers/topbar';
import NoteBody from './body';

/**
 * Note component
 */
export default class Note extends React.Component {
    render() {
        return (
            <Container>
                <Topbar>Note Name</Topbar>
                <NoteBody>Hello</NoteBody>
            </Container>
        );
    }
}
