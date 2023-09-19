//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import GoBackHeader from "../../../components/GoBackHeader";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import { moderateScale } from "../../../styles/responsiveSize";
import { styles } from "./style";

const HelpAndSupport = () => {
  const data = [
    {
      id: 1,
      title: strings.NEED_AN_ASSISTANCE,
      des: strings.DCX_BUDDY_HELP,
    },
  ];
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader headerText={strings.HELP_SUPPORT} blankSpace={true} />
        <View style={styles.liststyle}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <IconTitleDesFlatlist
                index={index}
                title={item?.title}
                des={item?.des}
              />
            )}
          />
        </View>

        <ButtonComponent
          buttonText={strings.CHAT_NOW}
          buttonTxt={{ color: colors.blueButton }}
          btnStyle={styles.btnStyle}
        />
      </View>
    </WrapperContainer>
  );
};

export default HelpAndSupport;
