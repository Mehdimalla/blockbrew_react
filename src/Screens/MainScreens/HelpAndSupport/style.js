import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import { moderateScale } from "../../../styles/responsiveSize";
export const styles = StyleSheet.create({
    liststyle: {
      paddingTop: moderateScale(15),
    },
    btnStyle: {
      backgroundColor: colors.white,
      borderColor: colors.bordersolid,
      borderWidth: moderateScale(1),
      marginHorizontal: moderateScale(20),
    },
  });