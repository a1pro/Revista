
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashScreen from "../screens/SplashScreen/SplashSreen";


const Stack = createStackNavigator();

const StackNavigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> */}
           
        </Stack.Navigator>
    );
}
export default StackNavigation;