import React, {useState, useEffect} from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext()
export const LocationContextProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState("San Francisco")


    const onSearch = (searchKeyword="") => {
        console.log("!!!",searchKeyword)       
        setIsLoading(true)
        setKeyword(searchKeyword)
        }

    useEffect(() => {
        if(!keyword.length){
            return;
        }
        locationRequest(keyword.toLocaleLowerCase()).then(locationTransform).then((result) => {
            setIsLoading(false)
            setLocation(result)
            console.log("!!!result",result)
        }).catch((err) => {
            setIsLoading(false)
            setError(err)
            console.log(err)
        })
    }, [keyword])

    return(
        <LocationContext.Provider value={{
            isLoading, 
            error, 
            location, 
            search: onSearch, 
            keyword,
            }}
            >
            {children}
        </LocationContext.Provider>
    )
}