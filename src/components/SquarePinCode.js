import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { moderateScale } from "../styles/responsiveSize";

const SquarePinCode = ({
  cellCount = 6,
  root,
  phoneOtpValue = () => {},
  emailOtpValue = () => {},

}) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });


  const setotpValue = () => {
    otpValue = { value };
  };

  return (
    <SafeAreaView style={{ ...styles.root, ...root }}>
      <CodeField
        phoneOtpValue={value}
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={(values) => setValue(values)}
        cellCount={cellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => {
          // console.log( !!phoneOtpValue(value));
          !!phoneOtpValue && phoneOtpValue(value);
          !!emailOtpValue && emailOtpValue(value);



          return (
            <Text
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                { alignItems: "center" },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>

          );
        }}

      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: moderateScale(45) },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 48,
    height: 48,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
export default SquarePinCode;
