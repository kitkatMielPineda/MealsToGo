import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

//const isAndroid = Platform.OS === "android";

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
     <RestaurantsScreen />
     </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


