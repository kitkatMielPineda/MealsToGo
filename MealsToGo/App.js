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
import { Navigation } from "./src/infrastructure/navigation";


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
        <Navigation/>
     </RestaurantsContextProvider>
     </LocationContextProvider>
     </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


