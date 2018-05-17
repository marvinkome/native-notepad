/**
 * ./src/components/home/index.tsx
 */

import { Button, Container, Fab, Icon, Text } from 'native-base';
import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { HomeProps } from '../../types';
import Listing from './listing';
import { styles } from './styles';

/**
 * Home component
 */
export class Home extends React.Component<HomeProps, {}> {
    static navigationOptions: object = {
        title: 'Notepad',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#ff9800'
        }
    };
    onPress = (pageName: string, params?: object) => {
        this.props.navigation.navigate(pageName, params);
    };
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                {this.props.notes !== undefined &&
                this.props.notes.length > 0 ? (
                    <Listing
                        items={this.props.notes}
                        onPress={this.onPress}
                    />
                ) : (
                    <Text style={styles().textStyles}>
                        No notes click the button below to create one
                    </Text>
                )}
                <View style={{ flex: 1 }}>
                    <Fab
                        active={false}
                        direction="up"
                        position="bottomRight"
                        onPress={() => this.onPress('NewNote')}
                        style={{ backgroundColor: '#ff9800' }}
                    >
                        <Icon name="add" />
                    </Fab>
                </View>
            </Container>
        );
    }
}

const mapState = (state) => ({
    notes: state.main.notes
});

export default connect(mapState)(Home);
