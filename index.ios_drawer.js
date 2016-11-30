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
    TabNavigationItem as TabItem,
    DrawerNavigation,
    DrawerNavigationItem,
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
                <Text>this this homes static page and this feeling is good...</Text>
                <Text>this this homes static page and this feeling is good...</Text>
                <Text>this this homes static page and this feeling is good...</Text>
                <Text>this this homes static page and this feeling is good...</Text>
                <Text>this this homes static page and this feeling is good...</Text>
                <Text>this this homes static page and this feeling is good...</Text>
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
                <Text>this is profile static page</Text>
                <Text>this is profile static page</Text>
                <Text>this is profile static page</Text>
                <Text>this is profile static page</Text>
                <Text>this is profile static page</Text>
                <Text>this is profile static page</Text>
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
                <Text>this is posts static page</Text>
                <Text>this is posts static page</Text>
                <Text>this is posts static page</Text>
                <Text>this is posts static page</Text>
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
                <DrawerNavigation
                    id='main'
                    initialItem='home'
                    drawerWidth={250}
                    renderHeader={this._renderHeader}
                >
                    <DrawerNavigationItem
                        id='home'
                        selectedStyle={styles.selectedItemStyle}
                        renderTitle={isSelected => this._renderTitle('Home', isSelected)}
                    >
                        <StackNavigation
                            id='home'
                            initialRoute={Router.getRoute('homes')}
                        />
                    </DrawerNavigationItem>

                    <DrawerNavigationItem
                        id='about'
                        selectedStyle={styles.selectedItemStyle}
                        renderTitle={isSelected => this._renderTitle('Posts', isSelected)}
                    >
                        <StackNavigation
                            id='about'
                            initialRoute={Router.getRoute('posts')}
                        />
                    </DrawerNavigationItem>

                </DrawerNavigation>
            </View>
        );
    }

    _renderHeader = () => {
        return (
            <View style={[styles.header, styles.header2]}>
                <Text style={{textAlign: 'center', marginTop: 10}}>抽屉</Text>
            </View>
        );
    };

    _renderTitle(text: '标题', isSelected: true) {
        return (
            <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
                {text}
            </Text>
        );
    };
}

const styles = StyleSheet.create({
    selectedTab: {
        backgroundColor: '#f65131'
    },
    common: {
        marginTop: 14,
        paddingLeft: 10
    },
    header: {
        height: 20,
    },
    header2: {
        height: 30,
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    selectedItemStyle: {
        backgroundColor: '#f65131'
    },

    titleText: {
        fontWeight: 'bold'
    },

    selectedTitleText: {
        color: 'white'
    }
})

AppRegistry.registerComponent('Helloworld', () => Helloworld);
