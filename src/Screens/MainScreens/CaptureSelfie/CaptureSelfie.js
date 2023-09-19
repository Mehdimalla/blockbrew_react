//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import fontFamily from "../../../styles/fontFamily";
import {
  height,
  moderateScale,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import ImagePicker from "react-native-image-crop-picker";
// create a component
const CaptureSelfie = () => {
  const [image, setImage] = useState();
  const cameraClick = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === "ios" ? image?.sourceURL : image?.path;
      // console.log(imageUri, "imageuri is >>>");4242424
      setImage(imageUri);
    });
  };

  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader blankSpace={true} borderShadowLine={false} />
      </View>
      <View style={{ flex: 0.97 }}>
        <View style={styles.txtstyle}>
          <Text style={styles.capturetxt}>{strings.CAPTURE_SELFIE}</Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image style={styles.imgstyle} source={{ uri: image }} />
        </View>
        <TouchableOpacity
          onPress={() => cameraClick()}
          activeOpacity={0.7}
          style={styles.cameraiconstyle}
        >
          <Image source={imagePath.CaptureCamera} />
        </TouchableOpacity>
      </View>
      <ButtonComponent
        btnStyle={styles.btnStyle}
        buttonText={strings.CONTINUE}
        buttonTxt={styles.buttonTxt}
      />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  btnStyle: {
    marginHorizontal: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  buttonTxt: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
  },
  cameraiconstyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(20),
  },
  imgstyle: {
    fontSize: textScale(20),
    height: height / 3.3,
    justifyContent: "center",
    alignSelf: "center",
    width: width / 1.9,
    // backgroundColor: "yellow",
    alignSelf: "center",
    marginTop: moderateScale(40),
    // borderWidth: 1,
    borderRadius: width / 2.5,
  },
  txtstyle: {
    paddingHorizontal: moderateScale(20),
  },
  capturetxt: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(20),
  },
  imagecontainer: {
    flex: 0.6,
    marginHorizontal: moderateScale(80),
    // backgroundColor:"red"
  },
});

//make this component available to the app
export default CaptureSelfie;
