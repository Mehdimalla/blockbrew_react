//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// create a component
const GradientComponent = ({
  color1 = "#081527",
  color2 = "#081527",
  children,
}) => {
  return (
    <LinearGradient
      // start={{ x: 0, y: 0 }}
      // end={{ x: 1, y: 0 }}
      colors={[color1, color2]}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    opacity: 1,
  },
});

//make this component available to the app
export default React.memo(GradientComponent);
