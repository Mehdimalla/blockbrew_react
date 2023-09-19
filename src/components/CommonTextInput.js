//import liraries
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import imagePath from "../constants/imagePath";

import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,

} from "../styles/responsiveSize";

// create a component
const CommonTextInput = ({
  placeholder,
  password = false,
  value,
  onChangeText,
  textInput = {},
  placeholderTextColor,
  showLeftIcon,
  showRightIcon,
  keyboardType = "default",
  showRighticonStyle,
  hide,
  setHide,
 
}) => {
  const [passwordHide, setPasswordHide] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          { ...styles.textInput, ...textInput },
          { paddingLeft: showLeftIcon ? moderateScale(50) : moderateScale(15) },
        ]}
        keyboardType={keyboardType}
        secureTextEntry={hide}
        value={value}
        onChangeText={onChangeText}
        hide={hide}
      />
      {showLeftIcon ? (
        <Image
          source={showLeftIcon} //Change your icon image here
          style={styles.ImageStyle}
        />
      ) : null}
      {/* {showRightIcon ? (
        <Image
          source={showRightIcon} //Change your icon image here
          style={{ ...styles.showRighticonStyle, ...showRighticonStyle }}
        />
      ) : null} */}
      {password ? (
        <TouchableOpacity
          style={styles.showRighticonStyle}
          onPress={() => setHide(!hide)}
        >
          <Image
            source={hide ? imagePath?.hideEyeGrey : imagePath?.showEyeGrey} //Change your icon image here
            style={{
              ...styles.showRighticonStyle,
              top: hide ? moderateScale(-12) : moderateScale(-7),
              ...showRighticonStyle,
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  ImageStyle: {
    position: "absolute",
    left: moderateScale(17),
  },
  showRightIcon: {
    position: "absolute",
    right: moderateScale(17),
  },
  showRighticonStyle: {
    position: "absolute",
    right: moderateScale(12),
    // top: "33%",
  },
  textInput: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(5),
    marginVertical: moderateScaleVertical(10),
    fontSize: textScale(17),
    position: "relative",
    color: "black",
  },
});

//make this component available to the app
export default React.memo(CommonTextInput);
