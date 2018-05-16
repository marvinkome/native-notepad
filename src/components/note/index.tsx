/**
 * ./src/components/note/index
 */

import { Container, Text, View } from 'native-base';
import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { NoteProps } from '../../types';
import NoteBody from './body';
import { styles } from './styles';

/**
 * Note component
 */
export default class Note extends React.Component<NoteProps, {}> {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params
                ? params.noteName.length > 16
                    ? params.noteName.substring(0, 16 - 3) + '...'
                    : params.noteName
                : 'Note Name',
            headerRight: (
                <View style={styles.headerView}>
                    <TouchableHighlight onPress={params.edit}>
                        <Text style={styles.headerText}>Edit</Text>
                    </TouchableHighlight>
                    <Text style={styles.headerText}>Delete</Text>
                </View>
            )
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({ edit: this.edit });
    }

    edit = () => {
        this.props.navigation.navigate('EditNote');
    };

    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <NoteBody>
                    {this.props.navigation.getParam('noteBody')}
                </NoteBody>
            </Container>
        );
    }
}
