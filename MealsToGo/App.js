import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { createElement, useState, useEffect } from "react";
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
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import * as firebase from "firebase"
import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


const firebaseConfig = {
  apiKey: "AIzaSyCi4tj35dz12MbNxBbLwZ2Bl_0B5hIdBRI",
authDomain: "mealstogo-a88e5.firebaseapp.com",
projectId: "mealstogo-a88e5",
storageBucket: "mealstogo-a88e5.appspot.com",
messagingSenderId: "406060758357",
appId: "1:406060758357:web:b95b5ce080ac4a1b9f2bdc",
};

if(!firebase.apps.length){
initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
    firebase
    .auth()
    .signInWithEmailAndPassword("keith@proudcloud.io", "test123")
    .then((user) => {
      console.log(user)
      setIsAuthenticated(true)

    }).catch((e) => {
      console.log(e)
    })
  }, 2000)
  },[])
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

  if (!isAuthenticated) return null;

  return (
    <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
      <FavouritesContextProvider>
      <LocationContextProvider> 
      <RestaurantsContextProvider>
        <Navigation/>
     </RestaurantsContextProvider>
     </LocationContextProvider>
     </FavouritesContextProvider>
     </AuthenticationContextProvider>
     </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


