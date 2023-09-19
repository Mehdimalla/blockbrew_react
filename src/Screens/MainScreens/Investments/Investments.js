//import liraries
import React, { useCallback } from "react";
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,FlatList } from "react-native";

import GradientComponent from "../../../components/GradientComponent";
import HorizontalBar from "../../../components/HorizontalBar";
import WrapperContainer from "../../../components/WrapperContainer";
import {
  investedCoins,
  moreCoinToInvest,
} from "../../../constants/flatlistData";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import {
  moderateScale,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import { styles } from "./style";

// create a component
const Investments = () => {
  // console.log(width);
  const investmentPageHeader = () => {
    return (
      <>
        <GradientComponent>
          <View style={styles.titleContainer}>
            <Text style={styles.priceHeading}>{strings.MY_INVESTMENTS}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  style={[styles.headerIcons, { tintColor: colors.white }]}
                  source={imagePath.search}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.headerIcons}
                  source={imagePath.whatsapp1}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.headerIcons}
                  source={imagePath.infoWhiteBg}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.currentlyInvested}>
            <View style={{ flex: 0.5 }}>
              <Text style={styles.currentlyInvestedKeys}>
                {strings.CURRENT}
              </Text>
              <Text style={styles.currentlyInvestedvalue}>$293.78</Text>
              <Text
                style={[
                  styles.currentlyInvestedKeys,
                  { marginTop: moderateScale(15) },
                ]}
              >
                {strings.RETURNS}
              </Text>
              <Text
                style={[
                  styles.currentlyInvestedvalue,
                  { color: colors.pinkishRed },
                ]}
              >
                - $10.23
              </Text>
            </View>
            <View style={{ flex: 0.5 }}>
              <Text style={styles.currentlyInvestedKeys}>
                {strings.INVESTED}
              </Text>
              <Text style={styles.currentlyInvestedvalue}>$200.78</Text>
              <Text
                style={[
                  styles.currentlyInvestedKeys,
                  { marginTop: moderateScale(15) },
                ]}
              >
                {strings.TOTAL_RETURN_PERCENTAGE}
              </Text>
              <Text
                style={[
                  styles.currentlyInvestedvalue,
                  { color: colors.pinkishRed },
                ]}
              >
                -06.23%
              </Text>
            </View>
          </View>
        </GradientComponent>
        <View style={styles.investBody}>
          <View>
            <Text style={styles.InvestedCoinsTitle}>
              {strings.INVESTED_COINS}
            </Text>
            <FlatList data={investedCoins} renderItem={investedCoinsView} />
          </View>
        </View>
        <View style={{marginHorizontal:moderateScale(20)}}>
          <Text style={styles.InvestedCoinsTitle}>
            {strings.MORE_COINS_TO_INVEST}
          </Text>
        </View>
      </>
    );
  };

  const investedCoinsView = useCallback(({ item }) => {
    return (
      <View style={{ marginBottom: moderateScale(15), }}>
        <View
          style={[
            styles.investedCoinsContainerHeading,
            styles.rowSpaceBetween,
            { alignItems: "center" },
          ]}
        >
          <View style={styles.rowCenterCenter}>
            <Image source={item?.image} style={styles.coinLogo} />
            <Text style={styles.fullForm}>{item?.fullForm}</Text>
          </View>
          <TouchableOpacity
            style={styles.rowCenter}
            // onPress={() => alert("hello")}
          >
            <Text style={styles.amountWithshortForm}>
              {item?.amountWithshortForm}
            </Text>
            <Image source={imagePath.move} style={styles.moveInvestedCoins} />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.investedCoinsContainerBody, styles.rowSpaceBetween]}
        >
          <View>
            <Text
              style={[
                styles.currentlyInvestedKeys,
                { fontSize: textScale(10) },
              ]}
            >
              {strings.RETURNS}
            </Text>
            <Text
              style={[styles.investedCoinsvalue, { color: colors.pinkishRed }]}
            >
              -${item?.returns}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.currentlyInvestedKeys,
                { fontSize: textScale(10) },
              ]}
            >
              {strings.CURRENT}
            </Text>
            <Text style={styles.investedCoinsvalue}>${item?.current}</Text>
          </View>
          <View>
            <Text
              style={[
                styles.currentlyInvestedKeys,
                { fontSize: textScale(10) },
              ]}
            >
              {strings.INVESTED}
            </Text>
            <Text style={styles.investedCoinsvalue}>${item?.invested}</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  const moreCoinsToInvestView = useCallback(({ item }) => {
    return (
      <>
        <View style={styles.flatlistContainer}>
          <View style={styles.rowCenter}>
            <Image
              source={item?.image}
              style={[styles.coinLogo, { alignSelf: "center" }]}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.fullForm1}>{item?.fullForm}</Text>
              <Text style={styles.shortForm}>{item?.shortForm}</Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.move} style={styles.move} />
          </View>
        </View>
        <HorizontalBar/>
      </>
    );
  }, []);
  return (
    <WrapperContainer>
      <FlatList
        data={moreCoinToInvest}
        renderItem={moreCoinsToInvestView}
        ListHeaderComponent={investmentPageHeader}
        ListFooterComponent={<View style={{padding:moderateScale(10)}}/>}
      />
    </WrapperContainer>
  );
};

//make this component available to the app
export default Investments;
