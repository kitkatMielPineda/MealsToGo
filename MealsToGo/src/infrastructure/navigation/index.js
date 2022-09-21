import React, {useContext} from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import {View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return(
    <NavigationContainer>
         isAuthenticated ? <AppNavigator/>:
        <View>
            <AccountNavigator />
        </View>
    </NavigationContainer>
)}