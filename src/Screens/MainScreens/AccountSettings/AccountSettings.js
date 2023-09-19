//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GoBackHeader from "../../../components/GoBackHeader";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import { moderateScale } from "../../../styles/responsiveSize";

// create a component
const AccountSettings = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: strings.KYC_VERIFICATION,
      des: strings.KYC_SUCCESSFULLY_VERIFIED,
      onpress: () => navigation.navigate(navigationStrings.PAN_DETAILS),
    },
    {
      id: 2,
      title: strings.ADD_BANK_ACCOUNT,
      des: strings.ADD_CHANGE_BANK,
      onpress: () => navigation.navigate(navigationStrings.ADD_BANK_ACCOUNT),
    },
    {
      id: 3,
      title: strings.NOTIFICATIONS,
      des: strings.NOTIFICATIONS_ARE_ENABLED,
      onpress: () => navigation.navigate(navigationStrings.NOTIFICATIONS),
    },
  ];
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader headerText={strings.ACCOUNT_SETTING} blankSpace={true} />
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
        </View>
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default AccountSettings;
