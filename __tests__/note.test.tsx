/**
 * __tests__/note.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import Note from '../src/components/note';

it('Renders Notepage correctly', () => {
    const note = renderer.create(<Note />).toJSON();
    expect(note).toMatchSnapshot();
});
