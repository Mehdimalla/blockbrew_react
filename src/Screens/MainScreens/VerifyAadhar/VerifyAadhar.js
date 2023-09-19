//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import { styles } from "./styles";
// create a component
const VerifyAadhar = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: strings.ENTER_AADHAR,
      des: strings.AADHAR_NECESSARY,
    },
  ];
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader borderShadowLine={false} />
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
            placeholder={strings.AADHAR_NUMBER}
            textInput={styles.textInputstyle}
          />

          <ButtonComponent
          onPress={()=>navigation.navigate(navigationStrings.CAPTURE_SELFIE)}
            btnStyle={styles.continuebtnstyle}
            buttonText={strings.CONTINUE}
            buttonTxt={styles.continuebtn}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default VerifyAadhar;
