/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 2016/11/30
 * Time: 上午11:05
 */
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

import {
    createRouter,
    NavigationProvider,
    StackNavigation
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
    home: () => HomeScreen,
    about: () => AboutScreen
}));

class Helloworld extends React.Component {
    render() {
        return (
            <NavigationProvider router={Router}>
                <StackNavigation initialRoute={Router.getRoute('home')}/>
            </NavigationProvider>
        );
    }
}

class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            title: 'Home',
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text>HomeScreen!</Text>
                    <Text onPress={this._goToAbout}>
                        Push about route
                    </Text>
                </View>
            </ScrollView>
        )
    }

    _goToAbout = () => {
        this.props.navigator.push(Router.getRoute('about'));
    }
}

class AboutScreen extends React.Component {
    static route = {
        navigationBar: {
            title: 'About',
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>AboutScreen!</Text>
                {/*<Text onPress={this._goBackHome}>*/}
                {/*Go back home*/}
                {/*</Text>*/}
            </View>
        )
    }

    // _goBackHome = () => {
    //     this.props.navigator.pop();
    // }
}

AppRegistry.registerComponent('Helloworld', () => Helloworld);
