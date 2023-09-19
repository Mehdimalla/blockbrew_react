//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ButtonComponent from '../../../components/ButtonComponent';
import CommonTextInput from '../../../components/CommonTextInput';
import GoBackHeader from '../../../components/GoBackHeader';
import WrapperContainer from '../../../components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import { moderateScale, textScale } from '../../../styles/responsiveSize';
import { styles } from './style';
// create a component
const GoogleAuthenticator = () => {
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)


    const stepTwo = () => {

        setStep1(false)
        setStep2(true)
    }
    const component3 = () => {
        setStep2(false)
    }
    return (
        <WrapperContainer>
            <View
                style={styles.container}
            >
                <GoBackHeader borderShadowLine={true}
                    headerText={strings.GOOGLE_AUTHENTICATOR}
                    blankSpace={true} />
            </View>
            {
                step1 ? (<>
                    <View style={styles.step1container}>
                        <Text style={styles.step1txt}>{strings.STEP1}</Text>
                        <Text style={styles.downloadtxt}>{strings.DOWNLOAD_GOOGLE_AUTHENTICATOR}</Text>
                    </View>
                    <ButtonComponent
                        onPress={() => stepTwo()}
                        btnStyle={styles.btnStyle}
                        buttonText={strings.I_HAVE_DOWNLOADED}
                        buttonTxt={styles.buttonTxtstyle} />
                </>) : (step2 ? <>
                    <View style={styles.step2container}>
                        <Text style={styles.step1txt}>{strings.STEP2}</Text>
                        <Text style={styles.downloadtxt}>{strings.ADD_SECRET_KEY_TO_GOOGLE_AUTHENTICATOR}</Text>
                        <View style={styles.addmanualstyle}>
                            <Text style={styles.addmanualtxt}>{strings.ADD_MANUALLY}</Text>

                            <View style={styles.usestyle}>
                                <Text style={styles.useText}>{strings.USE_GOOGLE_AUTHENTICATOR_APP}</Text>
                            </View>
                        </View>

                        <View style={styles.accountStyle}>
                            <Text style={styles.accountText}>{strings.ACCOUNTNAMES}</Text>

                            <View style={styles.DCXstyle}>
                                <Text style={styles.DCXtext}>CoinDCX</Text>
                                <Text style={styles.copyText}>{strings.COPY}</Text>

                            </View>

                            <View style={{ paddingTop: moderateScale(28) }}>
                                <Text style={styles.secretkeyText}>{strings.SECRET_KEY}</Text>

                                <View style={styles.NANKstyle}>
                                    <Text style={styles.NANKtext}>NANKLDCSBWVA21</Text>
                                    <Text style={styles.copyText}>{strings.COPY}</Text>

                                </View>
                            </View>
                        </View>

                        <ButtonComponent
                            btnStyle={styles.opengooglestyle}
                            buttonText={strings.OPEN_GOOGLE_AUTHENTICATOR}
                            buttonTxt={styles.opengoogletxt}
                        />
                    </View>
                    <ButtonComponent
                        onPress={() => component3()}
                        btnStyle={styles.btnStyle}
                        buttonText={strings.CONTINUE}
                        buttonTxt={styles.buttonTxtstyle} />
                </>
                    //step 3
                    : <>
                        <View style={styles.step3container}>
                            <Text style={styles.step1txt}>{strings.STEP3}</Text>
                            <Text style={styles.verificationText}>{strings.VERIFICATION}</Text>

                            <CommonTextInput
                                showRighticonStyle={{ right: moderateScale(20) }}
                                textInput={styles.Inputstyle}
                                placeholder={strings.CURRENT_PASSWORD}
                                showRightIcon={imagePath.showeye}
                            />

                            <CommonTextInput
                                textInput={styles.Inputstyle}
                                placeholder={strings.PHONE_OTP}

                            />
                            <CommonTextInput
                                textInput={styles.Inputstyle}
                                placeholder={strings.SECURITY_CODE}
                            />
                        </View>
                        <ButtonComponent

                            btnStyle={styles.btnStyle}
                            buttonText={strings.CONTINUE}
                            buttonTxt={styles.buttonTxtstyle}
                        />

                    </>)
            }

        </WrapperContainer>
    );
}

export default GoogleAuthenticator;
