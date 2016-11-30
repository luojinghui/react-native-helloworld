import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import { withNavigation } from '@exponent/ex-navigation';

@withNavigation
// const Router = createRouter(() => ({
//     home: () => HomeScreen,
//     about: () => AboutScreen
// }));

class Helloworld extends React.Component {
    render() {
        return <Text onPress={this._goBack}>Go back</Text>
    }

    _goBack = () => {
        if (this.props.navigator.getCurrentIndex() > 0) {
            this.props.navigator.pop();
        }
    }
}

AppRegistry.registerComponent('Helloworld', () => Helloworld);
