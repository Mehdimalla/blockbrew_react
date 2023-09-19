//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import { styles } from "./style";
const PanDetails = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: strings.ENTER_PAN_DETAILS,
      des: strings.PAN_NECESSARY,
    },
  ];
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader borderShadowLine={false} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.liststyle}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <IconTitleDesFlatlist
                index={index}
                title={item?.title}
                des={item?.des}
                desStyle={{ fontSize: textScale(14) }}
                titleStyle={{ fontSize: textScale(18) }}
              />
            )}
          />

          <CommonTextInput
            placeholder={strings.PANCARD_NUMBER}
            textInput={styles.textInputstyle}
          />
          <CommonTextInput
            placeholder={strings.DATE_OF_BIRTH}
            textInput={styles.textInputstyle}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={() => navigation.navigate(navigationStrings.VERIFY_AADHAR)}
          btnStyle={styles.continuebtnstyle}
          buttonText={strings.CONTINUE}
          buttonTxt={styles.continuebtn}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};
export default PanDetails;
