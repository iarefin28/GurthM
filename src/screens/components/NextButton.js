import React, {useContext} from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AccountCreationContext } from "../../contexts/AccountCreationContext";

const NextButton = ({typeOfInput, input, nextScreen, ready}) => {
    const navigation = useNavigation()
    const { updateName, updatePassword, updateBirthday, updateEmail, name, password, birthday, email } = useContext(AccountCreationContext);

    console.log("Name: " + name + "\nPassword: " + password + "\nBirthday: " + birthday + "\nEmail: " + email)

    const handleNext = () => {
        if(typeOfInput === "name") updateName(input)
        if(typeOfInput === "password") updatePassword(input)
        if(typeOfInput === "birthday") updateBirthday(input)
        if(typeOfInput === "email") updateEmail(input)

        /*
            Once I get the email confirmation working with firebase I will need to have a conditional. 
            This conditional will verify that the email is a confirmed email with the verification code. 
            Currently the code is in the input field. Once they press the next button on VerificationScreen.js 
            this next button component will send a request to Firebase to get an answer. If not verified this component will have to send back 
            some sort of error to the VerificationScreen component so that we can re render GurthInput to display in error 
        */


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


