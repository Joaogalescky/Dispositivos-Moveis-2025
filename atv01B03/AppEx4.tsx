import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

type AppProps = {};
type AppState = {};

type JobsProps = {
    width: number;
};

class Jobs extends Component<JobsProps> {
    render() {

        let img = 'https://i.pinimg.com/236x/bd/79/b8/bd79b8fbc1ec699fdf1f5c07cbc012bd.jpg';

        return (
            <Image
                source={{ uri: img }}

                style={{
                    width: this.props.width - 255,
                    height: (this.props.width - 255) * 0.3,
                    margin: 15,
                    borderRadius: 10,
                }}
                resizeMode="cover"
            />
        )
    }
}

class AppEx4 extends Component<AppProps, AppState> {
    render() {
        const { width } = Dimensions.get("window");

        return (
            <View style={styles.container}>
                {/* Seção A - Tamanhos fixos */}
                <Text style={styles.tituloSecao}>Seção A - Fixos</Text>
                <View style={styles.secaoFixa}>
                    <TouchableOpacity style={styles.botaoFixo}>
                        <Text style={styles.textoBotao}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoFixo}>
                        <Text style={styles.textoBotao}>B</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoFixo}>
                        <Text style={styles.textoBotao}>C</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção B - Tamanho Dinâmico */}
                <Text style={styles.tituloSecao}>Seção B - Dinâmico</Text>
                <Jobs width={width} /> /{/* width pegar o tamanho da janela, mas pode trocar por algum valor */}
            </View>
        );
    }
}

export default AppEx4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        fontFamily: 'sans-serif'
    },
    tituloSecao: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    secaoFixa: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15,
    },
    botaoFixo: {
        width: 50,
        height: 50,
        backgroundColor: "#76CEE6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    textoBotao: {
        fontSize: 15,
        fontWeight: "bold",
    },
});
