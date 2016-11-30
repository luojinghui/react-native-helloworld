/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class Helloworld extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('Helloworld', () => Helloworld);


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
                <Text>this is posts page</Text>
                <Text>this is posts page</Text>
                <Text>this is posts page</Text>
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
                    drawerWidth={300}
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
                <Text style={[styles.header, styles.header2]}>抽屉...</Text>
            </View>
        );
    };

    _renderTitle(text: '123', isSelected: true) {
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
        marginTop: 50
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
        backgroundColor: 'blue'
    },

    titleText: {
        fontWeight: 'bold'
    },

    selectedTitleText: {
        color: 'white'
    }
})

AppRegistry.registerComponent('Helloworld', () => Helloworld);
