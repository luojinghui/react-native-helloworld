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
    DrawerNavigation,
    DrawerNavigationItem,
} from '@exponent/ex-navigation';
import ListItem from './component/ListItem';
import Drawer from 'react-native-drawer'
import ControlPanel from './component/ControlPanel'
import Main from './component/Main'

const Router = createRouter(() => ({
    home: () => HomeScreen,
    homes: () => Homes,
    posts: () => Posts,
    profile: () => Profile
}));

class Posts extends Component {
    constructor(props) {
        super(props)
    }
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };

    render() {
        return(
            <Drawer
                side="right"
                type="displace"

                panOpenMask={0.9}
                tweenEasing="linear"
                tweenHandlerOn="material"
                tweenDuration={300}
                panThreshold={.2}
                openDrawerOffset={100}
                ref={(ref) => this._drawer = ref}
                negotiatePan={true}

                content={
                    <ControlPanel closeDrawer={this.closeDrawer} />
                }
                styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
                onOpen={() => {
                    console.log('onopen')
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    console.log('onclose')
                    this.setState({drawerOpen: false})
                }}
            >
                <Main></Main>
            </Drawer>
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
            <NavigationProvider router={Router}>
                <StackNavigation
                    initialRoute={Router.getRoute('home')}
                />
            </NavigationProvider>
        );
    }
}

class Homes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Examples</Text>
                <ListItem
                    title="Tab Navigation"
                    description="iOS style tab bar based navigation"
                    onPress={this._goToScreen('posts')}
                />
                <ListItem
                    title="Sliding Tab Navigation"
                    description="Material design style swipeable tab navigation"
                    onPress={this._goToScreen('profile')}
                />
                <ListItem
                    title="Alert Bars"
                    description="Local alert bars for showing temporary messages"
                    onPress={this._goToScreen('homes')}
                />
            </View>
        )
    }

    static route = {
        navigationBar: {
            title: 'Surprise',
            tintColor: "#666"
        },
    }

    _goToScreen = name => () => {
        this.props.navigator.push(Router.getRoute(name));
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
            // visible: true,
            tintColor: "#666"
            // title: 'profile'
        }
    }
}

class HomeScreen extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <DrawerNavigation
                    drawerPosition="left"
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
            <View>

                <Image source={require('./image/sky22.jpg')} style={styles.hea}></Image>
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
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        margin: 8,
    },
    version: {
        fontSize: 18,
    },
    bgImage: {
        top: 0,
        left: 0,
        right: 0,
        height: Platform.OS === 'ios' ? 64 : 65,
    }
})

export default Helloworld;