/**
 * __tests__/home.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/home';

it('Renders homepage correctly', () => {
    const hello = renderer.create(<Home />).toJSON();
    expect(hello).toMatchSnapshot();
});
