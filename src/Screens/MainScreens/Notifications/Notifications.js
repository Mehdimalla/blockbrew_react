//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale } from "../../../styles/responsiveSize";

// create a component
const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    notificationApi();
  }, []);
  const notificationApi = async () => {
    try {
      let header = { "Content-Type": "multipart/form-data" };
      await actions.notification(header).then((res) => {
        if (res?.status === 200) {
          const result = res?.data?.data;
          if (result.length === 0) {
            setNotifications(0);
          } else {
            setNotifications(result);
          }
          // console.log(res, result.length, "notifications api response");
        }
      });
    } catch (error) {
      console.log("update profile error raised", error);
    }
  };
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader headerText={strings.NOTIFICATIONS} />
      </View>
      {notifications === 0 ? (
        <View
          style={{
            ...commonStyles.rowCenterCenter,
            flex: 0.9,
          }}
        >
          <Text
            style={{
              ...commonStyles.black18Black,
              color: colors.lightSkyBlue,
              textAlign: "center",
            }}
          >
            {strings.NO_NOTIFICATIONS_AVAILBALE}
          </Text>
        </View>
      ) : (
        <ScrollView>
          <Text>hello</Text>
        </ScrollView>
      )}
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Notifications;
