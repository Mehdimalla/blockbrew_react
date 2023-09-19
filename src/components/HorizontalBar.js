//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { moderateScale } from "../styles/responsiveSize";

// create a component
const HorizontalBar = ({ horizontalBarStyle = {} }) => {
  return (
    <View style={{ ...styles.horizontalBar, ...horizontalBarStyle }}></View>
  );
};

// define your styles
const styles = StyleSheet.create({
  horizontalBar: {
    borderTopWidth: 0.7,
    color: colors.lightGreyInputBorderColor,
    opacity: 0.4,
    marginHorizontal: moderateScale(20),
  },
});
export default React.memo(HorizontalBar);
