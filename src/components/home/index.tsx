/**
 * ./src/components/home/index.tsx
 *
 * Root component
 */

import { Container } from 'native-base';
import * as React from 'react';
import Listing from '../helpers/listing';
import Topbar from '../helpers/topbar';

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
