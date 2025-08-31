import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type AppProps = {};
type AppState = {
    justifyContent: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
    alignItems: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
};

class AppEx3 extends Component<AppProps, AppState> {
    state: AppState = {
        justifyContent: "center",
        alignItems: "center",
    };

    mudarAlinhamento = (justifyContent: AppState["justifyContent"], alignItems: AppState["alignItems"]) => {
        this.setState({ justifyContent, alignItems });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.botoes}>
                    <Button title="Esquerdo" onPress={() => this.mudarAlinhamento("flex-start", "flex-start")}></Button>
                    <Button title="Centro" onPress={() => this.mudarAlinhamento("center", "center")}></Button>
                    <Button title="Direito" onPress={() => this.mudarAlinhamento("flex-end", "flex-end")}></Button>
                </View>

                <View style={[styles.area, { justifyContent: this.state.justifyContent, alignItems: this.state.alignItems },]}>
                    <Text style={styles.box}>A</Text>
                    <Text style={styles.box}>B</Text>
                    <Text style={styles.box}>C</Text>
                </View>
            </View>
        );
    }
}

export default AppEx3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        fontFamily: 'sans-serif'
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    area: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
    },
    box: {
        backgroundColor: "#76CEE6",
        padding: 10,
        margin: 2,
        fontSize: 15,
    },
});
