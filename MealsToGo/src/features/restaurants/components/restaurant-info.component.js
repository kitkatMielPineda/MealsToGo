import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import styled from "styled-components"
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {Icon, Section, Rating, SectionEnd, Address, Info, RestaurantCard, RestaurantCardcover} from "../components/restaurant-info.styles"

{/*const Title = styled(Text)`
color: ${(props) => props.theme.colors.ui.primary};
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.title};
`*/}

export const RestaurantInfo = ({restaurant = {}}) => {
    const {
        name = "Some restaurant",
        icon = "https://cdn-icons.flaticon.com/png/512/562/premium/562678.png?token=exp=1658223470~hmac=c631f8bca87aec3825e7897949fe0e48",
        photos = ['https://picsum.photos/700'],
        address = "some address",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))
//console.log(ratingArray)
    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardcover source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                <Rating>
                {ratingArray.map((_, i)=>(
                <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20}/>
                ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporarily && (
                        <Text variant="error">
                            CLOSED TEMPORARILY
                        </Text>
                    )}
                    <Spacer position='left' size='large'>
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                    </Spacer>
                    <Spacer position='left' size="large">
                        <Icon source={{uri: icon}}/>
                    </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}