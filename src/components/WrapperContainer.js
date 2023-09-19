import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import colors from "../styles/colors";

const WrapperContainer = ({
  children,
  statusBarColor = colors.white,
  barStyle = "dark-content",
  wrapperView = {},
}) => {

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor:'red',
        // paddingTop:
        // backgroundColor: statusBarColor,
      }}
    >
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{ ...styles.wrapperView, ...wrapperView }}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperView: { backgroundColor: colors.white, flex: 1 },
});
export default React.memo(WrapperContainer);
