/**
 * ./src/App
 *
 * Root component
 */

import { Container } from 'native-base';
import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import EditNote from './components/edit_note';
import Home from './components/home';
import NewNote from './components/new_note';
import Note from './components/note';

export const RootStack = StackNavigator(
    {
        Home: Home,
        Note: Note,
        NewNote: NewNote,
        EditNote: EditNote
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#607d8b'
            }
        }
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
