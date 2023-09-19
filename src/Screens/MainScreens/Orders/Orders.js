//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import HorizontalBar from "../../../components/HorizontalBar";
import CommonTextInput from "../../../components/CommonTextInput";
import WrapperContainer from "../../../components/WrapperContainer";
import { ordersFlatlistdata } from "../../../constants/flatlistData";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import colors from "../../../styles/colors";
import { moderateScale } from "../../../styles/responsiveSize";
import { styles } from "./style";
import commonStyles from "../../../styles/commonStyles";
import actions from "../../../redux/actions";
// create a component
const Orders = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");


  const orderList = async () => {
    let orderApi = ({
      coin_symbol: "usd",
      live_rate: "43343",
      target_rate: "343",
      amount: "das",
      qty: "1",
      order_type: "dada",
      used_coupon_code: ""
    })
    console.log(orderApi, "orderapi data");
    await actions.ordersList(orderApi).then((res) => {
      console.log(res, "res iss");
    })
  }
  const orderRenderView = useCallback(({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.flatListConatiner}
          onPress={() => orderList()}
        // onPress={() => {

        //   // navigation.navigate(navigationStrings.ORDERS_DETAILS, {
        //   //   data: item,
        //   // });
        // }}
        >
          <Image
            source={item?.image}
            style={styles.coinLogo}
            resizeMode="contain"
          />
          <View>
            <View style={styles.horiZontalRow}>
              <Text
                style={{
                  ...commonStyles.heavy14Black,
                  color: item?.buyOrSell == "BUY" ? colors.green : colors.red,
                }}
              >
                {item?.buyOrSell}
              </Text>
              <Text style={[styles.date]}>Qty: {item?.Qty}</Text>
            </View>
            <View
              style={[styles.horiZontalRow, { marginTop: moderateScale(0) }]}
            >
              <View style={commonStyles.rowCenterCenter}>
                <Text style={styles.fullForm}>{item?.fullForm}</Text>
                <Text style={styles.shortForm}>{item?.shortForm}</Text>
              </View>
              <Text style={[styles.date, { alignSelf: "center" }]}>
                {strings.PRICE}: ${item?.price}
              </Text>
            </View>
            <View style={[styles.horiZontalRow]}>
              <Text style={styles.date}>{item?.date}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.date]}>Total: </Text>
                <Text style={{ color: colors.black }}>${item?.total}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <HorizontalBar />
      </>
    );
  }, []);
  return (
    <WrapperContainer>
      <View style={styles.priceContainer}>
        <Text style={styles.priceHeading}>{strings.ORDERS}</Text>
        <View style={{ paddingHorizontal: moderateScale(20) }}>
          <CommonTextInput
            showLeftIcon={imagePath.search}
            placeholder={strings.SEARCH}
            placeholderTextColor={colors.lightGreyPlaceholder}
            textInput={styles.textInputBg}
          // value={search}
          // onChangeText={(value) => setSearch(value)}
          />
        </View>
      </View>
      <View style={styles.boxEndShadow} />
      <FlatList data={ordersFlatlistdata} renderItem={orderRenderView} />
    </WrapperContainer>
  );
};

//make this component available to the app
export default Orders;
