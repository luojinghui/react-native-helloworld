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
    TouchableHighlight,
    Dimension,
    Platform
} from 'react-native';

import {
    createRouter,
    NavigationProvider,
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem,
    DrawerNavigation,
    DrawerNavigationItem,
    SlidingTabNavigation,
    SlidingTabNavigationItem
} from '@exponent/ex-navigation';

import ListItem from './src/component/ListItem';

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
            <View style={styles.container}>
                <SlidingTabNavigation
                    id="tab"
                    navigatorUID="tab"
                    initialTab="first"
                    renderLabel={this._renderLabel}
                    barBackgroundColor="#333"
                    indicatorStyle={styles.tabIndicator}>
                    <SlidingTabNavigationItem id="first">
                        <View style={styles.quoteContainer}>
                            <Text style={styles.quoteMarks}>“</Text>
                            <Text style={styles.quoteText}>R2D2, you know better than to trust a strange computer!</Text>
                            <Text style={styles.quoteAuthor}>C3PO</Text>
                            <TouchableOpacity onPress={this._goToSecondTab}>
                                <Text style={{color: "#333"}}>this is icon</Text>
                            </TouchableOpacity>
                        </View>
                    </SlidingTabNavigationItem>
                    <SlidingTabNavigationItem id="second">
                        <View style={styles.quoteContainer}>
                            <Text style={styles.quoteMarks}>“</Text>
                            <Text style={styles.quoteText}>The best thing about a boolean is even if you are wrong, you are only off by a bit.</Text>
                            <Text style={styles.quoteAuthor}>Bryan</Text>
                            <TouchableOpacity onPress={this._goToFirstTab}>
                                <Text style={{color: "#333"}}>this is icon2</Text>
                            </TouchableOpacity>
                        </View>
                    </SlidingTabNavigationItem>
                </SlidingTabNavigation>
            </View>
        )
    }

    static route = {
        navigationBar: {
            title: 'Sliding Tab'
            // ...SlidingTabNavigation.navigationBarStyles,
        },
    }

    _goToFirstTab = () => {
        this.props.navigation.performAction(({ tabs, stacks }) => {
            tabs('sliding').jumpToTab('first');
        });
    };

    _goToSecondTab = () => {
        this.props.navigation.performAction(({ tabs, stacks }) => {
            tabs('sliding').jumpToTab('second');
        });
    };

    _renderLabel = ({route}) => {
        let title;
        if (route.key === 'first') {
            title = '行业';
        } else if (route.key === 'second') {
            title = '领域';
        }

        return <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>;
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
            // visible: true,
            tintColor: "#666"
            // title: 'profile'
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
            tintColor: "#666",
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
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    cover: {
        height: 160,
        resizeMode: 'cover',
        backgroundColor: '#131F2B',
    },
    hea: {
        flex: 1,
        height: 180,
        width: null,
        resizeMode: 'cover',
    },
    tabLabel: {
        margin: 8,
        fontSize: 13,
        color: '#fff',
    },

    tabIndicator: {
        backgroundColor: '#F65131'
    },

    quoteContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },

    quoteMarks: {
        alignSelf: 'flex-start',
        color: '#E91E63',
        fontSize: 36,
        left: -8,
        bottom: -42,
        marginTop: 64,
    },

    quoteText: {
        color: '#222',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        margin: 8,
    },

    quoteAuthor: {
        color: '#888',
        fontSize: 12,
        fontStyle: 'italic',
    },

    button: {
        margin: 16,
        color: '#0084FF',
    },

    selectedTab: {
        backgroundColor: '#eee',
    }
})

AppRegistry.registerComponent('Helloworld', () => Helloworld);
