/**
 * ./src/components/home/index.tsx
 */

import { Button, Container, Fab, Icon } from 'native-base';
import * as React from 'react';
import { View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Topbar from '../helpers/topbar';
import Listing from './listing';
import { styles } from './styles';

interface Props extends NavigationScreenProps<{}> {}

/**
 * Home component
 */
export default class Home extends React.Component<Props, {}> {
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
                    items={['Hey', 'Hello']}
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
