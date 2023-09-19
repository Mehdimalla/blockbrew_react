//import liraries
import React from "react";
import { View, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings, { changingLanguage } from "../../../constants/lang";
import { moderateScale } from "../../../styles/responsiveSize";
import IconTitleDesFlatlist from "../../../components/IconTitleDesCard";
import { styles } from "./style";
import RNRestart from "react-native-restart";
// create a component
const ChangeLanguage = () => {
  const data = [
    {
      id: 1,
      image: imagePath.english,
      title: strings.ENGLISH,
      onpress: () => onchangeLang("en"),
    },
    {
      id: 2,
      image: imagePath.arabic,
      title: strings.ARABIC,
      onpress: () => onchangeLang("ar"),
    },
  ];

  const onchangeLang = (key) => {
    // console.log(key, "key is+++++");
    changingLanguage(key);
    RNRestart.Restart();
  };
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader headerText={strings.LANGUAGE_CHANGE} blankSpace={true} />
        <View style={styles.liststyle}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <IconTitleDesFlatlist
                index={index}
                image={item?.image}
                title={item?.title}
                onpress={item?.onpress}
              />
            )}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ChangeLanguage;
