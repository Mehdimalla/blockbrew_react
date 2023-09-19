//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../styles/colors";
import { commonStyles } from "../styles/commonStyles";
import fontFamily from "../styles/fontFamily";
import { moderateScale, textScale, width } from "../styles/responsiveSize";
import HorizontalBar from "./HorizontalBar";

// create a component
const IconTitleDesFlatlist = ({
  index,
  image = "",
  title = "",
  des = null,
  rightIcon = "",
  onpress,
  flatlistContainer = {},
  leftIconStyle = {},
  titleStyle = {},
  desStyle = {},
  rightIconStyle = {},
  rightText = "",
  horizontalBarStyle = {},
  rightTextStyle = {},
}) => {
  return (
    <>
      {index == 0 ? null : (
        <HorizontalBar horizontalBarStyle={{ ...horizontalBarStyle }} />
      )}
      <TouchableOpacity
        onPress={onpress}
        style={{ ...styles.flatlistContainer, ...flatlistContainer }}
      >
        <View style={{ ...styles.rowCenter }}>
          {image ? (
            <Image
              source={image}
              style={{ ...styles.leftIconStyle, ...leftIconStyle }}
              resizeMode="contain"
            />
          ) : null}
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                ...styles.titleStyle,
                ...titleStyle,
                paddingBottom: des == null ? 0 : moderateScale(2),
              }}
            >
              {title}
            </Text>
            {des == null ? null : (
              <Text style={{ ...styles.desStyle, ...desStyle }}>{des}</Text>
            )}
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {rightText ? (
            <Text style={{ ...styles.rightTextStyle, ...rightTextStyle }}>
              {rightText}
            </Text>
          ) : null}
          {rightIcon ? (
            <Image
              source={rightIcon}
              style={{ ...styles.rightIconStyle, ...rightIconStyle }}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(13),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftIconStyle: {
    height: moderateScale(width / 13),
    width: moderateScale(width / 13),
    marginRight: moderateScale(15),
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: textScale(14),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  desStyle: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(12),
    color: colors.black,
    opacity: 0.49,
  },
  rightIconStyle: {
    height: moderateScale(width / 30),
    width: moderateScale(width / 30),
    alignSelf: "center",
    marginLeft: moderateScale(10),
  },
  rightTextStyle: {
    fontSize: textScale(15),
  },
});

//make this component available to the app
export default React.memo(IconTitleDesFlatlist);
