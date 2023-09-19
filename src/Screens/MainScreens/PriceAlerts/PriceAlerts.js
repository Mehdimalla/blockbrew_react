//import liraries
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import HorizontalBar from "../../../components/HorizontalBar";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from "../../../styles/responsiveSize";
import { showSuccessMsg, showWarningMsg } from "../../../utils/helperFunction";
import Modal from "react-native-modal";
import { ListShimmerComponent } from "../../../components/ShimmerComponent";

// create a component
const PriceAlerts = ({ navigation, route }) => {
  console.log(route?.params?.data, "data from all coins");
  const [priceAlertsList, setPriceAlertsList] = useState();
  const [coinDetails, setCoinDetails] = useState(null);
  const [alertPrice, setAlertPrice] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [load, setLoad] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const currency = "USD";
  console.log(
    coinDetails,
    priceAlertsList,
    "priceAlertspriceAlertspriceAlerts"
  );

  useEffect(() => {
    route?.params ? setCoinDetails(route?.params?.data) : null;
    listPriceAlertWithApi();
  }, []);

  // ------api for listing previously created price alerts
  const listPriceAlertWithApi = useCallback(async () => {
    let listAPiData = {
      currency: currency,
    };
    let header = { "Content-Type": "multipart/form-data" };
    await actions.ListPriceAlert(listAPiData, header).then((res) => {
      // console.log(res, "already created price alerts");
      if (res?.status === 200) {
        const result = res?.data;
        if (result.length === 0) {
          setLoad(false);
          setPriceAlertsList(0);
        } else {
          setLoad(false);
          setPriceAlertsList(result);
        }
      }
    });
  }, [priceAlertsList]);

  // ------api for creating a price alerts
  const onCreateAlert = async () => {
    if (!coinDetails) {
      showWarningMsg(strings.PLEASE_SELECT_COIN_TO_CREATE_ALERT);
      return;
    }
    if (!alertPrice) {
      showWarningMsg(strings.ENTER_VALID_AMOUNT_TO_CREATE_PRICE_ALERT);
      return;
    }
    let createAlertApiData = {
      coin_id: coinDetails?.id,
      target_price: alertPrice,
      currency: currency,
      image: coinDetails?.image,
      name: coinDetails?.name,
    };
    console.log(
      createAlertApiData,
      "createAlertApiDatacreateAlertApiDatacreateAlertApiDatacreateAlertApiData"
    );
    let header = { "Content-Type": "multipart/form-data" };
    await actions.CreatePriceAlert(createAlertApiData, header).then((res) => {
      console.log(res, "createPricealert Api Response");
      if (res?.status === 200) {
        showSuccessMsg(strings.PRICE_ALERT_CREATED_SUCCESSFULLY);
        setCoinDetails(null);
        setAlertPrice("");
      }
    });
  };

  const deletePriceAlert = async (item) => {
    console.log(item, "item  to be deleted");
    if (!isModalVisible) {
      toggleModal();
    } else {
      setModalVisible(false);
      try {
        let deleteAlertApiData = {
          id: item?.id,
        };
        console.log(
          deleteAlertApiData,
          "deleteAlertApiDatadeleteAlertApiDatadeleteAlertApiData"
        );
        let header = { "Content-Type": "multipart/form-data" };
        await actions
          .DeletePriceAlert(deleteAlertApiData, header)
          .then((res) => {
            console.log(res, "deleteAlertApiData response");
            if (res?.status === 200) {
              showSuccessMsg(strings.PRICE_ALERT_DELETED_SUCCESSFULLY);
            }
          });
      } catch (error) {
        console.log("handleLogout Error", error);
      }
    }
  };

  // ------view for showing price alerts
  const showPriceAlertView = useCallback(
    ({ item }) => {
      return (
        <>
          <View
            style={{ ...commonStyles.rowSpaceBetween, ...styles.listViewBox }}
          >
            <View style={{ ...commonStyles.rowAlignCen }}>
              <Image
                source={item ? { uri: item?.image } : null}
                style={styles.coinLogoInListAlert}
              />
              <Text style={{ ...commonStyles.medium14Black }}>
                {item ? item?.name : null}
              </Text>
            </View>
            <View style={{ ...commonStyles.rowAlignCen }}>
              <Text style={{ ...commonStyles.medium14Black }}>
                ${item?.target_price}
              </Text>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={imagePath.delete}
                  style={styles.deleteIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Modal isVisible={isModalVisible}>
            <View style={{ ...commonStyles.modalcontainer }}>
              <Text style={{ ...commonStyles.heavy18Black }}>
                {strings.DELETE_PRICE_ALERT}
              </Text>

              <View style={{ ...commonStyles.descstyle }}>
                <Text style={{ ...commonStyles.medium14Black }}>
                  {strings.ARE_YOUR_SURE_YOU_WANT_TO_DELETE_PRICE_ALERT}
                </Text>
              </View>

              <View style={{ ...commonStyles.btncontainer }}>
                <View style={{ flex: 0.46 }}>
                  <ButtonComponent
                    onPress={() => toggleModal()}
                    btnStyle={{ ...commonStyles.cancelbtnstyle }}
                    buttonTxt={{ ...commonStyles.cancelbtntxt }}
                    buttonText={strings.CANCEL}
                  />
                </View>
                <View style={{ flex: 0.46 }}>
                  <ButtonComponent
                    onPress={() => deletePriceAlert(item)}
                    btnStyle={{ ...commonStyles.continuestyle }}
                    buttonTxt={{ ...commonStyles.continuebtntxt }}
                    buttonText={strings.YES}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </>
      );
    },
    [priceAlertsList, isModalVisible]
  );

  return (
    <WrapperContainer>
      <View
        style={{
          paddingTop: getStatusBarHeight(true) + moderateScale(20),
        }}
      >
        <GoBackHeader
          headerText={strings.CREATE_PRICE_ALERTS}
          blankSpace={true}
          navigationScreen={navigationStrings.ACCOUNT}
        />
      </View>
      <View style={{ flex: 1, ...commonStyles.paddingV20xH10 }}>
        <View>
          <TouchableOpacity
            style={{
              ...commonStyles.rowSpaceBetween,
              ...commonStyles.textinputStyle,
              ...styles.selectCoinBtn,
            }}
            onPress={() => {
              navigation.navigate(navigationStrings.PRICES, {
                data: "createPriceAlert",
                isCameFromPriceAlert: true,
              });
            }}
          >
            <View style={{ ...commonStyles.rowAlignCen }}>
              <Image
                source={coinDetails ? { uri: coinDetails?.image } : null}
                style={{
                  ...styles.coinLogo,
                  display: coinDetails ? null : "none",
                }}
              />
              <Text style={{ ...commonStyles.medium14Black }}>
                {coinDetails ? coinDetails?.name : strings.SELECT_COIN}
              </Text>
            </View>
            <Image
              source={imagePath.move}
              style={{ ...commonStyles.moveIcon }}
            />
          </TouchableOpacity>
          <CommonTextInput
            placeholder={strings.ENTER_PRICE}
            value={alertPrice}
            onChangeText={(value) => setAlertPrice(value)}
            keyboardType="numeric"
            textInput={{
              ...commonStyles.medium16Black,
              ...commonStyles.textinputStyle,
            }}
          />
          <Text style={{ ...commonStyles.medium14Black }}>
            {strings.CURRENT_PRICE}:{" "}
            {coinDetails ? `$${coinDetails?.current_price}` : null}
          </Text>
          <ButtonComponent
            onPress={onCreateAlert}
            buttonText={strings.CREATE_PRICE_ALERTS}
            buttonTxt={{ ...commonStyles.heavy15Black, color: colors.white }}
            btnStyle={{ marginVertical: moderateScale(20) }}
          />
        </View>

        <View
          style={{
            ...commonStyles.rowSpaceBetween,
            marginBottom: moderateScale(12),
          }}
        >
          <Text
            style={{
              ...commonStyles.heavy13Black,
              ...styles.alertSectionheading,
            }}
          >
            {strings.COIN_NAME}
          </Text>
          <Text
            style={{
              ...commonStyles.heavy13Black,
              ...styles.alertSectionheading,
            }}
          >
            {strings.ALERT_PRICE}
          </Text>
        </View>
        <HorizontalBar
          horizontalBarStyle={{ marginHorizontal: moderateScale(0) }}
        />
        {priceAlertsList === 0 ? (
          <View style={{ ...commonStyles.rowCenterCenter, flex: 1 }}>
            <Text
              style={{ ...commonStyles.medium13Black, ...styles.currentPrice }}
            >
              {strings.NO_ALERT_CREATED}
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1, paddingTop: moderateScale(10) }}>
            {load ? (
              <>
                <ListShimmerComponent />
                <ListShimmerComponent />
                <ListShimmerComponent />
                <ListShimmerComponent />
                <ListShimmerComponent />
              </>
            ) : (
              <FlatList
                data={priceAlertsList}
                renderItem={showPriceAlertView}
              />
            )}
          </View>
        )}
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  currentPrice: {
    textAlign: "center",
    color: colors.tabIconGreyColor,
  },
  alertSectionheading: {
    textTransform: "uppercase",
    color: colors.tabIconGreyColor,
  },
  selectCoinBtn: {
    paddingVertical: moderateScaleVertical(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
  },
  coinLogo: {
    height: moderateScale(28),
    width: moderateScale(28),
    marginRight: moderateScale(10),
  },
  deleteIconStyle: {
    height: moderateScale(20),
    width: moderateScale(18),
    alignSelf: "center",
    marginLeft: moderateScale(10),
  },
  coinLogoInListAlert: {
    height: moderateScale(width / 13.5),
    width: moderateScale(width / 13.5),
    marginRight: moderateScale(15),
  },
  listViewBox: {
    paddingHorizontal: moderateScale(7),
    paddingVertical: moderateScaleVertical(10),
  },
});

//make this component available to the app
export default PriceAlerts;
