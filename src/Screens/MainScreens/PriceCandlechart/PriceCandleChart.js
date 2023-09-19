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

// import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { currencyWithCommasAndTofixed } from "../../../utils/utils";
import navigationStrings from "../../../navigation/navigationStrings";

// create a component
const PriceCandleChart = ({ route, navigation }) => {
  const data = route?.params?.item;
  //   console.log(data, "route>>>>>>>>>");
  const [graphData, setGraphData] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({
    timestamp: 0,
    value: 0,
  });
  const [selectedDate, setSelectedDate] = useState();
  const [duration, setDuration] = useState("days=7");
  const currency = "usd";

  //   console.log(route?.params?.data, "route on price chart screen");
  //   const data = route?.params?.data;

  useEffect(() => {
    fetchApiData();
  }, [duration]);

  // ------fetch graph api function
  const fetchApiData = useCallback(
    async (
      val = `${data?.id}/market_chart?vs_currency=${currency}&${duration}`
    ) => {
      try {
        console.log(val, "value>>>>>>>>>>>>Query");
        const res = await actions.GetCoinsGraph(val);
        // console.log("api res", res);
        if (res?.prices) {
          let filterdPrice = filterArray(res.prices);
          setGraphData(filterdPrice);
        }
      } catch (error) {
        console.log("error raised in fetchApi".error);
      }
    },
    [duration]
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
      // console.log("graphData[inx]", graphData[inx]);
    },
    [graphData]
  );

  // ------reusable graph btn i.e 1M 1W 1D
  const graphBtn = useCallback((onPress, btnText) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={{ ...commonStyles.black12Black }}>{btnText}</Text>
      </TouchableOpacity>
    );
  }, []);
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(10) }}
      >
        {/* --------header component with move back arrow-------- */}
        <GoBackHeader
          headerText={data?.symbol}
          headerTextStyle={{ textTransform: "uppercase" }}
        />
      </View>

      <ScrollView>
        <View
          style={{
            padding: moderateScale(20),
            // paddingVertical: moderateScaleVertical(10),
          }}
        >
          {/* ---------Chart of Change---------- */}
          {/* <LineChart.Provider
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
          </LineChart.Provider> */}

          {/* <CandlestickChart.Provider data={graphData}>
            <CandlestickChart>
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair />
            </CandlestickChart>
          </CandlestickChart.Provider> */}
          {/* 
          <CandlestickChart.Provider data={chartData}>
            <CandlestickChart>
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair />
            </CandlestickChart>
          </CandlestickChart.Provider> */}
          <View
            style={{
              ...commonStyles.rowSpaceBetweenCenter,
              ...styles.graphBtnContainer,
            }}
          >
            {graphBtn(() => fetchApiData(setDuration("days=1")), "1D")}
            {graphBtn(() => fetchApiData(setDuration("days=7")), "1W")}
            {graphBtn(() => fetchApiData(setDuration("days=30")), "1M")}
            {graphBtn(() => fetchApiData(setDuration("days=365")), "1Y")}
            {graphBtn(() => fetchApiData(setDuration("days=all")), "ALL")}
          </View>

          {/* ---------Buy and Sell button---------- */}
          <View style={{ ...commonStyles.rowSpaceBetween }}>
            <View style={{ flex: 0.47 }}>
              <ButtonComponent
                buttonTxt={{
                  ...commonStyles.heavy16Black,
                  color: colors.white,
                  textTransform: "uppercase",
                }}
                buttonText={strings.BUY}
                btnStyle={{
                  backgroundColor: colors.greenBtn,
                  paddingVertical: moderateScaleVertical(11),
                }}
              />
            </View>
            <View style={{ flex: 0.47 }}>
              <ButtonComponent
                buttonTxt={{
                  ...commonStyles.heavy16Black,
                  color: colors.white,
                  textTransform: "uppercase",
                }}
                buttonText={strings.SELL}
                btnStyle={{
                  backgroundColor: colors.redBtn,
                  paddingVertical: moderateScaleVertical(11),
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

// define your styles
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
export default PriceCandleChart;
