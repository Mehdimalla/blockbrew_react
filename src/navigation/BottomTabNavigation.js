//import liraries
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSelector } from "react-redux";
import CustomBottomTabs from "./CustomBottomTabs";
import imagePath from "../constants/imagePath";
import { Account, Home, Investments, Orders, Prices } from "../Screens";
import navigationStrings from "./navigationStrings";
import strings from "../constants/lang";
const Tab = createBottomTabNavigator();

// create a component
const BottomTabNavigation = (props) => {
  const { guestLogin } = useSelector((state) => state.auth);
  // console.log(height);
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      tabBar={(props) => <CustomBottomTabs {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,
      })}
    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: strings.HOME,
          tabBarIcon: ({ focused }) =>
            focused ? imagePath.homeFocused : imagePath.homeUnfocused,
        }}
      />
      <Tab.Screen
        name={navigationStrings.PRICES}
        component={Prices}
        listeners={{
          tabPress: (e) => {
            guestLogin ? e.preventDefault() : null;
          },
        }}
        options={{
          tabBarLabel: strings.PRICES,
          tabBarIcon: ({ focused }) =>
            focused ? imagePath.pricesFocused : imagePath.pricesUnfocused,
        }}
      />
      {guestLogin ? null : (
        <Tab.Screen
          name={navigationStrings.ORDERS}
          component={Orders}
          options={{
            tabBarLabel: strings.ORDERS,
            tabBarIcon: ({ focused }) =>
              focused ? imagePath.ordersFocused : imagePath.ordersUnfocused,
          }}
        />
      )}
      <Tab.Screen
        name={navigationStrings.INVESTMENTS}
        component={Investments}
        listeners={{
          tabPress: (e) => {
            guestLogin ? e.preventDefault() : null;
          },
        }}
        options={{
          tabBarLabel: strings.INVESTMENTS,
          tabBarIcon: ({ focused }) =>
            focused
              ? imagePath.investmentsFocused
              : imagePath.investmentsUnfocused,
        }}
      />
      <Tab.Screen
        name={navigationStrings.ACCOUNT}
        component={Account}
        listeners={{
          tabPress: (e) => {
            guestLogin ? e.preventDefault() : null;
          },
        }}
        options={{
          tabBarLabel: strings.ACCOUNT,
          tabBarIcon: ({ focused }) =>
            focused ? imagePath.accountFocused : imagePath.accountUnfocused,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
