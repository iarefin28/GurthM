import React, { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AccountCreationContext } from "../contexts/AccountCreationContext";
import { verifyPhoneNumber } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const CreateAccountButton = ({ typeOfInput, input, nextScreen, ready }) => {
    const navigation = useNavigation()
    const auth = FIREBASE_AUTH
    const { updateName, updatePassword, updateBirthday, updateMobile, name, password, birthday, mobile } = useContext(AccountCreationContext);

    return (
        <TouchableOpacity
            style={styles.container}
            disabled={ready}
        >
            <LinearGradient
                colors={['#485461', '#28313b']}
                style={{ width: "100%", height: "100%", borderRadius: 50, justifyContent: "center", alignItems: "center" }}
            >
                <Text style={styles.text}>
                    I agree, create my account
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "14%",
        borderRadius: 50,
    },
    text: {
        fontFamily: "RethinkSans",
        fontSize: 18,
        color: "white"
    }
})

export default CreateAccountButton;


