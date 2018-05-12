/**
 * __tests__/app.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

it('App Renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
});
