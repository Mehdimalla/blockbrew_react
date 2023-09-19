import { Alert } from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";

// --------------------------------------LAUNCH CAMERA----------------------------
const launchCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      navigation.navigate(navigationStrings.ADD_INFO, { selectPhoto: res?.path });
    });
  };
  
  const launchGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log("selected image from gallery", image);
    });
  };
  
  export const selectImageOptions = () => {
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
  