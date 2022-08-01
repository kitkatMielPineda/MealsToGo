import React, {useState} from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false)
    const [lunchExpanded, setLunchExpanded] = useState(false)
    const [dinnerExpanded, setDinnerExpanded] = useState(false)
    const [drinksExpanded, setDrinksExpanded] = useState(false)

    const {restaurant} = route.params

    return (
        <SafeArea>
            <RestaurantInfo restaurant={restaurant}/>
            <ScrollView>
            <List.Accordion
            title="Breakfast"
            left={(props)=><List.Icon {...props} icon="bread-slice"/>}
            expanded={breakfastExpanded}
            onPress={()=>setBreakfastExpanded(!breakfastExpanded)}
            >
                <List.Item title="Breakfast1" />
                <List.Item title="Breakfast2" />
                <List.Item title="Breakfast3" />
                <List.Item title="Breakfast4" />
            </List.Accordion>
            <List.Accordion
            title="Lunch"
            left={(props)=><List.Icon {...props} icon="hamburger"/>}
            expanded={lunchExpanded}
            onPress={()=>setLunchExpanded(!lunchExpanded)}
            >
                <List.Item title="Lunch1" />
                <List.Item title="Lunch2" />
                <List.Item title="Lunch3" />
                <List.Item title="Lunch4" />
            </List.Accordion>
            <List.Accordion
            title="Dinner"
            left={(props)=><List.Icon {...props} icon="bread-slice"/>}
            expanded={dinnerExpanded}
            onPress={()=>setDinnerExpanded(!dinnerExpanded)}
            >
                <List.Item title="Dinner1" />
                <List.Item title="Dinner2" />
                <List.Item title="Dinner3" />
                <List.Item title="Dinner4" />
            </List.Accordion>
            <List.Accordion
            title="Drinks"
            left={(props)=><List.Icon {...props} icon="cup"/>}
            expanded={drinksExpanded}
            onPress={()=>setDrinksExpanded(!drinksExpanded)}
            >
                <List.Item title="Drinks1" />
                <List.Item title="Drinks2" />
                <List.Item title="Drinks3" />
                <List.Item title="Drinks4" />
            </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}