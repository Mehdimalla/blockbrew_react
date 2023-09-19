import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: moderateScale(getStatusBarHeight(true) + 20),
    backgroundColor: colors.lightGrey,
  },
  container: {
    flex: 1,
    marginHorizontal: moderateScale(22),
    marginTop: moderateScale(-20),
  },
  instanstyle: {
    // top: -10,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: moderateScale(100),
    borderColor: colors.blackOpacity43,
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(0.5),
    paddingVertical: moderateScale(5),
    backgroundColor: "white",
  },
  instanttxt: {
    color: colors.blueColor,
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(14),
  },
  estimatestyle: {
    paddingTop: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red"
  },
  estimatetxt: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(14),
    color: colors.blackOpacity70,
  },
  amountstyle: {
    // flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  amountxt: {
    fontFamily: fontFamily.AvenirBlack,
    fontSize: textScale(20),
    color: colors.blackOpacity70,
  },
  howmuchstyle: {
    marginTop: moderateScale(37),
    justifyContent: "center",
    alignItems: "center",
  },
  howmuchtxt: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(12),
  },
  inputcontainer: {
    paddingTop: moderateScale(43),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  USDstyle: {
    paddingHorizontal: moderateScale(50),
    borderColor: colors.blackOpacity43,
    borderRadius: moderateScale(10),
  },
  equalto: {
    fontSize: textScale(16),
    paddingTop: moderateScale(15),
  },
  // LPTtxt:
  // {
  //     paddingHorizontal: 50,
  //     borderColor: colors.blackOpacity40,
  // },
  balancecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(20),
  },
  balancetxt: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.blackOpacity43,
  },
  amountBalancetxt: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirMedium,
  },
  addfunds: {
    fontFamily: fontFamily.AvenirMedium,
    color: colors.blueColor,
    fontSize: textScale(13),
  },
  youpaystyle: {
    alignItems: "center",
    marginBottom: moderateScale(20),
  },
  youpaytxt: {
    fontSize: textScale(14),
  },
  moveiconstyle: {
    marginTop: moderateScale(5.5),
    marginLeft: moderateScale(5),
    tintColor: colors.blueColor,
  },
  arrowBottomStyle: {
    marginTop: moderateScale(6),
    marginLeft: moderateScale(5),
  },
  btnStyle: {
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(15),
  },
});
