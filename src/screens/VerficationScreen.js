import React from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";

import GurthInput from "../components/GurthInput.js";
import NextButton from "../components/NextButton";

import { useState, useContext } from "react";
import { AccountCreationContext } from "../contexts/AccountCreationContext";

const VerificationScreen = () => {
    const navigation = useNavigation()
    const[text, setText] = useState("")
    const{ email } = useContext(AccountCreationContext)

    useFocusEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: '',
        });
    });

    const handleChildInput = (input) => {
        setText(input)
    }

    return (
        <LinearGradient
            colors={['#000000', '#2c3e50']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.mainContainer}>
                    <Text style={styles.prompt}>Enter the confirmation code</Text>
                    <Text style={styles.purpose}>To confirm your account, enter the 6-digit code we sent to {email}</Text>
                    <GurthInput
                        placeholder="Confirmation Code"
                        type="code"
                        onTextChange={(textValue) => { handleChildInput(textValue) }}
                    />
                    <NextButton
                        typeOfInput={"code"}
                        input={text}
                        nextScreen="PrivacyTermsScreen"
                        ready={text ? false : true}
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    mainContainer: {
        width: '90%',
        flexDirection: 'column',
        marginTop: 7

    },
    prompt: {
        color: "white",
        fontFamily: 'RethinkSans-Bold',
        fontSize: 27,
        marginBottom: 10
    },
    purpose: {
        color: "white",
        fontFamily: "RethinkSans",
        fontSize: 14,
        marginBottom: 20
    },
    inputContainer:{
        backgroundColor: "black",
        opacity: 0.3

    },
    input: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        height: 60,
        color: "white",
        fontFamily: "RethinkSans"
    }
})

export default VerificationScreen;


