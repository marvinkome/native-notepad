/**
 * __tests__/newnote.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import EditNote from '../src/components/edit_note';

it('Renders edit note page correctly', () => {
    const editNote = renderer.create(<EditNote />).toJSON();
    expect(editNote).toMatchSnapshot();
});
