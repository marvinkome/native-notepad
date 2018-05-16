/**
 * ./src/components/home/index.tsx
 */

import { Button, Container, Fab, Icon } from 'native-base';
import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { HomeProps } from '../../types';
import Listing from './listing';
import { styles } from './styles';

/**
 * Home component
 */
export class Home extends React.Component<HomeProps, {}> {
    static navigationOptions: object = {
        title: 'Home'
    };
    onPress = (pageName: string, params?: object) => {
        this.props.navigation.navigate(pageName, params);
    };
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Listing
                    items={this.props.notes}
                    onPress={this.onPress}
                />
                <View style={{ flex: 1 }}>
                    <Fab
                        active={false}
                        direction="up"
                        position="bottomRight"
                        onPress={() => this.onPress('NewNote')}
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
