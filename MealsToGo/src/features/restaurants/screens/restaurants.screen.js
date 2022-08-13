import React, {useState, useContext} from "react";
import {
    //Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity
  } from "react-native";
  //import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

//const SearchContainer = styled(View)`
//padding: ${(props) => props.theme.space[3]};
//`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

// const RestaurantListContainer = styled(View)`
// flex: 1;
// padding: ${(props) => props.theme.space[3]};
// background-color: ${(props) => props.theme.colors.ui.primary};`

const Loading = styled(ActivityIndicator)`
margin-left: -25px
`

const LoadingContainer = styled(View)`
position: absolute;
top: 50%;
left: 50%;
`

export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext)
  const {favourites} = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
    return(
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800}/>
        </LoadingContainer>
      )}
    <Search
    isFavouritesToggled={isToggled} 
    onFavouritesToggle={()=>setIsToggled(!isToggled)}
    />
    {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}
    <RestaurantList
    data = {restaurants}
    renderItem={({item})=> {
      return(
        <TouchableOpacity
        onPress={()=>navigation.navigate("RestaurantDetail", {
          restaurant: item,
        })
      }
        >
    <Spacer position="bottom" size="large">
    <RestaurantInfo restaurant={item}/>
    </Spacer>
    </TouchableOpacity>
    )}} 
    keyExtractor={(item) => item.name}/>
  </SafeArea>
)}