//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageCropPicker from "react-native-image-crop-picker";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useSelector } from "react-redux";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import actions from "../../../redux/actions";
import { loginAction } from "../../../redux/actions/authActions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale, width } from "../../../styles/responsiveSize";
import { showSuccessMsg, showWarningMsg } from "../../../utils/helperFunction";
import validator from "../../../utils/validations";

// create a component
const UpdateProfile = ({ navigation }) => {
  //----- redux state data after login
  const userData = useSelector((state) => state?.auth?.userLoginStatus);

  //----- usestate for update form
  const [upDateData, setUpdateData] = useState({
    firstName: userData?.firstname,
    lastName: userData?.lastname,
    profilePic: userData?.profile_photo_path,
    imageObject: {},
  });
  const { firstName, lastName, profilePic, imageObject } = upDateData;
  const updateState = (data) =>
    setUpdateData((state) => ({ ...state, ...data }));
  const onChangeTextResult = (key, value) => {
    // console.log(key, value, "key");
    updateState({ [key]: value });
  };

  //   ----validations
  const isValidData = () => {
    const error = validator({
      firstName,
      lastName,
    });
    if (error) {
      console.log(error);
      alert(error);
      showWarningMsg(error);
      return;
    }
    return true;
  };

  // ----------LAUNCH CAMERA and gallery--------
  const launchCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image?.path, "camera");
      const imageuri = Platform.OS === "ios" ? image?.sourceURL : image?.path;
      // const imageuri = image?.path;
      onChangeTextResult("profilePic", imageuri);
      onChangeTextResult("imageObject", image);
      console.log("selected image from gallery", imageObject?.mime);
    });
  };
  const launchGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      const imageuri = Platform.OS === "ios" ? image?.sourceURL : image?.path;
      // const imageuri = image?.path;
      onChangeTextResult("profilePic", imageuri);
      onChangeTextResult("imageObject", image);
      console.log("selected image from gallery", imageObject?.mime);
    });
  };

  const selectImageOptions = () => {
    Alert.alert("Upload Image", "Choose an option", [
      {
        text: "Camera",
        onPress: launchCamera,
      },
      {
        text: "Gallery",
        onPress: launchGallery,
      },
      {
        text: "Cancel",
        onPress: () => console.log("OK Pressed"),
        style: "cancel",
      },
    ]);
  };

  //   -----update profile form submit with api
  const onUpdateProfile = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }

    try {
      let updateApiData = new FormData();
      updateApiData.append("firstname", firstName);
      updateApiData.append("lastname", lastName);
      updateApiData.append("profile_photo_path", {
        uri: profilePic,
        name: `${(Math.random() + 1).toString(36).substring(7)}`,
        type: imageObject?.mime,
      });
      console.log(updateApiData, "updateApiData>>>updateApiData");
      let header = { "Content-Type": "multipart/form-data" };
      await actions.updateProfile(updateApiData, header).then((res) => {
        console.log(res, res?.data?.firstname, "update api response");
        if (res?.status === 200) {
          showSuccessMsg(strings.PROFILE_UPDATED_SUCCESSFULLY);
          loginAction({ ...userData, ...res?.data });
          navigation.goBack();
        }
      });
    } catch (error) {
      console.log("update profile error raised", error);
    }
  };

  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader
          headerTextStyle={{ ...commonStyles.heavy16Black }}
          headerText={strings.UPDATE_PROFILE}
        />
      </View>
      <ScrollView style={{ ...commonStyles.paddingV20xH20 }}>
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={selectImageOptions}
        >
          <Text style={{ ...commonStyles.black14Black }}>Edit</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Image
            source={
              profilePic == null
                ? imagePath.accountUnfocused
                : { uri: profilePic }
            }
            style={{
              height: moderateScale(120),
              width: moderateScale(120),
              borderRadius: width / 2,
              borderWidth: 0.5,
              borderColor: colors.greyTxt,
              marginBottom: moderateScale(20),
            }}
            resizeMode="cover"
          />
        </View>
        <CommonTextInput
          placeholder={strings.FIRST_NAME}
          value={firstName}
          onChangeText={(value) => onChangeTextResult("firstName", value)}
          textInput={{
            ...commonStyles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
        />
        <CommonTextInput
          placeholder={strings.LAST_NAME}
          value={lastName}
          onChangeText={(value) => onChangeTextResult("lastName", value)}
          textInput={{
            ...commonStyles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
        />
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        // style={{ margin: moderateScale(20) }}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={onUpdateProfile}
          buttonText={strings.UPDATE_PROFILE}
          btnStyle={{ ...commonStyles.marginV20xH15 }}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default UpdateProfile;
