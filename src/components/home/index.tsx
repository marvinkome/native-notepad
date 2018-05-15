/**
 * ./src/components/home/index.tsx
 */

import { Button, Container, Fab, Icon } from 'native-base';
import * as React from 'react';
import { View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';

import { INote } from '../../redux/reducers';
import Listing from './listing';
import { styles } from './styles';

interface Props extends NavigationScreenProps<{}> {
    notes: INote[];
}

/**
 * Home component
 */
export class Home extends React.Component<Props, {}> {
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
