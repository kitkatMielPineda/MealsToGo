import React, {useState, useContext} from "react";
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
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";

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

const Loading = styled(ActivityIndicator)`
margin-left: -25px
`

const LoadingContainer = styled(View)`
position: absolute;
top: 50%;
left: 50%;
`

export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext)
    return(
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800}/>
        </LoadingContainer>
      )}
    <SearchContainer>
        <Searchbar
    placeholder="Search"
    // onChangeText={onChangeSearch}
    // value={searchQuery}
        />
    </SearchContainer>
    <RestaurantList
    data = {restaurants}
    renderItem={({item})=> {
      return(
    <Spacer position="bottom" size="large">
    <RestaurantInfo restaurant={item  }/>
    </Spacer>
    )}} 
    keyExtractor={(item) => item.name}/>
  </SafeArea>
)}