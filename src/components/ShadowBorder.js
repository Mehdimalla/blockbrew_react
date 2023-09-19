//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { moderateScale } from "../styles/responsiveSize";

// create a component
const ShadowBorder = () => {
  return <View style={styles.container}></View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.lightGreyRgbaBorder,
    borderBottomWidth: 0.4,
    borderBottomShadowColor: colors.lightGreyRgbaBorder,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: moderateScale(5),
  },
});
export default React.memo(ShadowBorder);
