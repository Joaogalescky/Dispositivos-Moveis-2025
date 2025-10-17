import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"

type SignInProps = Record<string, never>;
type SignInState = Record<string, never>;

export default class SignIn extends Component<SignInProps, SignInState> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tela Login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});
