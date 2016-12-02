/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 2016/12/2
 * Time: 上午11:29
 */
import React, {Component, PropTypes} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

class Main extends Component {
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>MAIN</Text>
                <TouchableOpacity style={styles.button} onPress={this.context.drawer.open}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7699dd',
        padding: 20,
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})


export default Main;
