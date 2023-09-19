//import liraries
import React from 'react';
import {
    View,
     Text,
    TouchableOpacity,
    Image, KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import ButtonComponent from '../../../components/ButtonComponent';
import CommonTextInput from '../../../components/CommonTextInput';
import GoBackHeader from '../../../components/GoBackHeader';
import WrapperContainer from '../../../components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import strings from '../../../constants/lang';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import fontFamily from '../../../styles/fontFamily';
import { styles } from './style';

// create a component
const BuyScreen = ({ navigation }) => {
    // const buyCoin = async () => {
    //     await actions.buyCoins().then((res) => {
    //         // console.log(res, "response++++");
    //     })
    // }
    return (
        <WrapperContainer>
            <View
                style={styles.headerContainer}
            >
                <GoBackHeader headerText={strings.BUY_LIVEPEER}
                    blankSpace={true}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.container}>

                <View style={styles.instanstyle}>
                    <Text style={styles.instanttxt}>{strings.INSTANT}</Text>
                    <Image source={imagePath.arrowBottom}
                        style={styles.arrowBottomStyle} />
                </View>
                <View style={styles.estimatestyle}>
                    <Text style={styles.estimatetxt}>{strings.ESTIMATED_BUY_PRICE}</Text>
                </View>
                <View style={styles.amountstyle}>
                    <Text style={styles.amountxt}>{"$23.456"}</Text>
                </View>
                <View style={styles.howmuchstyle}>
                    <Text style={styles.howmuchtxt}>{strings.HOW_MUCH_DO_YOU_WANT}</Text>
                </View>
                <View style={styles.inputcontainer}>
                    <CommonTextInput placeholder={strings.USD}
                        keyboardType="numeric"
                        textInput={styles.USDstyle}

                    />
                    <Text style={styles.equalto}>=</Text>
                    <CommonTextInput placeholder={strings.LPT}
                        keyboardType="numeric"
                        textInput={styles.USDstyle}
                    />
                </View>
                <View style={styles.balancecontainer}>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={styles.balancetxt}>{strings.BALANCE}</Text>
                        <Text style={styles.amountBalancetxt}> {"$239.90"}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ADD_FUNDS)}
                        style={{ flexDirection: "row" }}>
                        <Text style={styles.addfunds}>{strings.ADD_FUNDS}</Text>
                        <Image source={imagePath.move}
                            style={styles.moveiconstyle} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <KeyboardAvoidingView
                enabled={true}
                behavior={Platform.OS == "android" ? "height" : "padding"}
            >
                <View style={styles.youpaystyle}>
                    <Text style={styles.youpaytxt}>{strings.YOU_PAY} {"$1.266"}</Text>
                </View>
                <ButtonComponent
                    // onPress={buyCoin}
                    btnStyle={styles.btnStyle}
                    buttonText={"Swipe"}
                    buttonTxt={{ fontFamily: fontFamily.AvenirHeavy }} />
            </KeyboardAvoidingView>

        </WrapperContainer>
    );
};

//make this component available to the app
export default BuyScreen;
