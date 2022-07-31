import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { createElement, useState } from "react";
import {
  //Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { Searchbar } from 'react-native-paper';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen'
import { ThemeProvider } from "styled-components";
import {theme} from "./src/infrastructure/theme"
import {useFonts as useOswald, Oswald_400Regular} from  "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { SafeArea } from "./src/components/utility/safe-area.component";

//const isAndroid = Platform.OS === "android";

const Tab = createBottomTabNavigator()
const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color}/>
    )
  }
}

export default function App() {
  //const [searchQuery, setSearchQuery] = useState('')

  //const onChangeSearch = query => setSearchQuery(query)

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider> 
      <RestaurantsContextProvider>
     <NavigationContainer>
      <Tab.Navigator
      screenOptions={createScreenOptions}
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',}}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
        <Tab.Screen name="Map" component={Map}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
     </NavigationContainer>
     </RestaurantsContextProvider>
     </LocationContextProvider>
     </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


