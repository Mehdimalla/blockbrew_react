//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import GoBackHeader from "../../../components/GoBackHeader";
import {
  moderateScale,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import fontFamily from "../../../styles/fontFamily";
import colors from "../../../styles/colors";
import HorizontalBar from "../../../components/HorizontalBar";

// create a component
const OrderDetails = (route) => {
  const elem = route?.route?.params?.data;
  console.log(elem, "route>>>>>route");
  const renderOrderDeatilsRow = (heading, image, data, index) => {
    return (
      <>
        <View style={{ paddingHorizontal: moderateScale(20) }}>
          <View style={styles.OrderDetailsBodyContainer}>
            <Text style={styles.title}>{heading}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {image ? <Image source={image} style={styles.coinLogo} /> : null}
              <Text style={{...styles.title, opacity: 1} }>{data}</Text>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.containerStyle}>
        <GoBackHeader headerText={strings.ORDER_DETAILS}/>
        <View style={{ paddingVertical: moderateScale(20) }}>
          {renderOrderDeatilsRow(strings.COIN, elem?.image, elem?.fullForm)}
          <HorizontalBar />

          {renderOrderDeatilsRow(strings.ORDER, null, elem?.buyOrSell)}
          <HorizontalBar />

          {renderOrderDeatilsRow(strings.STATUS, null, "Completed")}
          <HorizontalBar />

          {renderOrderDeatilsRow(
            strings.ORDER_TYPE,
            null,
            `${elem?.buyOrSell} Instant`
          )}
          <HorizontalBar />

          {renderOrderDeatilsRow(strings.PRICE, null, elem?.price)}
          <HorizontalBar />

          {renderOrderDeatilsRow(strings.QUANTITY, null, elem?.Qty)}
          <HorizontalBar />

          {renderOrderDeatilsRow(strings.CREATED_AT, null, elem?.date)}
          <HorizontalBar />

          {renderOrderDeatilsRow(strings.TOTAL_COST, null, `$ ${elem?.total}`)}
        </View>
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: getStatusBarHeight(true) + moderateScale(15),
  },
  OrderDetailsBodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(16),
  },
  title: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(14.5),
    opacity: 0.49,
    color: colors.black,
  },
  coinLogo: {
    height: moderateScale(width / 12),
    width: moderateScale(width / 12),
    marginRight: moderateScale(7),
  },
});

//make this component available to the app
export default OrderDetails;
