import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container:
    {
        marginHorizontal: moderateScale(20),
        flex: 0.98
    },
    addMoney:
    {
        fontFamily: fontFamily.AvenirHeavy,
        fontSize: textScale(18),
        color: colors.blackOpacity70
    },
    cashmoneyicon:
    {
        paddingTop: moderateScale(10),
        flexDirection: "row"
    },
    availabletxt:
    {
        fontSize: textScale(14),
        color: colors.blackOpacity43,
        paddingLeft: moderateScale(11),
        fontFamily: fontFamily.AvenirMedium
    },
    availablebalance:
    {
        fontSize: moderateScale(15),
        fontFamily: fontFamily.AvenirHeavy,
        paddingTop: moderateScale(1.5)
    },
    textInput:
    {
        borderColor: colors.blackOpacity40,
        paddingVertical: moderateScale(12)
    },
    btnview:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(10)
    },
    btnStyle:
    {
        backgroundColor: colors.white,
        borderRadius: moderateScale(20),
        borderWidth:moderateScale(0.5),
        paddingHorizontal: moderateScale(33),
        paddingVertical: moderateScale(10),
        borderColor: colors.blackOpacity43,

    },
    continuebtn:
    {
        marginTop: moderateScale(20)
    },
    buttonTxt:
    {
        fontFamily: fontFamily.AvenirHeavy,
        fontSize: textScale(16)
    },
    temporarystyle:
    {
        flexDirection: "row",
        marginTop: moderateScale(16),
        paddingVertical: moderateScale(10),
        opacity:moderateScale(21)
    },
    descstyle:
    {
        marginLeft: moderateScale(20),
        paddingRight: moderateScale(30)
    },
    temporaryTextstyle:
    {

        textAlign: "left",
        fontSize: textScale(12),
        fontFamily: fontFamily.AvenirMedium,
        color: colors.yellow
    },
    bottomcontainer:
    {
        flexDirection: "row",
        flex: 0.2,
        bottom: moderateScale(50),
        position: "absolute",
        marginHorizontal: moderateScale(20),
    },
    timerStyle:
    {
        marginTop: moderateScale(15)
    },
    missimttxtstyle:
    {
        fontFamily: fontFamily.AvenirMedium,
        fontSize: moderateScale(14),
        paddingTop: moderateScale(15),
    },
    addyourtxtstyle:
    {
        fontFamily: fontFamily.AvenirMedium,
        fontSize: textScale(11),
        color: colors.blackOpacity43,
        textAlign: "auto"
    },
    arrowbackstyle:
    {
        tintColor: colors.blackOpacity40,
        marginTop: moderateScale(35),
        height: moderateScale(20),
        width: moderateScale(15)
    }
});
