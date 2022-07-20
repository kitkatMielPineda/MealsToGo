import React, {useState} from "react";
import {
    //Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList
  } from "react-native";
  import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`

const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const RestaurantListContainer = styled(View)`
flex: 1;
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.ui.primary};`

export const RestaurantsScreen = () => {
    return(
    <SafeArea>
    <SearchContainer>
        <Searchbar
    placeholder="Search"
    // onChangeText={onChangeSearch}
    // value={searchQuery}
        />
    </SearchContainer>
    <RestaurantList
    data = {[{name:1}, {name:2}, {name:3}, {name:4}]}
    renderItem={()=> (
    <Spacer position="bottom" size="large">
    <RestaurantInfo/>
    </Spacer>
    )} 
    keyExtractor={(item) => item.name}/>
  </SafeArea>
)}