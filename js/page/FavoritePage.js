import React,{Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
type Props = {}
export default class FavoritePage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>FavoritePage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B3F7DB'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    }
})