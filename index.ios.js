/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native';

// class Helloworld extends Component {
//     render() {
//         let pic = {
//             uri: 'https://luojinghui.github.io/gallery-by-react/dist/assets/43af53fe5478f068b48b0fad9895e6f7.jpg'
//         };
//
//         return (
//             <View style={styles.container}>
//                 <Image source={pic} style={styles.image}/>
//                 <Greeting text="Rexxa"/>
//                 <Greeting text="Jaina"/>
//                 <Text style={ [styles.text, styles.text2 ]}>it's ok!</Text>
//             </View>
//         );
//     }
// }

class Helloworld extends Component {
    render() {
        let pic = {
            uri: 'https://luojinghui.github.io/gallery-by-react/dist/assets/43af53fe5478f068b48b0fad9895e6f7.jpg'
        };
        let message = {
            uri: './src/image/Box.png'
        }

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height:  64, backgroundColor: '#ef4e24', flexDirection: 'row', paddingLeft: 10, alignItems: 'center',paddingTop: 20}}>
                    <TextInput style={{ flex: 1,height: 36, backgroundColor: "#fff", borderRadius: 4,  fontSize: 14, paddingLeft: 40}} placeholder="搜索专家名称"/>
                    <Image source={require('./src/image/Box.png')} style={{ height: 20, width: 20, marginLeft: 20, marginRight: 20, marginBottom: 8 }}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'column' , paddingLeft: 10, paddingRight: 10}}>
                    <View style={{ flexDirection: 'row', paddingTop: 10}}>
                        <View style={{ flex: 1, marginRight: 10 , backgroundColor: 'powderblue' }}>
                            <Image source={pic} style={{flex: 1, height: 222.5}}/>
                            <Text>sadfasdf</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
                            <Image source={pic} style={{flex: 1, height: 222.5}}/>
                            <Text>123</Text>
                        </View>
                    </View>
                    <View style={{  flexDirection: 'row', paddingTop: 10}}>
                        <View style={{ flex: 1, marginRight: 10 , backgroundColor: 'powderblue' }}>
                            <Image source={pic} style={{flex: 1, height: 222.5}}/>
                            <Text>123</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
                            <Image source={pic} style={{flex: 1, height: 222.5}}/>
                            <Text>123</Text>
                        </View>
                    </View>
                </View>
                <Text>123123</Text>
            </ScrollView>
        );
    }
}

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        let showText = this.state.showText ? this.props.text : this.props.text.substr(1);

        return (
            <Text style={ styles.text }>{showText}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f65131'
    },
    text2: {
        color: '#333'
    },
    image: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 4,
        borderColor: '#f65131',
        padding: 10
    }
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
