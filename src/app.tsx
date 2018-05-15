/**
 * ./src/App
 *
 * Root component
 */

import { Container } from 'native-base';
import * as React from 'react';
import { BackHandler, YellowBox } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect, Provider } from 'react-redux';

import store from './redux/store';
import Navigator from './routeConfig';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader'
]);

interface IProps {
    dispatch: any;
    nav: any;
}

class App extends React.Component<IProps, {}> {
    componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.onBackPress
        );
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.onBackPress
        );
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };
    render() {
        const navigation = {
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener: () => null
        };
        return <Navigator navigation={navigation} />;
    }
}

const mapStore = (state) => ({
    nav: state.nav
});

const ReduxComp = connect(mapStore)(App);

export default () => (
    <Provider store={store}>
        <ReduxComp />
    </Provider>
);
