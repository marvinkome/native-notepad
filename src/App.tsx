/**
 * ./src/App.tsx
 *
 * Root component
 */

import { Container } from 'native-base';
import * as React from 'react';
import Home from './components/home';
import NewNote from './components/new_note';
import Note from './components/note';

export default class App extends React.Component {
    render() {
        return <NewNote />;
    }
}
