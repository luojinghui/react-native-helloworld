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
    Text
} from 'react-native';

class Helloworld extends Component {
    render() {
        let pic = {
            uri: 'https://luojinghui.github.io/gallery-by-react/dist/assets/43af53fe5478f068b48b0fad9895e6f7.jpg'
        };

        return (
            <View style={styles.container}>
                <Image source={pic} style={styles.image}/>
                <Greeting text="Rexxa"/>
                <Greeting text="Jaina"/>
            </View>
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
            <Text>{showText}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
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
