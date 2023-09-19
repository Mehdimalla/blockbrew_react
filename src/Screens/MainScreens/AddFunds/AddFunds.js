//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
import ButtonComponent from '../../../components/ButtonComponent';
import CommonTextInput from '../../../components/CommonTextInput';
import GoBackHeader from '../../../components/GoBackHeader';
import WrapperContainer from '../../../components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import strings from '../../../constants/lang';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import { moderateScale, textScale } from '../../../styles/responsiveSize';
import { styles } from './style';

// create a component
const AddFunds = ({ navigation }) => {
    const userData = useSelector((state) => state?.auth?.userLoginStatus);
    const walletBalance = userData?.wallet_balance
    // console.log(walletBalance, "dataaa");
    const [amount, setAmount] = useState("");
    const addFundAmount = () => {
        if (amount == "") {
            Alert.alert("Please enter the amount")
        }
        else {
            navigation.navigate(navigationStrings.PAYMENT, { data: amount })
            console.log(amount, "amount ++++");
        }
    }
    return (
        <WrapperContainer>
            <View
                style={{
                    paddingTop: moderateScale(getStatusBarHeight(true) + 20),
                    // flex: 0.98,
                }}>
                <GoBackHeader
                    borderShadowLine={true}
                    blankSpace={true}
                    headerText={strings.ADD_FUNDS}
                />
            </View>
            <View style={styles.container}>
                <View style={{ paddingTop:moderateScale(29) }}>
                    <Text style={styles.addMoney}>{strings.ADD_MONEY_TO_WALLET}</Text>
                </View>
                <View style={styles.cashmoneyicon}>
                    <Image source={imagePath.cashmoney} />
                    <Text
                        style={styles.availabletxt}>{strings.AVAILABLE_BALANCE}</Text>
                    <Text style={styles.availablebalance}>$ {walletBalance}</Text>
                </View>
                <CommonTextInput
                    value={amount}
                    onChangeText={(amount) => setAmount(amount)}
                    textInput={styles.textInput}
                    placeholder={"50"}
                    placeholderTextColor={colors.blackOpacity70}
                />

                <View style={styles.btnview}>
                    <ButtonComponent
                        onPress={() => setAmount("50")}
                        btnStyle={styles.btnStyle}
                        buttonText={"$50"}
                        buttonTxt={{ color: colors.blueColor }} />
                    <ButtonComponent
                        onPress={() => setAmount("100")}
                        btnStyle={styles.btnStyle}
                        buttonText={"$100"}
                        buttonTxt={{ color: colors.blueColor }} />
                    <ButtonComponent
                        onPress={() => setAmount("150")}
                        btnStyle={styles.btnStyle}
                        buttonText={"$150"}
                        buttonTxt={{ color: colors.blueColor }} />

                </View>
                <ButtonComponent
                    onPress={addFundAmount}
                    btnStyle={styles.continuebtn}
                    buttonText={strings.CONTINUE_TOPAY}
                    buttonTxt={styles.buttonTxt} />

                <View style={styles.temporarystyle}>
                    <Image source={imagePath.infoIcon} />
                    <View style={styles.descstyle}>
                        <Text style={styles.temporaryTextstyle}>{strings.WE_ARE_TEMPORARY}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomcontainer}>

                <View style={{ flex: 0.15, }}>
                    <Image source={imagePath.hourGlassTimer}
                        style={styles.timerStyle} />
                </View>
                <View style={{ paddingLeft: 40 }}>
                    <Text style={styles.missimttxtstyle}>{strings.MISSING_DEPOSITS}</Text>
                    <Text style={styles.addyourtxtstyle}>{strings.ADD_YOUR_TRANSACTION}</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Image source={imagePath.arrowBackLeft}

                        style={styles.arrowbackstyle} />
                </View>
            </View>


        </WrapperContainer>
    );
};

// define your styles


//make this component available to the app
export default AddFunds;
