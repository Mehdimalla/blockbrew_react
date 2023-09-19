import LocalizedStrings from "react-native-localization";
import en from "./en";
import ar from "./ar";
import AsyncStorage from "@react-native-async-storage/async-storage";
let strings = new LocalizedStrings({
  en: en,
  ar: ar,
});
export const changingLanguage = async (languageKey) => {
await AsyncStorage.setItem("language", languageKey);
  strings.setLanguage(languageKey);
};
export default strings;
