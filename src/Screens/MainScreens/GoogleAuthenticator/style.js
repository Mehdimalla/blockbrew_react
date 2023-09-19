import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        paddingTop: moderateScale(getStatusBarHeight(true) + 20),
    },
    step1container:
    {
        paddingHorizontal: moderateScale(20),
        flex: 0.98
    },
    step1txt:
    {
        fontSize: textScale(14),
        fontFamily: fontFamily.AvenirMedium,
        marginTop: moderateScale(20)
    },

    // step 2 
    step2container:
    {
        paddingHorizontal: moderateScale(20),
        flex: 0.98
    },
    downloadtxt:
    {
        fontSize: textScale(15),
        fontFamily: fontFamily.AvenirHeavy,
        paddingTop: moderateScale(12)
    },
    addmanualstyle:
    {
        marginTop: moderateScale(43),
        alignItems: "center"
    },
    addmanualtxt:
    {
        fontFamily: fontFamily.AvenirHeavy,
        fontSize: textScale(16)
    },
    usestyle:
    {
        paddingHorizontal: moderateScale(23)
    },
    useText:
    {
        fontSize: textScale(14),
        paddingTop: moderateScale(6),
        fontFamily: fontFamily.AvenirMedium
    },
    accountStyle:
    {
        paddingHorizontal: moderateScale(18),
        paddingTop: moderateScale(8)
    },
    accountText:
    {
        fontSize: textScale(12),
        fontFamily: fontFamily.AvenirMedium, 
        color: colors.blackOpacity43
    },
    DCXstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(1)
    },
    DCXtext:
    {
        fontFamily: fontFamily.AvenirMedium,
        fontSize: textScale(14)
    },
    copyText:
    {
        color: colors.bordersolid,
        fontFamily: fontFamily.AvenirMedium,
        fontSize: textScale(13)
    },

    secretkeyText:
    {
        fontSize: textScale(12),
        fontFamily: fontFamily.AvenirMedium,
        color: colors.blackOpacity43
    },
    NANKstyle:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: moderateScale(1)
    },
    NANKtext:
    {
        fontFamily: fontFamily.AvenirMedium,
        fontSize: textScale(14)
    },

    btnStyle:
    {
        bottom: moderateScale(5),
        marginHorizontal: moderateScale(20),
        paddingBottom: moderateScale(8),

    },
    buttonTxtstyle:
    {
        fontFamily: fontFamily.AvenirHeavy,
        fontSize: textScale(16)
    },
    opengooglestyle:
    {
        marginTop: moderateScale(36),
        borderColor: colors.bordersolid,
        marginHorizontal: moderateScale(24),
        borderWidth: moderateScale(1),
        backgroundColor: colors.white
    },
    opengoogletxt:
    {
        color: colors.bordersolid,
        fontFamily: fontFamily.AvenirHeavy,
        fontSize: textScale(16)
    },
    // step 3

    step3container:
    {
        paddingHorizontal: moderateScale(20),
        flex: 0.98
    },
    verificationText:
    {
        fontFamily: fontFamily.AvenirHeavy,
        fontSize: textScale(16),
        paddingTop: moderateScale(12)
    },
    Inputstyle:
    { 
        borderWidth: 0.5,
         paddingVertical: 10, 
        borderColor: colors.blackOpacity40, }, 
        
});