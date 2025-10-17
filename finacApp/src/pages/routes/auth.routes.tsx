import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp";

export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

type AuthRoutesProps = Record<string, never>;
type AuthRoutesState = Record<string, never>;

export default class AuthRoutes extends Component<AuthRoutesProps, AuthRoutesState> {
    render() {
        return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SignIn" component={SignIn}/>
            <AuthStack.Screen name="SignUp" component={SignUp}/>
        </AuthStack.Navigator>
        );
    };
}