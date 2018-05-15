/**
 * ./src/App
 *
 * Route Config
 */

import { StackNavigator } from 'react-navigation';
import EditNote from './components/edit_note';
import Home from './components/home';
import NewNote from './components/new_note';
import Note from './components/note';

export default StackNavigator(
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
