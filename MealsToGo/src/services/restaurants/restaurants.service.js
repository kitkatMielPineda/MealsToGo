import { mockImages, mocks } from "./mock"
import camelize from "camelize";

export const restaurantsRequest = (location) => {
    //console.log("!!!location", location)

    return new Promise((resolve, reject) => {
        //console.log("!!!2location", location)
        const mock = mocks[location];
        //console.log("!!!mock",mock)
        if (!mock){
            console.log("pumasok ba dito before reject?")
            return reject("no found location")
        }
        console.log("pumasok ba dito sa resolve??")
            return resolve(mock)
    })
}

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
  
      return {
        ...restaurant,
        address: restaurant.vicinity,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      };
    });
  
    return camelize(mappedResults);
  };

// restaurantsRequest().then(restaurantsTransform).then((transformedResponse) => {
//     console.log("!!!result",(transformedResponse))
// }).catch((err)=>{
//     console.log(err)
// })