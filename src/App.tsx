/**
 * ./src/App.tsx
 *
 * Root component
 */

import { Container } from 'native-base';
import * as React from 'react';
import Home from './components/home';

export default class App extends React.Component {
    render() {
        return <Home />;
    }
}
