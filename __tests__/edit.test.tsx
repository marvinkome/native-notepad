/**
 * __tests__/newnote.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import EditNote from '../src/components/edit_note';

it('Renders new note page correctly', () => {
    const newNote = renderer.create(<EditNote />).toJSON();
    expect(newNote).toMatchSnapshot();
});
