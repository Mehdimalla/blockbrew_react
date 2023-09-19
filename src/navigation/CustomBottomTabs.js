import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import { moderateScale, moderateScaleVertical } from "../styles/responsiveSize";
import commonStyles from "../styles/commonStyles";

function CustomBottomTabs(props) {
  const { state, descriptors, navigation } = props;

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // console.log(route.key,"route.key>>>>>>>>>>>>>>>")

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon = options.tabBarIcon;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
            <TouchableOpacity
              key={route?.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabView}
            >
              <View>
                <Image
                  source={icon({ focused: isFocused })}
                  resizeMode="contain"
                  style={{
                    width: isFocused ? moderateScale(35) : moderateScale(22),
                    height: isFocused ? moderateScale(32) : moderateScale(32),
                  }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  ...commonStyles.medium13Black,
                  color: isFocused
                    ? colors.tabIconColor
                    : colors.tabIconGreyColor,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingBottom: Platform.OS === "ios" ? 7 : 0,
    backgroundColor: colors.white,
    // borderTopWidth: 0.5, 
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    shadowRadius: moderateScale(4),
    // shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.4,
    shadowColor: Platform.OS === "ios" ? colors.tabShadow : "none",
    elevation: 20,
  },
  tabIconStyle: { width: 30, height: 30 },
  tabView: {
    flex: 1,
    paddingVertical: moderateScaleVertical(12),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomBottomTabs;
