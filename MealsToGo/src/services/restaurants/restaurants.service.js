import { mockImages, mocks } from "./mock/index"
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    //console.log(mocks)
    //const mock = mocks[location]
    //console.log("!!!san_francisco", mock)

    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock){
            reject("no found location")
        }
            resolve(mock)
    })
}

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random()*(mockImages.length - 1))]    
        })
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    })
    return camelize(mappedResults)
}

restaurantsRequest().then(restaurantsTransform).then((transformedResponse) => {
    console.log("!!!result",(transformedResponse))
}).catch((err)=>{
    console.log(err)
})