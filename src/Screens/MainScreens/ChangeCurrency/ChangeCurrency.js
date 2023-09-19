//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GoBackHeader from "../../../components/GoBackHeader";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import actions from "../../../redux/actions";
import { moderateScale } from "../../../styles/responsiveSize";
import { styles } from "./style";
const ChangeCurrency = () => {
  const data = [
    {
      id: 1,
      image: imagePath.dollarsign,
      title: strings.US_DOLLAR,
    },
    {
      id: 2,
      image: imagePath.dinarsign,
      title: strings.DINAR,
    },
  ];

  
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader headerText={strings.CHOOSE_CURRENCY} blankSpace={true} />
        <View style={styles.liststyle}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <IconTitleDesFlatlist
                index={index}
                image={item?.image}
                title={item?.title}
              />
            )}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default ChangeCurrency;
