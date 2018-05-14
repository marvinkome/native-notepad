/**
 * __tests__/home.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/home';

it('Renders homepage correctly', () => {
    const navigation = { navigate: jest.fn(), setParams: jest.fn() };
    const home = renderer
        .create(<Home navigation={navigation} />)
        .toJSON();
    expect(home).toMatchSnapshot();
});
