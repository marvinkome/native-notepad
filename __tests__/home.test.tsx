/**
 * __tests__/home.test
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Home, { Home as DumbHome } from '../src/components/home/index';
import initState from '../src/redux/initState';

it('Renders dumb homepage correctly', () => {
    const navigation = { navigate: jest.fn(), setParams: jest.fn() };
    const home = renderer
        .create(<DumbHome navigation={navigation} />)
        .toJSON();
    expect(home).toMatchSnapshot();
});

it('Renders homepage correctly', () => {
    const navigation = { navigate: jest.fn(), setParams: jest.fn() };
    const mockStore = configureStore();
    const store = mockStore({
        main: {
            ...initState
        }
    });
    const home = renderer
        .create(
            <Provider store={store}>
                <Home navigation={navigation} />
            </Provider>
        )
        .toJSON();
    expect(home).toMatchSnapshot();
});
