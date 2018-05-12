/**
 * ./src/components/home/index.tsx
 */

import { Container } from 'native-base';
import * as React from 'react';
import Topbar from '../helpers/topbar';
import Listing from './listing';

/**
 * Home component
 */
export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Topbar>Notepad</Topbar>
                <Listing items={['Hey', 'Hello']} />
            </Container>
        );
    }
}
