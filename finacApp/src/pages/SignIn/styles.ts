import styled from "styled-components/native";
import { ActivityIndicator } from 'react-native';

export const Background = styled.View`
    flex: 1;
    background-color: "#F4F7FF;
    // align-items: center;
    // justify-content: center;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: "#F0F4FF";
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 60%;
    align-self: center;
    aspectRatio: 1;
    margin-bottom: 20px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: "FFF";
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: "#121212";
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: "#3B3DBF";
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const SubmitText = styled.Text`
    color: "#FFF";
    font-size: 20px;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: "#171717";
`;