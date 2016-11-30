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
                <View style={styles.container}>
                    <Image source={require('./src/image/sparkles.jpg')} style={styles.cover} />
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={this._showAlert}>
                            <Text style={styles.buttonText}>SHOW ALERT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._showAnotherAlert}>
                            <Text style={styles.buttonText}>SHOW ANOTHER ALERT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._goBack}>
                            <Text style={styles.buttonText}>GO BACK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    static route = {
        navigationBar: {
            visible: true,
            title: 'home'
        }
    }

    _showAlert = () => {
        this.props.navigator.showLocalAlert('Tap on me to close!', {
            text: { color: '#000' },
            container: { backgroundColor: '#FFEB3B' },
        });
    };

    _showAnotherAlert = () => {
        this.props.navigator.showLocalAlert('You love alert bars, huh?', {
            text: { color: '#fff' },
            container: { backgroundColor: '#F44336' },
        });
    };

    _goBack = () => {
        this.props.navigator.pop();
    };

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
                    drawerPosition="right"
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
                            defaultRouterConfig={{
                                navigationBar: {
                                    backgroundColor: "#333",
                                    tintColor: "#fff"
                                }
                            }}
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
            <Image source={require('./src/image/sky22.jpg')} style={styles.hea}></Image>
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
    },
    hea: {
        flex: 1,
        height: 180,
        width: null,
        resizeMode: 'cover',
    },
    cover: {
        height: 160,
        resizeMode: 'cover',
        backgroundColor: '#131F2B',
    },

    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 12,
    },

    button: {
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#E91E63',
        borderRadius: 24,
        margin: 6,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 12,
    }
})

AppRegistry.registerComponent('Helloworld', () => Helloworld);
