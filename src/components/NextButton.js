import React, { useContext, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AccountCreationContext } from "../contexts/AccountCreationContext";
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_APP } from "../../FirebaseConfig";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const NextButton = ({ typeOfInput, input, nextScreen, ready }) => {
    const navigation = useNavigation()
    const auth = FIREBASE_AUTH
    const { updateName, updatePassword, updateBirthday, updateMobile, updateVerificationId, updateCode, name, password, birthday, mobile, verificationId, code } = useContext(AccountCreationContext);

    console.log("Name: " + name + "\nPassword: " + password + "\nBirthday: " + birthday + "\nMobile: " + mobile + "\nID: " + verificationId + "\nCode" + code)

    const recaptchaVerifier = useRef(null);

    const sendVerification = async () => {
        const formattedPhoneNumber = `+1${mobile}`;

        try {
            const phoneProvider = new PhoneAuthProvider(FIREBASE_AUTH);
            const verificationId = await phoneProvider.verifyPhoneNumber(
                formattedPhoneNumber,
                recaptchaVerifier.current
            );
            updateVerificationId(verificationId)
        } catch (err) {
            console.log(err)
        }
    }

    const confirmVerification = async () => {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, code);
            await signInWithCredential(FIREBASE_AUTH, credential);
        } catch (err) {
            console.log(err)
        }
    }

    const handleNext = async () => {
        if (typeOfInput === "name") updateName(input)
        if (typeOfInput === "password") updatePassword(input)
        if (typeOfInput === "birthday") updateBirthday(input)

        if (typeOfInput === "mobile") {
            updateMobile(input)
            sendVerification()
        }

        if (typeOfInput === "code") {
            updateCode(input)
            confirmVerification()
        }
 
        Keyboard.dismiss()
        navigation.navigate(nextScreen);
    };

    console.log(input)
    return (
        <TouchableOpacity
            style={styles.container}
            disabled={ready}
            onPress={handleNext}
        >
            <LinearGradient
                colors={['#485461', '#28313b']}
                style={{ width: "100%", height: "100%", borderRadius: 50, justifyContent: "center", alignItems: "center" }}
            >
                <Text style={styles.text}>
                    Next
                </Text>
            </LinearGradient>
            <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={FIREBASE_APP.options} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "16%",
        borderRadius: 50,
    },
    text: {
        fontFamily: "RethinkSans",
        fontSize: 18,
        color: "white"
    }
})

export default NextButton;


