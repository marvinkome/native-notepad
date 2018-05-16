/**
 * __tests__/newnote.test
 */

import * as React from 'react';
import renderer from 'react-test-renderer';
import EditNote, {
    EditNote as DumbEditNote
} from '../src/components/edit_note';

it('Renders dumb edit note page correctly', () => {
    const navigation = {
        goBack: jest.fn(),
        getParam: jest.fn(),
        setParams: jest.fn()
    };
    const editNote = renderer
        .create(<DumbEditNote navigation={navigation} />)
        .toJSON();
    expect(editNote).toMatchSnapshot();
});
