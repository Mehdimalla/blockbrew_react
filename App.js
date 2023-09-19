//import liraries
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider, useSelector } from "react-redux";
import strings, { changingLanguage } from "./src/constants/lang";
import Routes from "./src/navigation/Routes";
import { store } from "./src/redux/store";
import { getItem, getLogin, setLogin } from "./src/utils/utils";
import actions from "./src/redux/actions";
import FlashMessage from "react-native-flash-message";
// import HomeLoader from "./src/components/HomeLoader";
import { moderateScale, moderateScaleVertical, width } from "./src/styles/responsiveSize";


const App = () => {

  useEffect(() => {
    getLanguage();
    getLogin().then((res) => {
      actions.loginAction(res)
      // console.log(res, "res>>>>>");
    })
  }, []);

  const getLanguage = async () => {
    try {
      const lng = await AsyncStorage.getItem("language");
      console.log("Lnguage changed", lng);
      if (!!lng) {
        // console.log(!!lng,"+++++++");
        changingLanguage(lng);
        // strings.setLanguage(lng)
      } else {
        strings.setLanguage("en");
      }
    } catch (error) {
      console.log(" error occurred in file ");
    }
  };

  // if (true) {
  //   return(<>
  //   <HomeLoader
  //         width={width / 1.1}
  //         height={24}
  //         rectHeight={24}
  //         rectWidth={width / 1.1}
  //         viewStyles={{
  //           marginHorizontal: moderateScale(16),
  //           marginVertical: moderateScaleVertical(16),
  //         }}
  //       />
  //   </> )
  // }
  return (
    <Provider store={store}>
      <FlashMessage position="top" duration={2000} />
      <Routes />
    </Provider>
  );
};

//make this component available to the app
export default App;
