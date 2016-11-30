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
    TabNavigation,
    TabNavigationItem as TabItem
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
    home: () => HomeScreen,
    homes: () => Homes,
    posts: () => Posts,
    profile: () => Profile
}));

class Homes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.common}>
                <Text>home.......</Text>
            </View>
        )
    }

    static route = {
        navigationBar: {
            visible: true,
            title: 'home'
        }
    }
}

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.common}>
                <Text>qweqweqwe</Text>
            </View>
        )
    }

    static route = {
        navigationBar: {
            visible: true,
            title: 'profile'
        }
    }
}

class Posts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.common}>
                <Text>12312312312312312123</Text>
            </View>
        )
    }

    static route = {
        navigationBar: {
            visible: true,
            title: 'posts'
        }
    }
}


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

    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigation
                    id="main"
                    navigatorUID="main"
                    initialTab="home">
                    <TabItem
                        id="home"
                        title="Home"
                        selectedStyle={styles.selectedTab}
                        renderIcon={(isSelected) => <Image source={require('./src/image/emoji2x.png')} style={{width: 30, height: 30}}/> }>
                        <StackNavigation
                            id="home"
                            navigatorUID="home"
                            initialRoute={Router.getRoute('homes')}
                        />
                    </TabItem>

                    <TabItem
                        id="posts"
                        title="Posts"
                        selectedStyle={styles.selectedTab}
                        renderIcon={(isSelected) => <Image source={require('./src/image/factory2x.png')} style={{width: 30, height: 30}}/> }>
                        <StackNavigation
                            id="posts"
                            initialRoute={Router.getRoute('posts')}
                        />
                    </TabItem>
                </TabNavigation>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectedTab: {
        backgroundColor: '#f65131'
    },
    common: {
        marginTop: 50
    }
})

AppRegistry.registerComponent('Helloworld', () => Helloworld);
