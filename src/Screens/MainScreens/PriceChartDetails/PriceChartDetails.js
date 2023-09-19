//import liraries
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ButtonComponent from "../../../components/ButtonComponent";
import GoBackHeader from "../../../components/GoBackHeader";
import HorizontalBar from "../../../components/HorizontalBar";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import actions from "../../../redux/actions";

import { LineChart } from "react-native-wagmi-charts";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { currencyWithCommasAndTofixed } from "../../../utils/utils";
import { useNavigation } from "@react-navigation/native";
import navigationStrings from "../../../navigation/navigationStrings";

// create a component
const PriceChartDetails = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.data;

  let daysData = [
    { id: 1, value: "1D", key: "days=1" },
    { id: 2, value: "1W", key: "days=7" },
    { id: 3, value: "1M", key: "days=30" },
    { id: 4, value: "1Y", key: "days=365" },
    { id: 5, value: "All", key: "days=max" },
  ];
  const [days, setDays] = useState(daysData);

  const [graphData, setGraphData] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({
    timestamp: 0,
    value: 0,
  });
  const [duration, setDuration] = useState("days=1");
  const currency = "usd";

  useEffect(() => {
    fetchApiData();
  }, [duration, selectedPrice]);

  // ------fetch graph api function
  const fetchApiData = useCallback(
    async (
      val = `${data?.id}/market_chart?vs_currency=${currency}&${duration}`,
      
    ) => {
      try {
        let isGuest = {};
        console.log(val, "value>>>>>>>>>>>>Query");
        const res = await actions.GetCoinsGraph(val, isGuest);
        console.log("api res", res);
        if (res?.prices) {
          let filterdPrice = filterArray(res?.prices);
          setGraphData(filterdPrice);
        }
      } catch (error) {
        console.log("error raised in fetchApi".error);
      }
    },
    [duration, selectedPrice]
  );

  // console.log("graphDatagraphData", graphData);

  // ------filtering array and storing 0 index as timestamp key and 1 as value
  const filterArray = useCallback((data) => {
    let arry = [];
    data.forEach((val) => {
      // console.log("pricepricepriceprice", val);
      let item = {
        timestamp: val[0],
        value: val[1],
      };
      arry.push(item);
    });
    return arry;
  }, []);

  //-----------setting value of index on cursor mooving
  const onCurrentIndexChange = useCallback(
    (inx) => {
      setSelectedPrice(graphData[inx]);
      console.log("graphData[inx]", graphData[inx]);
    },
    [graphData, selectedPrice]
  );

  // ------get sign of price + or -
  const pricePerSign = () => {
    if (data?.price_change_percentage_24h != null) {
      let stringPr = data?.price_change_percentage_24h.toString();
      let prIndx = stringPr[0];
      return prIndx;
    } else {
      null;
    }
  };

  // -------reusable coin performance function
  const coinPerformace = (title, data) => {
    return (
      <View style={{ ...commonStyles.rowSpaceBetween }}>
        <Text style={{ ...commonStyles.heavy16Black, letterSpacing: 0.3 }}>
          {title}
        </Text>
        <Text style={{ ...commonStyles.regular14Black, letterSpacing: 0.8 }}>
          {data}
        </Text>
      </View>
    );
  };

  return (
    <WrapperContainer>
      <View style={{ paddingTop: getStatusBarHeight(true) + moderateScale(5) }}>
        {/* --------header component with move back arrow-------- */}
        <GoBackHeader
          containerStyle={{ marginBottom: moderateScale(-5) }}
          rightImg={true}
          rightImg1={imagePath.whatsapp}
          rightText1={strings.SHARE}
          rightImg2={imagePath.plusBlackRect}
          rightText2={strings.PRICE_ALERT}
          rightImg3={imagePath.showeye}
          rightText3={strings.WATCHLIST}
        />
      </View>

      <ScrollView
        style={{
          padding: moderateScale(20),
          paddingVertical: moderateScaleVertical(10),
        }}
      >
        {/* ---------coin logo, name and shortform---------- */}
        <View style={{ ...commonStyles.rowAlignCen }}>
          <Image
            source={{ uri: data?.image }}
            style={styles.actionCoinLogo}
            resizeMode="contain"
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={commonStyles.heavy16Black}>{data?.name} </Text>
            <Text
              style={{
                ...commonStyles.heavy16Black,
                textTransform: "uppercase",
              }}
            >
              ({data?.symbol})
            </Text>
          </View>
        </View>

        {/* ---------coin Price and percentage Change---------- */}
        <View
          style={{
            ...commonStyles.rowAlignCen,
            marginVertical: moderateScale(16),
          }}
        >
          <Text style={{ ...commonStyles.black16Black, letterSpacing: 0.5 }}>
            ${data?.current_price}
          </Text>
          <Image
            source={
              pricePerSign() == "-"
                ? imagePath.redInvertedTrainagle
                : imagePath.greenTrainagle
            }
            style={styles.actionTri}
            resizeMode="stretch"
          />
          <Text
            style={{
              ...commonStyles.heavy16Black,
              color: pricePerSign() == "-" ? colors.red : colors.green,
              letterSpacing: 1,
            }}
          >
            {data?.price_change_percentage_24h}%
          </Text>
        </View>

        {/* ---------Chart of Change---------- */}
        <LineChart.Provider
          data={graphData}
          key={graphData}
          onCurrentIndexChange={onCurrentIndexChange}
        >
          <LineChart width={width - moderateScale(45)} height={200}>
            <LineChart.Path color={colors.blueText} />
            <LineChart.CursorCrosshair />
            <LineChart.Tooltip style={styles.tooltipStyle}>
              <Text
                style={{
                  color: colors.blueText,
                  ...commonStyles.black14Black,
                }}
              >
                {currencyWithCommasAndTofixed(selectedPrice?.value, 3)}
              </Text>
            </LineChart.Tooltip>
          </LineChart>
        </LineChart.Provider>

        <View
          style={{
            ...commonStyles.rowSpaceBetweenCenter,
            ...styles.graphBtnContainer,
          }}
        >
          {days.map((val, i) => {
            return (
              <TouchableOpacity
                onPress={() => setDuration(val?.key)}
                style={{
                  backgroundColor: duration == val?.key ? "white" : null,
                }}
              >
                <Text
                  style={{
                    ...commonStyles.black12Black,
                    padding: moderateScale(3),
                  }}
                >
                  {val?.value}
                </Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={{ flexDirection: "row" }}
            // onPress={() =>
            //   navigation.navigate(navigationStrings.PRICE_CANDLE_CHART, {
            //     item: data,
            //     item1 : graphData
            //   })
            // }
          >
            <Image
              source={imagePath.redCandle}
              style={styles.redCandle}
              resizeMode="contain"
            />
            <Image
              source={imagePath.greenCandle}
              style={styles.greenCandle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...commonStyles.rowAlignCen,
            ...styles.addPriceAlrtContainer,
          }}
        >
          <Image source={imagePath.plusBlack} style={styles.addIcon} />
          <View style={{ flexShrink: 0.9 }}>
            <View style={{ ...commonStyles.rowAlignCen }}>
              <Text
                style={{
                  ...commonStyles.heavy14Black,
                  color: colors.blueText,
                }}
              >
                {strings.ADD}{" "}
              </Text>
              <Text
                style={{
                  ...commonStyles.heavy12Black,
                  color: colors.blueText,
                  textTransform: "uppercase",
                }}
              >
                {data?.symbol}{" "}
              </Text>
              <Text
                style={{
                  ...commonStyles.heavy14Black,
                  color: colors.blueText,
                }}
              >
                {strings.PRICE_ALERTS}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...commonStyles.medium14Black,
                  fontSize: textScale(13),
                }}
              >
                {strings.MISSOUT_ON_PRICE_MOVEMENTS}
              </Text>
            </View>
          </View>
        </View>
        <View>
          {coinPerformace(strings.COIN_PERFORMANCE, null)}
          <View style={{ marginBottom: moderateScale(20) }} />

          {coinPerformace(strings.HIGH_24H, `$${data?.high_24h}`)}
          <HorizontalBar
            horizontalBarStyle={{ ...commonStyles.horintalBarStyle }}
          />

          {coinPerformace(strings.LOW_24H, `$${data?.low_24h}`)}
          <HorizontalBar
            horizontalBarStyle={{ ...commonStyles.horintalBarStyle }}
          />

          {coinPerformace(strings.HIGH_1Y, `$${data?.high_24h}`)}
          <HorizontalBar
            horizontalBarStyle={{ ...commonStyles.horintalBarStyle }}
          />
        </View>

        {/* ---------Chart of Change---------- */}

        {/* ---------coin logo, name and shortform---------- */}
        <View style={{ ...commonStyles.rowSpaceBetween }}>
          <View style={{ flex: 0.46 }}>
            <ButtonComponent
              buttonTxt={{
                ...commonStyles.heavy16Black,
                color: colors.white,
                textTransform: "uppercase",
              }}
              buttonText={strings.BUY}
              btnStyle={{
                backgroundColor: colors.greenBtn,
                paddingVertical: moderateScaleVertical(10),
              }}
            />
          </View>
          <View style={{ flex: 0.46 }}>
            <ButtonComponent
              buttonTxt={{
                ...commonStyles.heavy16Black,
                color: colors.white,
                textTransform: "uppercase",
              }}
              buttonText={strings.SELL}
              btnStyle={{
                backgroundColor: colors.redBtn,
                paddingVertical: moderateScaleVertical(10),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};
const styles = StyleSheet.create({
  actionCoinLogo: {
    width: moderateScale(38),
    height: moderateScale(38),
    marginRight: moderateScale(10),
  },
  actionTri: {
    height: moderateScale(14),
    width: moderateScale(21),
    marginRight: moderateScale(10),
    marginLeft: moderateScale(15),
  },
  graphBtnContainer: {
    marginBottom: moderateScaleVertical(16),
    backgroundColor: colors.lightGrey,
    paddingVertical: moderateScaleVertical(12),
    paddingHorizontal: moderateScale(20),
  },
  addIcon: {
    marginRight: moderateScale(12),
    // backgroundColor:'blue',
    // flexShrink:0.01
  },
  addPriceAlrtContainer: {
    backgroundColor: colors.lightPurple,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(15),
    borderRadius: moderateScale(6),
    marginBottom: moderateScale(15),
  },
  tooltipStyle: {
    backgroundColor: colors.greyTxt,
    borderRadius: 4,
    color: "white",
    paddingHorizontal: moderateScale(10),
  },
  redCandle: {
    alignSelf: "flex-end",
    height: moderateScale(16),
    width: moderateScale(12),
  },
  greenCandle: {
    alignSelf: "center",
    height: moderateScale(20),
    width: moderateScale(10),
  },
});

//make this component available to the app
export default PriceChartDetails;
