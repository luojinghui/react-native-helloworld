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
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
    withNavigation,
    connect
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
    home: () => HomeScreen,
    about: () => AboutScreen,
    back: () => BackButton
}));

class Helloworld extends Component {
    render() {
        return (
            // <NavigationProvider router={Router}>
            //     <StackNavigation initialRoute={Router.getRoute('home')}/>
            // </NavigationProvider>
            <NavigationProvider router={Router}>
                <StackNavigation
                    defaultRouteConfig={{
                        navigationBar: {
                            backgroundColor: '#f8f8f8',
                            tintColor: '#666',
                        }
                    }}
                    initialRoute={Router.getRoute('home')}
                />
            </NavigationProvider>
        );
    }
}

class HomeScreen extends Component {
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
        this.props.navigator.push(Router.getRoute('back'));
    }
}

class AboutScreen extends Component {
    static route = {
        navigationBar: {
            title: 'About',
        }
    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>AboutScreen!</Text>
                <Text onPress={this._goBackHome}>
                    Go back home
                </Text>
            </View>
        )
    }

    _goBackHome = () => {
        this.props.navigator.pop();
    }
}

@withNavigation
class BackButton extends React.Component {
    static route = {
        navigationBar: {
            title: 'back',
            renderRight: (route, props) => <SignOutButton />
        }
    }

    render() {
        return (
            <View>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
                <Text onPress={this._goBack}>Go back</Text>
            </View>
        )
    }

    _goBack = () => {
        if (this.props.navigator.getCurrentIndex() > 0) {
            this.props.navigator.pop();
        }
    }
}

class SignOutButton extends Component {
    render() {
        return (
            <TouchableOpacity >
                <Text style={{marginTop: 14, color: '#666', fontWeight: 'bold'}}>Sign out</Text>
            </TouchableOpacity>
        );
    }
}

AppRegistry.registerComponent('Helloworld', () => Helloworld);
