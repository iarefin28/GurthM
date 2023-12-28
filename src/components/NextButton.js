import React, { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AccountCreationContext } from "../../contexts/AccountCreationContext";
import { verifyPhoneNumber } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const NextButton = ({ typeOfInput, input, nextScreen, ready }) => {
    const navigation = useNavigation()
    const auth = FIREBASE_AUTH
    const { updateName, updatePassword, updateBirthday, updateMobile, name, password, birthday, mobile } = useContext(AccountCreationContext);

    console.log("Name: " + name + "\nPassword: " + password + "\nBirthday: " + birthday + "\nMobile: " + mobile)


    async function sendVerificationCode() {
        try {
          // Request to send a verification code to the provided phone number
          const confirmation = await verifyPhoneNumber(auth, input);
      
          // Return the confirmation object, which you'll need to verify the code later
          return confirmation;
        } catch (error) {
          console.error('Error sending verification code:', error);
          throw error;
        }
      }

    const handleNext = () => {
        if (typeOfInput === "name") updateName(input)
        if (typeOfInput === "password") updatePassword(input)
        if (typeOfInput === "birthday") updateBirthday(input)

        if (typeOfInput === "mobile") {
            updateMobile(input)
            sendVerificationCode()
                .then((confirmation) => {
                    console.log('Verification code sent successfully. Confirmation:', confirmation);
                    // You'll typically navigate to the verification screen here
                })
                .catch((error) => {
                    // Handle any errors, such as invalid phone numbers or rate limiting
                    console.error('Error sending verification code:', error);
                });

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


