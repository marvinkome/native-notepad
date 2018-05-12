/**
 * __tests__/newnote.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import NewNote from '../src/components/new_note';

it('Renders new note page correctly', () => {
    const newNote = renderer.create(<NewNote />).toJSON();
    expect(newNote).toMatchSnapshot();
});
