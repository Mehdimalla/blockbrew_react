//import liraries
import React, { useEffect, useCallback, useState, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { moderateScale } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";
import strings from "../../../constants/lang";
import imagePath from "../../../constants/imagePath";
import CommonTextInput from "../../../components/CommonTextInput";
import WrapperContainer from "../../../components/WrapperContainer";
import ShadowBorder from "../../../components/ShadowBorder";
import commonStyles from "../../../styles/commonStyles";
import actions from "../../../redux/actions";
import navigationStrings from "../../../navigation/navigationStrings";
import ButtonComponent from "../../../components/ButtonComponent";
import { styles } from "./style";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import HorizontalBar from "../../../components/HorizontalBar";
import { ListShimmerComponent } from "../../../components/ShimmerComponent";

// create a component
const Prices = ({ route, navigation }) => {
  console.log(route.params, "params from price alert");

  const [posts, setPosts] = useState(true);
  const [search, setSearch] = useState("");

  const [load, setLoad] = useState(true);

  //   allcoins api data fileds
  const [coindata, setCoinData] = useState([]);
  const [order, setOrder] = useState("id_asc");
  const [priceOrder, setPriceOrder] = useState("");
  const [lastdayOrder, setlastdayOrder] = useState("");
  const [idNameOrder, setidNameOrder] = useState("id_asc");

  const [actionItem, setActionItem] = useState(null);

  useEffect(() => {
    fetchCoinApiData();
  }, [order, search]);

  const pricePerSign = () => {
    //console.log(actionItem?.price_change_percentage_24h)
    if (actionItem?.price_change_percentage_24h != null) {
      let stringPr = actionItem?.price_change_percentage_24h?.toString();
      let prIndx = stringPr[0];
      return prIndx;
    } else {
      null;
    }
  };

  const fetchCoinApiData = async () => {
    let isGuest = {};
    let val = `order=${order}&currency=USD&page=1&per_page=100`;
    if (!!search) {
      val = val + `&search=${search}`;
    }
    try {
      await actions.GetCoinsData(val, isGuest).then((res) => {
        console.log("api response>>>>>>>>>>>>", res);
        setCoinData(res?.data);
        setLoad(false);
      });
    } catch (error) {
      console.log("fetch Coins Api error>>>>>", error);
    }
  };

  const showCoinsActionSheet = (item) => {
    console.log("routes param", route.params);

    if (route?.params?.data == "createPriceAlert") {
      navigation.navigate(navigationStrings.PRICE_ALERTS, { data: item });
    } else {
      setActionItem(item);
      setTimeout(() => {
        actionSheetRef.current.show("coinAction");
      }, 200);
    }
  };

  const textWithArow = useCallback(
    (title, stateName, stateValAsc, stateValDesc, fnCall, space) => {
      const img = ascDescImg(stateName, stateValAsc, stateValDesc);
      return (
        <TouchableOpacity style={commonStyles.rowAlignCen} onPress={fnCall}>
          <Text
            style={{
              ...commonStyles.heavy14Black,
              ...styles.coinName,
              color:
                stateName == stateValAsc || stateName == stateValAsc
                  ? colors.tabIconColor
                  : colors.black,
            }}
          >
            {title}
            {space}
          </Text>
          <Image
            source={img}
            style={{
              ...styles.arrowStyle,
              display: img == null ? "none" : null,
            }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      );
    },
    [order]
  );
  const ascDescImg = useCallback((stateName, stateValAsc, stateValDesc) => {
    if (stateName == stateValAsc) {
      return imagePath.arrowUp;
    } else if (stateName == stateValDesc) {
      return imagePath.arrowDown;
    } else {
      return null;
    }
  });
  const changePriceOrder = () => {
    if (priceOrder == "price_asc") {
      setPriceOrder("price_desc");
      setOrder("price_desc");
      setidNameOrder(" ");
      setlastdayOrder(" ");
    } else {
      setPriceOrder("price_asc");
      setOrder("price_asc");
      setidNameOrder(" ");
      setlastdayOrder(" ");
    }
  };
  const changeIdNameOrder = () => {
    if (idNameOrder == "id_asc") {
      setidNameOrder("id_desc");
      setOrder("id_desc");
      setPriceOrder(" ");
      setlastdayOrder(" ");
    } else {
      setidNameOrder("id_asc");
      setOrder("id_asc");
      setPriceOrder(" ");
      setlastdayOrder(" ");
    }
  };
  const changeLastDayOrder = () => {
    if (lastdayOrder == "24_change_asc") {
      setlastdayOrder("24_change_desc");
      setOrder("24_change_desc");
      setPriceOrder(" ");
      setidNameOrder(" ");
    } else {
      setlastdayOrder("24_change_asc");
      setOrder("24_change_asc");
      setPriceOrder(" ");
      setidNameOrder(" ");
    }
  };
  //----------------------coins Heading---------------
  const allCoinHeader = () => {
    return (
      <View style={styles.headingRow}>
        <View style={{ flex: 0.5 }}>
          {textWithArow(
            strings.COIN_NAME,
            idNameOrder,
            "id_asc",
            "id_desc",
            changeIdNameOrder
          )}
        </View>

        <View
          style={{
            ...commonStyles.rowSpaceBetweenCenter,
            flex: 0.5,
          }}
        >
          {textWithArow(
            strings.PRICE,
            priceOrder,
            "price_asc",
            "price_desc",
            changePriceOrder,
            " "
          )}
          {textWithArow(
            `${strings.HOUR_CHANGE} `,
            lastdayOrder,
            "24_change_asc",
            "24_change_desc",
            changeLastDayOrder
          )}
        </View>
      </View>
    );
  };
  // -------------------Coins Data from API--------------------
  const allCoinRender = useCallback(
    ({ item }) => {
      //   console.log(item, "item>>>>>>>>>>>");
      let prPercentSign = `${item}`;
      // item
      //   ? item?.price_change_percentage_24h.toString()
      //   : null;

      return (
        <>
          <View style={styles.horiZontalBar} />
          <TouchableOpacity
            style={styles.flatlistContainer}
            onPress={() => showCoinsActionSheet(item)}
          >
            <View
              style={{
                ...commonStyles.rowAlignCen,
                flex: 0.4,
                //  backgroundColor:'red'
              }}
            >
              <Image
                source={{ uri: item?.image }}
                style={styles.coinLogo}
                resizeMode="contain"
              />
              <View style={{ flex: 1 }}>
                <Text style={{ ...commonStyles.black15Black }}>
                  {item?.name}
                </Text>
                <Text
                  style={{ ...commonStyles.heavy14Black, ...styles.shortForm }}
                >
                  {item?.symbol}
                </Text>
              </View>
            </View>
            <View
              style={{ ...commonStyles.rowAlignCen, ...styles.priceHrChange }}
            >
              <Text
                style={{
                  ...commonStyles.black14Black,
                  ...styles.price,
                }}
              >
                ${Number.parseFloat(item?.current_price).toFixed(3)}
                {/* ${currencyWithCommasAndTofixed(item?.current_price, 3)} */}
              </Text>
              <ButtonComponent
                btnStyle={{
                  backgroundColor:
                    prPercentSign[0] == "-"
                      ? colors.lightRedRgba
                      : colors.lightGreenRgba,
                  paddingVertical: moderateScale(7),
                  paddingHorizontal: moderateScale(10),
                  borderRadius: moderateScale(6),
                }}
                buttonTxt={{
                  ...commonStyles.heavy13Black,
                  color: prPercentSign[0] == "-" ? colors.red : colors.green,
                  letterSpacing: 1,
                }}
                buttonText={`${prPercentSign[0] == "-" ? "" : "+"}${Number(
                  item?.price_change_percentage_24h
                ).toFixed(2)}%`}
              />
            </View>
          </TouchableOpacity>
        </>
      );
    },
    [coindata, route.params]
  );

  const AllCoins = useCallback(() => {
    return (
      <View style={{ backgroundColor: colors.white }}>
        <FlatList
          data={coindata}
          ListHeaderComponent={allCoinHeader}
          renderItem={allCoinRender}
          ListFooterComponent={
            <View style={{ marginBottom: moderateScale(50) }} />
          }
        />
      </View>
    );
  }, [posts, coindata, search, route.params]);

  const MyWatchlist = useCallback(() => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "blue",
        }}
      >
        <Text>hello</Text>
      </View>
    );
  }, []);

  const actionSheetRef = useRef(null);

  return (

    <WrapperContainer>
      <View style={styles.priceContainer}>
        {/* -----Prices Heading------- */}
        <Text style={styles.priceHeading}>{strings.PRICES}</Text>

        {/* -----Search Text Input------- */}
        <View
          style={{
            paddingHorizontal: moderateScale(20),
          }}
        >
          <CommonTextInput
            showLeftIcon={imagePath.search}
            placeholder={strings.SEARCH}
            placeholderTextColor={colors.lightGreyPlaceholder}
            textInput={styles.textInputBg}
            value={search}
            onChangeText={(value) => setSearch(value)}
          />
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.BUY_SCREEN)}>
          <Text>check</Text>
        </TouchableOpacity> */}

        {/* -----Custom Top Tab------- */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setPosts(false)}
            style={{
              ...styles.tabItemBox,
              borderBottomWidth: posts ? 0 : moderateScale(4),
            }}
          >
            <Text
              style={{
                ...commonStyles.heavy16Black,
                color: posts ? colors.black : colors.tabIconColor,
              }}
            >
              {strings.MY_WATCHLIST}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPosts(true)}
            style={{
              ...styles.tabItemBox,
              borderBottomWidth: posts ? moderateScale(4) : 0,
            }}
          >
            <Text
              style={{
                ...commonStyles.heavy16Black,
                color: posts ? colors.tabIconColor : colors.black,
              }}
            >
              {strings.ALL_COINS}
            </Text>
          </TouchableOpacity>
        </View>
        <ShadowBorder />
      </View>
      {load ? (
        <>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <ListShimmerComponent />
            <ListShimmerComponent />
            <ListShimmerComponent />
            <ListShimmerComponent />
            <ListShimmerComponent />
            <ListShimmerComponent />
            <ListShimmerComponent />
          </View>
        </>
      ) : (
        <View>{posts ? AllCoins() : MyWatchlist()}</View>
      )}

      {/* -------------------ActionSheet on clicked on AllCoins Page----------- */}
      <ActionSheet
        ref={actionSheetRef}
        onClose={() => setActionItem(null)}
        style={{ borderTopLeftRadius: 0 }}
        id="coinAction"
      >
        <View style={styles.actionsheetContainer}>
          <View style={commonStyles.rowSpaceBetween}>
            <View style={{ ...commonStyles.rowAlignCen }}>
              <Image
                source={{ uri: actionItem?.image }}
                style={styles.actionCoinLogo}
                resizeMode="contain"
              />
              <Text style={commonStyles.heavy16Black}>{actionItem?.name}</Text>
            </View>
            <View style={{ ...commonStyles.rowAlignCen }}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={imagePath.plusBlack}
                  resizeMode="contain"
                  style={styles.eyeWatchimg}
                />
                <Text
                  style={{
                    ...commonStyles.regular10Black,
                    ...styles.eyeWatchtxt,
                  }}
                >
                  {strings.PRICE_ALERT}
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={imagePath.showeye}
                  resizeMode="contain"
                  style={styles.eyeWatchimg}
                />
                <Text
                  style={{
                    ...commonStyles.regular10Black,
                    ...styles.eyeWatchtxt,
                  }}
                >
                  {strings.WATCHLIST}
                </Text>
              </View>
            </View>
          </View>
          <HorizontalBar
            horizontalBarStyle={{
              marginHorizontal: 0,
              marginVertical: moderateScale(10),
            }}
          />
          <View
            style={{
              ...commonStyles.rowAlignCen,
              marginVertical: moderateScale(16),
            }}
          >
            <Text style={{ ...commonStyles.black16Black, letterSpacing: 0.5 }}>
              ${actionItem?.current_price}
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
              {actionItem?.price_change_percentage_24h}%
            </Text>
          </View>

          <ButtonComponent
            onPress={() => {
              SheetManager.hide("coinAction");
              navigation.navigate(navigationStrings.BUY_SCREEN);
            }}
            buttonTxt={{
              ...commonStyles.heavy16Black,
              color: colors.white,
              textTransform: "uppercase",
            }}
            buttonText={strings.BUY}
            btnStyle={{ backgroundColor: colors.greenBtn }}
          />
          <TouchableOpacity
            style={{ marginVertical: moderateScale(14) }}
            onPress={() => {
              SheetManager.hide("coinAction");
              navigation.navigate(navigationStrings.PRICE_CHART_DETAILS, {
                data: actionItem,
              });
            }}
          >
            <Text
              style={{
                ...commonStyles.heavy16Black,
                color: colors.bordersolid,
              }}
            >
              {strings.VIEW_PRICE_CHART_DETAILS}
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Prices;
