import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
} from "react-native";
import ButtonComponent from "../../../components/ButtonComponent";
import WrapperContainer from "../../../components/WrapperContainer";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Divider from "react-native-divider";
import { styles } from "./style";
import strings from "../../../constants/lang";
import imagePath from "../../../constants/imagePath";
import colors from "../../../styles/colors";
import actions from "../../../redux/actions";
import commonStyles from "../../../styles/commonStyles";
import navigationStrings from "../../../navigation/navigationStrings";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { loginAction, LoginData, socialLogin } from "../../../redux/actions/authActions";


const LoginScreen = ({ navigation }) => {
  const [loginOrSignup, setLoginOrSignup] = useState("");

  const onLoginSignup = (data) => {
    setLoginOrSignup(data);
    SheetManager.show("action");
  };

  useEffect(() => {

    GoogleSignin.configure({
      webClientId: "632503840320-eee087uhff35h7gvcukd69tg0jpsk919.apps.googleusercontent.com"
    });
  }, []);
  //.............google login in ......................//
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, "google res ++++");
      const email = userInfo?.user?.email;
      const fullName = userInfo?.user?.name;
      const device_token = userInfo?.idToken;
      const id = userInfo?.user?.id;
      let name = fullName.split(' ')
      console.log(firstName, lastName, "name");
      const firstName = name[0];
      const lastName = name[1];
      const socialApiDAta = {
        provider_id: id,
        provider: "google",
        device_token: device_token,
        device_type: Platform.OS === "android" ? "android" : "IOS",
        firstname: firstName,
        lastname: lastName ? lastName : "",
        email: email,
      };
      await actions.socialLogin(socialApiDAta).then((res) => {
        console.log(res?.data, "social api data response");
        if (res) {
          //  setItem("userData", res?.data)
          loginAction(res?.data)
        } else {
          SheetManager.hide("action");
          navigation.navigate(navigationStrings.ADD_PHONE_NO, { userData: res?.data })
        }

      })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("errorr occurred during google sign in", error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("errorr occurred during google sign in", error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("errorr occurred during google sign in", error);
      } else {
        console.log("errorr occurred during google sign in", error);
      }
    }
  };

  return (
    <WrapperContainer>
      {/* --------- Background image , logo And skip Button ------------ */}
      <ImageBackground
        source={imagePath.introImg}
        style={styles.containerBgImg}
      >
        <View style={styles.container}>
          <Image source={imagePath.logo} style={styles.headerlogo} />
          <TouchableOpacity
            onPress={() => actions.guestLoginAction(true)}
            activeOpacity={0.5}
          >
            <Text style={{ ...commonStyles.medium15Black }}>
              {strings.SKIP}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* --------- Buttom Container for login and Create Account ------------ */}
      <View style={styles.bottomcontainer}>
        <Text style={styles.bottomtxt}>{strings.EASIEST_WAY_TO_INVEST}</Text>

        <View style={styles.btmstyle}>
          <ButtonComponent
            btnStyle={styles.buttonstyle}
            onPress={() => onLoginSignup("signup")}
            buttonTxt={{ ...commonStyles.heavy14Black, color: colors.white }}
            buttonText={strings.CREATE_ACCOUNT}
          />
          <ButtonComponent
            onPress={() => onLoginSignup("login")}
            btnStyle={styles.buttonstyle}
            buttonTxt={{ ...commonStyles.heavy14Black, color: colors.white }}
            buttonText={strings.LOGIN}
          />
        </View>
      </View>

      {/* ---------ActionSheet on Login and Create Account------------ */}
      <ActionSheet id={"action"}>
        <View style={styles.actioncontainer}>
          {loginOrSignup == "login" ? (
            <Text style={{ ...commonStyles.heavy18Black }}>
              {strings.LOGIN_TO_BLOCKBREW}
            </Text>
          ) : (
            <Text style={{ ...commonStyles.heavy18Black }}>
              {strings.CREATE_ACCOUNT_FREE}
            </Text>
          )}
          {loginOrSignup == "login" ? (
            <ButtonComponent


              onPress={() => {
                googleLogin();
                SheetManager.hide("action");
              }}
              buttonText={strings.LOGIN_WITH_GOOGLE}
              btnStyle={styles.googlestyle}
              buttonTxt={{ ...commonStyles.heavy14Black }}
              btnLeftIcon={imagePath.googleLogo}
              imgIconStyle={styles.imgIconStyle}
            />
          ) : (
            <ButtonComponent
              onPress={() => {
                googleLogin();
                SheetManager.hide("action");
              }}
              buttonText={strings.CREATE_WITH_GOOGLE}
              btnStyle={styles.googlestyle}
              buttonTxt={{ ...commonStyles.heavy14Black }}
              btnLeftIcon={imagePath.googleLogo}
              imgIconStyle={styles.imgIconStyle}
            />
          )}

          {loginOrSignup == "login" ? (
            <ButtonComponent
              buttonText={strings.LOGIN_WITH_EMAIL}
              btnStyle={styles.emailbtn}
              buttonTxt={{
                ...commonStyles.heavy14Black,
                color: colors.blueButton,
              }}
              btnLeftIcon={imagePath.emailLogo}
              imgIconStyle={styles.imgIconStyleEmail}
              onPress={() => {
                navigation.navigate(navigationStrings.LOGIN);
                SheetManager.hide("action");
              }}
            />
          ) : (
            <ButtonComponent
              buttonText={strings.CREATE_WITH_EMAIL}
              btnStyle={styles.emailbtn}
              buttonTxt={{
                ...commonStyles.heavy14Black,
                color: colors.blueButton,
              }}
              btnLeftIcon={imagePath.emailLogo}
              imgIconStyle={styles.imgIconStyleEmail}
              onPress={() => {
                // actions.loginAction();
                navigation.navigate(navigationStrings.SIGNUP);
                SheetManager.hide("action");
              }}
            />
          )}

          {/*.................... divider............ */}
          <Divider
            borderColor={colors.lightGreyBorder}
            width={1}
            color={colors.greyTxt}
            orientation="center"
          >
            <Text style={styles.orTxt}>{strings.OR}</Text>
          </Divider>

          {loginOrSignup == "login" ? (
            <ButtonComponent
              btnStyle={styles.emailbtn}
              buttonText={strings.CREATE_ACCOUNT}
              buttonTxt={{
                ...commonStyles.heavy14Black,
                color: colors.blueButton,
              }}
              onPress={() => onLoginSignup("signup")}
            />
          ) : (
            <ButtonComponent
              btnStyle={styles.emailbtn}
              buttonText={strings.LOGIN1}
              buttonTxt={{ ...commonStyles.heavy14Black, color: colors.blueButton }}
              onPress={() => onLoginSignup("login")}
            />
          )}

          <View style={styles.descriptionstyle}>
            <Text style={styles.descriptiontxt}>
              {strings.CONTINUE_WITH_TERMS}{" "}
              <Text
                style={[
                  styles.descriptiontxt,
                  { textDecorationLine: "underline" },
                ]}
              >
                {strings.TC}
              </Text>
            </Text>
          </View>
        </View>
      </ActionSheet>
    </WrapperContainer>
  );
};

export default LoginScreen;




