//import liraries
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import GoBackHeader from "../../../components/GoBackHeader";
import HorizontalBar from "../../../components/HorizontalBar";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";

import { moderateScale } from "../../../styles/responsiveSize";
import Modal from "react-native-modal";
import { styles } from "./style";
import { useSelector } from "react-redux";

// create a component
const Security = ({ navigation, route }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const { userLoginStatus } = useSelector((state) => state?.auth);
  const isPinCreated = !!userLoginStatus?.isPinCreated;
  console.log(isPinCreated);

  const data = [
    {
      id: 1,
      title: strings.CHANGE_PASSWORD,
      des: strings.CHANGE_YOUR_LOGIN_PASSWORD,
      onpress: () => navigation.navigate(navigationStrings.CHANGE_PASSWORD),
    },

    {
      id: 2,
      title: strings.CREATE_LOGIN_PIN,
      des: strings.LOGIN_WITH_6DIGIT_PIN,
      onpress: () => handleModal(),
    },

    {
      id: 3,
      title: strings.GOOGLE_AUTHENTICATOR,
      des: strings.GOOGLE_VER_2STEP,
      onpress: () =>
        navigation.navigate(navigationStrings.GOOGLE_AUTHENTICATOR),
    },
    {
      id: 4,
      title: strings.CRYPTO_WITHDRAWAL_PASS,
      des: strings.ADD_SECURITY_FOR_SAFE_CRYPTO_WITHDRAWAL,
    },
    {
      id: 5,
      title: strings.VERIFIED_DEVICES,
      des: strings.MANAGE_ACCESSED_DEVICES,
    },
  ];

  const setPinFun = () => {
    if (!isModalVisible) {
      handleModal();
    } else {
      setIsModalVisible(false);
      navigation.navigate(navigationStrings.SET_PIN);
      // handleModal();
    }
    // else {
    //   setIsModalVisible(false);
    //   navigation.navigate(navigationStrings.SET_PIN);
    // }
  };
  const disableAccount = () => {
    alert("Disable account");
  };
  return (
    <WrapperContainer>
      <View
        style={{
          flex: 1,
          position: "relative",
          paddingTop: moderateScale(getStatusBarHeight(true) + 20),
        }}
      >
        <View>
          <GoBackHeader headerText={strings.SECURITY} blankSpace={true} />
        </View>
        <View style={{ paddingTop: moderateScale(15) }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <IconTitleDesFlatlist
                index={index}
                title={item?.title}
                des={item?.des}
                onpress={item?.onpress}
              />
            )}
          />
          <HorizontalBar />
        </View>
        <ButtonComponent
          buttonText={strings.DISABLE_YOUR_ACCOUNT}
          buttonTxt={styles.btnTxtStyle}
          btnStyle={styles.btnStyle}
          onPress={disableAccount}
        />
      </View>
      {/* --------setpin modal-------- */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalcontainer}>
          <Text style={styles.modalheadingText}>{strings.CREATE_LOGIN_PIN}</Text>
          <View style={styles.descstyle}>
            <Text style={styles.desctxt}>
              {strings.SECURITY_REASONS_WITHDRAWLS}
            </Text>
          </View>

          <View style={styles.btncontainer}>
            <ButtonComponent
              onPress={() => handleModal()}
              btnStyle={styles.cancelbtnstyle}
              buttonTxt={styles.cancelbtntxt}
              buttonText={strings.CANCEL}
            />
            <ButtonComponent
              onPress={setPinFun}
              btnStyle={styles.continuestyle}
              buttonTxt={styles.continuebtntxt}
              buttonText={strings.CONTINUE}
            />
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};
export default Security;
