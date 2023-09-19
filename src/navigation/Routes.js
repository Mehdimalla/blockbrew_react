//import liraries
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

// create a component
const Routes = () => {
  const { userLoginStatus, guestLogin } = useSelector((state) => state.auth);

  console.log(userLoginStatus?.userLoginStatus, "useStatus>>>>useStatus");
  // console.log(guestLogin, "guestLogin>>>guestLogin");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {guestLogin || userLoginStatus || userLoginStatus?.token
          ? MainStacktack(Stack)
          : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Routes;
