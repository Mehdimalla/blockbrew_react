//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import { moderateScale, textScale, width } from "../styles/responsiveSize";
import { useNavigation } from "@react-navigation/native";
import fontFamily from "../styles/fontFamily";
import ShadowBorder from "./ShadowBorder";
import commonStyles from "../styles/commonStyles";
import navigationStrings from "../navigation/navigationStrings";

// create a component
const GoBackHeader = ({
  containerStyle = {},
  headerText,
  arrowStyle = {},
  headerTextStyle = {},
  rowContainerStyle = {},
  blankSpace = false,
  borderShadowLine = true,
  rightImg = false,
  rightText1 = "",
  rightImg1 = {},
  rightText2 = "",
  rightImg2 = {},
  rightText3 = "",
  rightImg3 = {},
  navigationScreen = false,
}) => {
  const navigation = useNavigation();
  const _goBack = () => {
    navigationScreen
      ? navigation.navigate(navigationScreen)
      : navigation.goBack();
  };
  return (
    <>
      <View style={{ ...styles.containerStyle, ...containerStyle }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ ...commonStyles.rowAlignCen, ...rowContainerStyle }}>
            <TouchableOpacity onPress={_goBack}>
              <Image
                source={imagePath.goBackArrow}
                style={{ ...styles.arrow, ...arrowStyle }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={{ ...styles.headerText, ...headerTextStyle }}>
              {headerText}
            </Text>
          </View>
          {rightImg ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.box}>
                <Image
                  source={rightImg1}
                  style={styles.box1Img}
                  resizeMode="contain"
                />
                <Text style={styles.boxText}>{rightText1}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Image
                  source={rightImg2}
                  style={styles.box2Img}
                  resizeMode="contain"
                />
                <Text style={styles.boxText}>{rightText2}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Image
                  source={rightImg3}
                  style={styles.box1Img}
                  resizeMode="contain"
                />
                <Text style={styles.boxText}>{rightText3}</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        {blankSpace ? <View style={{ height: moderateScale(30) }} /> : null}
      </View>
      {borderShadowLine ? <ShadowBorder /> : null}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  containerStyle: {
    opacity: 0.69,
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  rowContainer: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(20),
    backgroundColor: "red",
  },
  arrow: {
    height: width / 14,
    width: width / 13,
    marginRight: moderateScale(30),
  },
  headerText: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
    alignSelf: "center",
    color: "black",
  },
  box: {
    alignItems: "center",
    marginLeft: moderateScale(10),
    justifyContent: "space-between",
  },
  box1Img: { height: moderateScale(25), width: moderateScale(25) },
  box2Img: { height: moderateScale(22), width: moderateScale(22) },
  boxText: {
    textTransform: "uppercase",
    marginTop: moderateScale(8),
    fontSize: textScale(10.5),
    letterSpacing: 0.3,
    fontFamily: fontFamily.AvenirMedium,
  },
});

//make this component available to the app
export default React.memo(GoBackHeader);
