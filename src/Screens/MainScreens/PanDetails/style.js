import { StyleSheet } from "react-native";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
export const styles = StyleSheet.create({
  liststyle: {
    paddingTop: moderateScale(15),
    // flex:1
  },
  textInputstyle: {
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    borderWidth: 0.5,
  },
  continuebtnstyle: {
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(15),
  },
  continuebtn: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirHeavy,
  },
});
