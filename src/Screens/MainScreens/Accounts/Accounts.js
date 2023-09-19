//import liraries
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import React, { useCallback, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale, width } from "../../../styles/responsiveSize";
import { styles } from "./style.js";
import Modal from "react-native-modal";
import ButtonComponent from "../../../components/ButtonComponent";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

// create a component
const Account = () => {
  const navigation = useNavigation();
  const userData = useSelector((state) => state?.auth?.userLoginStatus);
  const walletBalance = userData?.wallet_balance;
  const name = userData?.name;
  const email = userData?.email;
  const profile = userData?.profile_photo_path;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const data = [
    {
      id: 1,
      image: imagePath.account,
      title: strings.ACCOUNT_SETTING,
      des: strings.MANAGE_KYC_SETTING,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.ACCOUNT_SETTINGS);
      },
    },
    {
      id: 2,
      image: imagePath.security,
      title: strings.SECURITY,
      des: strings.MANAGE_PASS_SECURITY,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.SECURITY);
      },
    },
    {
      id: 3,
      image: imagePath.warning,
      title: strings.PRICE_ALERTS,
      des: strings.GET_NOTIFIED_PRICE_ACTION,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.PRICE_ALERTS);
      },
    },
    {
      id: 4,
      image: imagePath.support,
      title: strings.HELP_SUPPORT,
      des: strings.GET_HELP_WITH_ACCOUNT,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.HELP_AND_SUPPORT);
      },
    },
    {
      id: 5,
      image: imagePath.telegram,
      title: strings.JOIN_TELEGRAM,
      des: strings.TAKE_PART_IN_DISCUSSION,
      showMoveIcon: false,
      onpress: () => {
        navigation.navigate(navigationStrings.ACCOUNT_SETTINGS);
      },
    },

    // CHNAGE TEMPORARY
    {
      id: 6,
      image: imagePath.dollar,
      title: strings.CURRENT_TAB,
      des: strings.SELECT_CURRENCY_TO_TRADE,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.CHANGE_CURRENCY);
      },
    },
    {
      id: 7,
      image: imagePath.share,
      title: strings.INVITE_EARN,
      des: strings.INVITE_YOUR_FRIENDS_EARN_REWARDS,
      showMoveIcon: false,
      onpress: () => {
        navigation.navigate(navigationStrings.ACCOUNT_SETTINGS);
      },
    },
    // CHNAGE TEMPORARY
    {
      id: 8,
      image: imagePath.language,
      title: strings.LANGUAGE,
      des: strings.CHANGE_LANGUAGE,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.CHANGE_LANGUAGE);
      },
    },

    {
      id: 9,
      image: imagePath.twitter,
      title: strings.FOLLOW_ON_TWITTER,
      des: strings.STAY_ON_LATEST_NEWS,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.ACCOUNT_SETTINGS);
      },
    },
    {
      id: 10,
      image: imagePath.about,
      title: strings.ABOUT_US,
      des: strings.ABOUT_TERMS_PRIVACY,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.ACCOUNT_SETTINGS);
      },
    },
    //.........temporary navigation........//
    {
      id: 11,
      image: imagePath.feedback,
      title: strings.APP_FEEDBACK,
      des: strings.HELP_US_IMPROVE_YOUR_EXPERIENCE,
      showMoveIcon: imagePath.move,
      onpress: () => {
        navigation.navigate(navigationStrings.ACCOUNT_SETTINGS);
      },
    },
    {
      id: 12,
      image: imagePath.logout,
      title: strings.LOGOUT,
      des: null,
      showMoveIcon: false,
      onpress: () => {
        toggleModal();
      },
    },
  ];

  const logout = async () => {
    if (!isModalVisible) {
      toggleModal();
    } else {
      setModalVisible(false);
      try {
        await GoogleSignin.signOut();
        let header = { "Content-Type": "multipart/form-data" };
        actions.logoutAction(header);
      } catch (error) {
        console.log("handleLogout Error", error);
      }
    }
  };
  // let str = "Mehdi hussain malla";
  // let result = str.split(" ");
  // console.log(result, "result is");

  const listHeaderComponent = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.priceContainer}
          onPress={() => navigation.navigate(navigationStrings.UPDATE_PROFILE)}
        >
          <View style={commonStyles.rowAlignCen}>
            <Image
              source={profile ? { uri: profile } : imagePath.account}
              style={styles.profilePic}
            />
            <Text style={{ ...commonStyles.heavy18Black }}>{name}</Text>
          </View>
          <Text style={{ ...commonStyles.medium16Black, ...styles.userEmail }}>
        
            {email}
          </Text>
        </TouchableOpacity>
        <View style={styles.shadowView} />
        <View style={styles.availableToInvestConatiner}>
          <View>
            <Text style={styles.availableToInvestHeading}>
              {strings.AVAILABLE_TO_INVEST}
            </Text>
            <Text style={commonStyles.heavy16Black}>${walletBalance}</Text>
          </View>
          <Image source={imagePath.move} style={styles.move} />
        </View>
      </>
    );
  };

  return (
    <WrapperContainer>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        data={data}
        // renderItem={accountViewRender}
        renderItem={({ item, index }) => (
          <IconTitleDesFlatlist
            index={index}
            title={item?.title}
            des={item?.des}
            image={item?.image}
            rightIcon={item?.showMoveIcon}
            onpress={item?.onpress}
            flatlistContainer={{ paddingHorizontal: moderateScale(30) }}
            leftIconStyle={{
              height: moderateScale(width / 14),
              width: moderateScale(width / 14),
            }}
          />
        )}
        ListFooterComponent={
          <View style={{ paddingTop: moderateScale(135) }} />
        }
        showsVerticalScrollIndicator={false}
      />
      <Modal isVisible={isModalVisible}>
        <View style={{ ...commonStyles.modalcontainer }}>
          <Text style={{ ...commonStyles.heavy18Black }}>{strings.LOGOUT}</Text>

          <View style={{ ...commonStyles.descstyle }}>
            <Text style={{ ...commonStyles.medium14Black }}>
              {strings.ARE_YOUR_SURE_YOU_WANT_TO_LOGOUT}
            </Text>
          </View>

          <View style={{ ...commonStyles.btncontainer }}>
            <View style={{ flex: 0.46 }}>
              <ButtonComponent
                onPress={() => toggleModal()}
                btnStyle={{ ...commonStyles.cancelbtnstyle }}
                buttonTxt={{ ...commonStyles.cancelbtntxt }}
                buttonText={strings.CANCEL}
              />
            </View>
            <View style={{ flex: 0.46 }}>
              <ButtonComponent
                onPress={() => logout()}
                btnStyle={{ ...commonStyles.continuestyle }}
                buttonTxt={{ ...commonStyles.continuebtntxt }}
                buttonText={strings.LOGOUT}
              />
            </View>
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};
//make this component available to the app
export default Account;
