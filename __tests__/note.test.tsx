/**
 * __tests__/note.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import Note from '../src/components/note';

it('Renders Notepage correctly', () => {
    const navigation = {
        navigate: jest.fn(),
        setParams: jest.fn(),
        getParam: jest.fn()
    };
    const note = renderer.create(<Note navigation={navigation} />);
    expect(note).toMatchSnapshot();
});
