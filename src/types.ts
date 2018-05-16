/**
 * ./src/types
 * All types declaration
 */

import { NavigationScreenProps } from 'react-navigation';

/**
 * generic Form props
 *
 * @export
 * @interface FormProps
 * @template T
 */
export interface FormProps<T> {
    onChange: (state) => void;
}

/**
 * Props for class App in ./src/app.tsx
 *
 * @export
 * @interface AppProps
 */
export interface AppProps {
    dispatch: any;
    nav: any;
}

/**
 * prop types for edit style component
 *
 * @export
 * @interface HomeProps
 * @extends {NavigationScreenProps<{}>}
 */
export interface EditProps extends NavigationScreenProps<{}> {
    editNote: (data: NoteTypes, id: string) => void;
}

/**
 * state types for edit note component
 *
 * @export
 * @interface EditState
 */
export interface EditState {
    data: {
        title: string;
        body: string;
        category: number;
    };
}

export interface EditFormProps extends FormProps<{}> {
    note: NoteTypes;
}

/**
 * Type for Styles of Edit Note component
 *
 * @export
 * @interface EditNoteFormStyles
 */
export interface EditNoteFormStyles {
    content: object;
    textArea: object;
    pickerCont: object;
    pickerText: object;
    headerText: object;
}

/**
 * Types for Home component
 *
 * @export
 * @interface HomeProps
 * @extends {NavigationScreenProps<{}>}
 */
export interface HomeProps extends NavigationScreenProps<{}> {
    notes: NoteTypes[];
}

/**
 * Types for Listing component
 *
 * @export
 * @interface ListingProps
 */
export interface ListingProps {
    items: NoteTypes[];
    onPress: (pagename: string, param?: object) => void;
}

/**
 * Type for note object
 *
 * @export
 * @interface NoteTypes
 */
export interface NoteTypes {
    id: string;
    title: string;
    body: string;
    category: number;
    date: number;
}

/**
 * Type for styles of Home component
 *
 * @export
 * @interface HomeStyles
 */
export interface HomeStyles {
    listItemStyle: object;
    listBodyText: object;
    listDateText: object;
    iconStyles: object;
}

/**
 * Props types for new note component
 *
 * @export
 * @interface NewNoteProps
 * @extends {NavigationScreenProps<{}>}
 */
export interface NewNoteProps extends NavigationScreenProps<{}> {
    addNote: (data: NoteTypes) => void;
}

/**
 * state types for new note component
 *
 * @export
 * @interface NewNoteState
 */
export interface NewNoteState {
    data: {
        title: string;
        body: string;
        category: number;
    };
}

/**
 * Prop types for note forms
 *
 * @export
 * @interface NoteFormProps
 */
export interface NoteFormProps extends FormProps<{}> {}

/**
 * State props for note forms
 *
 * @export
 * @interface NoteFormState
 */
export interface FormState {
    title: string;
    body: string;
    category: number;
}

/**
 * types for new note component styles
 *
 * @export
 * @interface NewNoteStyles
 */
export interface NewNoteStyles {
    content: object;
    textArea: object;
    pickerCont: object;
    pickerText: object;
    headerText: object;
}

/**
 * prop types for note body
 *
 * @export
 * @interface NoteBodyProps
 */
export interface NoteBodyProps {
    children: string;
}

/**
 * Props types for note component
 *
 * @export
 * @interface NoteProps
 * @extends {NavigationScreenProps<{}>}
 */
export interface NoteProps extends NavigationScreenProps<{}> {
    notes: NoteTypes[];
}

/**
 * Types for note component styles
 *
 * @export
 * @interface NoteStyles
 */
export interface NoteStyles {
    content: object;
    text: object;
    headerView: object;
    headerText: object;
}
