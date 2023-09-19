//import liraries
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import actions from "../../../redux/actions";
import ButtonComponent from "../../../components/ButtonComponent";
import { styles } from "./style";
import {
  moderateScale,
  moderateScaleVertical, 
  textScale,
  width,
} from "../../../styles/responsiveSize";
import imagePath from "../../../constants/imagePath";
import RenderBlockview from "../../../components/StaticList";
import { useSelector } from "react-redux";
import { cryptoMadeEasy } from "../../../constants/flatlistData";
import CommonTextInput from "../../../components/CommonTextInput";
import commonStyles from "../../../styles/commonStyles";
import colors from "../../../styles/colors";
import navigationStrings from "../../../navigation/navigationStrings";
// import HomeLoader from "../../../components/HomeLoader";

import {
  RectangularShimmerComponent,
  RowBoxShimmerComponent,
} from "../../../components/ShimmerComponent";
const Home = () => {
  const [gainers, setGainers] = useState();
  const [newlyLaunched, setNewlyLaunched] = useState();
  const [looser, setLooser] = useState();
  const [banner, setBanner] = useState();
  const [load, setLoad] = useState(true);

  const { guestLogin, userLoginStatus } = useSelector((state) => state.auth);
  const user_id = userLoginStatus?.user_id;

  useEffect(() => {
    checkHomedata();
  }, []);

  //.....flat list api //
  const checkHomedata = async () => {
    let isGuest = {};
    let currency = `currency=INR&user_id=${user_id}`;
    await actions.homeData(currency, isGuest).then((res) => {
      console.log(res, "res+++++++++");
      if (res) {
        setLoad(false);
      }
      setBanner(res?.banners[0]?.banner_url);
      setNewlyLaunched(res?.newly_launched);
      setGainers(res?.top_gainers);
      setLooser(res?.top_loosers);
    });
  };

  const renderCryptoMadeEasy = useCallback(({ item }) => {
    return (
      <ImageBackground
        source={item?.backgroundImg}
        style={styles.cryptoMadeEasyBg}
        resizeMode="cover"
      >
        <Text style={styles.cryptoMadeEasyTitle}>{item?.title}</Text>
        <Text style={styles.cryptoMadeEasyDescription}>
          {item?.Description}
        </Text>
        <Text style={styles.cryptoMadeEasyDescription}>{item?.Date}</Text>
      </ImageBackground>
    );
  }, []);

  const commonFlatHeader = (title, desc) => {
    return (
      <View style={{ marginLeft: moderateScale(20) }}>
        <Text style={styles.NewlyLaunchedHeading}>{title}</Text>
        <Text style={styles.NewlyLaunchedDes}>{desc}</Text>
      </View>
    );
  };

  return (
    <WrapperContainer>
      <ScrollView>
        {guestLogin ? (
          <View style={styles.blueBgForNonLogin}>
            <Text style={{ ...commonStyles.heavy15Black, color: colors.white }}>
              {strings.HELLO}
            </Text>
            <Text style={[styles.Ready_to_invest]}>
              {strings.WELCOME_TO_BLOCKBREW}
            </Text>
            <Text
              style={{
                ...styles.startByAddingBank,
                paddingBottom: moderateScale(15),
              }}
            >
              {strings.READY_TO_START_INVESTING}
            </Text>
            <ButtonComponent
              buttonTxt={{ ...commonStyles.heavy15Black, color: colors.white }}
              buttonText={strings.FREE_SIGNUP}
              btnStyle={{ marginVertical: moderateScaleVertical(25) }}
              onPress={() => actions.guestLoginAction(false)}
            />
            <Text
              style={[styles.WhyAddBank, { textDecorationLine: "underline" }]}
            >
              {strings.BENEFITS_OF_SIGNING}
            </Text>
          </View>
        ) : (
          <View style={styles.blueBgForNonLogin}>
            <Text style={{ ...commonStyles.heavy15Black, color: colors.white }}>
              {strings.HI} {userLoginStatus?.name}
            </Text>
            <Text style={styles.Ready_to_invest}>
              {strings.READY_TO_INVEST}
            </Text>
            <Text style={{ ...styles.startByAddingBank }}>
              {strings.START_BY_ADDING_BANK}
            </Text>
            <ButtonComponent
              buttonTxt={{ ...commonStyles.heavy15Black, color: colors.white }}
              buttonText={strings.ADD_BANK_ACCOUNT}
              btnStyle={{
                marginVertical: moderateScaleVertical(23),
              }}
            />

            <Text style={styles.WhyAddBank}>{strings.WHY_ADD_BANK}</Text>
          </View>
        )}

        {/* -----------add funds, buy crypto, refer and earn section---------- */}
        <View style={styles.addbuyRefer}>
          <View style={{ flexShrink: 0.2 }}>
            <View style={styles.rewardsSectionBlueBg}>
              <Image
                source={imagePath.wallet}
                style={styles.rewardsSectionImg}
              />
            </View>
            <Text style={styles.addbuyReferText}>{strings.ADD_FUNDS}</Text>
            <Text style={[styles.addbuyReferText, { opacity: 0.6 }]}>$546</Text>
          </View>
          <View style={{ flexShrink: 0.2 }}>
            <View style={styles.rewardsSectionBlueBg}>
              <Image
                source={imagePath.elictricity_light}
                style={[
                  styles.rewardsSectionImg,
                  { height: moderateScale(34) },
                ]}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.addbuyReferText}>
              {strings.BUY_CRYPTO_INSTANTLY}
            </Text>
          </View>
          <View style={{ flexShrink: 0.2 }}>
            <View style={styles.rewardsSectionBlueBg}>
              <Image
                source={imagePath.gift}
                style={[
                  styles.rewardsSectionImg,
                  { height: moderateScale(32) },
                ]}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.addbuyReferText}>{strings.REFER_EARN}</Text>
          </View>
        </View>

        {/* -------------rewards static blockbrew -------------*/}
        <View style={{ marginBottom: moderateScale(5), alignItems: "center" }}>
          {load ? (
            <RectangularShimmerComponent />
          ) : (
            <Image
              source={{ uri: banner }}
              style={{
                height: moderateScale(125),
                width: width - moderateScale(40),
              }}
              resizeMode="stretch"
            />
          )}
        </View>

        {/* ------------Newly launched on blockbrew------------- */}
        <View style={styles.NewlyLaunched}>
          {commonFlatHeader(strings.NEWLY_LAUNCHED, strings.EXPLORE_MORE)}
          {load ? (
            <View style={{ marginVertical: moderateScaleVertical(10) }}>
              <RowBoxShimmerComponent />
            </View>
          ) : (
            <FlatList
              data={newlyLaunched}
              key={newlyLaunched}
              renderItem={(item) => {
                const symbol = item?.item?.symbol;
                return (
                  <RenderBlockview
                    percentage={item?.item?.price_change_percentage_24h}
                    shortForm={symbol.toUpperCase()}
                    fullForm={item?.item?.name}
                    price={item?.item?.current_price}
                    logo={item?.item?.image}
                  />
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => (
                <View style={{ marginLeft: moderateScale(20) }} />
              )}
            />
          )}
        </View>

        {/* ------------Top gainers in last 24 hours------------ */}
        <View style={styles.NewlyLaunched}>
          {commonFlatHeader(strings.TOP_GAINERS, strings.EXPLORE_MORE)}
          {load ? (
            <View style={{ marginVertical: moderateScaleVertical(10) }}>
              <RowBoxShimmerComponent />
            </View>
          ) : (
            <FlatList
              data={gainers}
              key={gainers}
              renderItem={(item) => {
                const symbol = item?.item?.symbol;

                return (
                  <RenderBlockview
                    percentage={item?.item?.price_change_percentage_24h}
                    shortForm={symbol.toUpperCase()}
                    fullForm={item?.item?.name}
                    price={item?.item?.current_price}
                    logo={item?.item?.image}
                  />
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => (
                <View style={{ marginLeft: moderateScale(20) }} />
              )}
            />
          )}
        </View>

        {/* ------------Top losers in last 24 hours------------ */}

        <View style={styles.NewlyLaunched}>
          {commonFlatHeader(strings.TOP_LOSERS, strings.EXPLORE_MORE)}
          {load ? (
            <View style={{ marginVertical: moderateScaleVertical(10) }}>
              <RowBoxShimmerComponent />
            </View>
          ) : (
            <FlatList
              data={looser}
              key={looser}
              renderItem={(item) => {
                const symbol = item?.item?.symbol;
                return (
                  <RenderBlockview
                    percentage={item?.item?.price_change_percentage_24h}
                    shortForm={symbol.toUpperCase()}
                    fullForm={item?.item?.name}
                    price={item?.item?.current_price}
                    logo={item?.item?.image}
                  />
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => (
                <View style={{ marginLeft: moderateScale(20) }} />
              )}
            />
          )}
        </View>

        {/* ------------Crypto made easy Explore more to buy------------ */}
        <View style={styles.NewlyLaunched}>
          {commonFlatHeader(strings.CRYPTO_MADE_EASY, strings.COINS_GAINED)}
          <FlatList
            data={cryptoMadeEasy}
            renderItem={renderCryptoMadeEasy}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View style={{ marginLeft: moderateScale(20) }} />
            )}
          />
        </View>

        {/* -------------You have Code------------- */}
        {userLoginStatus ? (
          <View style={styles.youHaveCodeSection}>
            <View style={styles.youHaveCodeSectionTitleConatiner}>
              <Text style={styles.youHaveCodeTitle}>
                {strings.YOU_HAVE_CODE}
              </Text>
              <Image
                source={imagePath.coupon}
                style={styles.couponIcon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.codeUsedPerAccount}>
              {strings.CODE_USED_PER_ACCOUNT}
            </Text>
            <View style={styles.codeRow}>
              <View style={{ flex: 0.67 }}>
                <CommonTextInput
                  textInput={styles.textInput}
                  placeholder={strings.ENTER_CODES}
                />
              </View>
              <View style={{ flex: 0.33 }}>
                <ButtonComponent
                  buttonText={strings.APPLY}
                  btnStyle={styles.btnStyle}
                  buttonTxt={styles.buttonTxt}
                />
              </View>
            </View>
          </View>

          // <HorizontalBar
          //   horizontalBarStyle={{
          //     marginHorizontal: 0,
          //     marginVertical: moderateScale(10),
          //   }}
          // />
          // <View
          //   style={{
          //     ...commonStyles.rowAlignCen,
          //     marginVertical: moderateScale(16),
          //   }}
          // >
          //   <Text style={{ ...commonStyles.black16Black, letterSpacing: 0.5 }}>
          //     ${actionItem?.current_price}
          //   </Text>
          //   <Image
          //     source={
          //       pricePerSign() == "-"
          //         ? imagePath.redInvertedTrainagle
          //         : imagePath.greenTrainagle
          //     }
          //     style={styles.actionTri}
          //     resizeMode="stretch"
          //   />
          //   <Text
          //     style={{
          //       ...commonStyles.heavy16Black,
          //       color: pricePerSign() == "-" ? colors.red : colors.green,
          //       letterSpacing: 1,
          //     }}
          //   >
          //     {actionItem?.price_change_percentage_24h}%
          //   </Text>
          // </View>

          // <ButtonComponent
          //   onPress={() => {
          //     // SheetManager.hide("coinAction");
          //     navigation.navigate(navigationStrings.BUY_SCREEN)
          //   }}
          //   buttonTxt={{
          //     ...commonStyles.heavy16Black,
          //     color: colors.white,
          //     textTransform: "uppercase",
          //   }}
          //   buttonText={strings.BUY}
          //   btnStyle={{ backgroundColor: colors.greenBtn }}
          // />
          // <TouchableOpacity
          //   style={{ marginVertical: moderateScale(14) }}
          //   onPress={() => {

          //     SheetManager.hide("coinAction");
          //     navigation.navigate(navigationStrings.PRICE_CHART_DETAILS, {
          //       data: actionItem,
          //     });
          //   }}
          // >
          //   <Text
          //     style={{
          //       ...commonStyles.heavy18Black,
          //       color: colors.bordersolid,
          //     }}
          //   >
          //     {strings.VIEW_PRICE_CHART_DETAILS}
          //   </Text>
          // </TouchableOpacity>
        // </View>
      
        ) : (
          <View style={{ height: 50 }} />
        )}
      </ScrollView>
    </WrapperContainer>
  );
};

//make this component available to the app

export default Home;
