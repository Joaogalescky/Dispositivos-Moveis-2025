import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export type PessoaData = {
    nome: string;
    idade: number;
    email: string;
}

export interface AppState {
    feed: PessoaData[];
}

export interface PessoaProps {
    data: PessoaData
}

export class Pessoa extends Component<PessoaProps> {
    render() {
        return (
            <View style={styles.pessoa}>
                <Text style={styles.pessoaNome}>Nome: {this.props.data.nome}</Text>
                <Text style={styles.pessoaLinha}>Email: {this.props.data.email}</Text>
                <Text style={styles.pessoaLinha}>Idade: {this.props.data.idade}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pessoa: {
        marginBottom: 12,
    },
    pessoaNome: {
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
    },
    pessoaLinha: {
        fontSize: 14,
        color: 'white',
    },
});

export default Pessoa;