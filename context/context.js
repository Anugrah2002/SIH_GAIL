import React, {useState} from "react";
import { View } from "react-native-web";


const DataContext = React.createContext();

const DataProvider = ({ children}) =>{
    const [empnostate, setEmpnoState] = useState('');
    const [locationstate, setLocationstate] = useState('');


    const store={
        empnostore:[empnostate,setEmpnoState],
        locationstore:[locationstate,setLocationstate]
    }

    return <DataContext.Provider value={store}>{children}</DataContext.Provider>


}

export {DataContext,DataProvider}