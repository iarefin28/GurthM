import React from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";

import GurthInput from "./components/GurthInput";
import NextButton from "./components/NextButton";

import { useState, useContext } from "react";

import { AccountCreationContext } from "../contexts/AccountCreationContext";

const PasswordEntryScreen = () => {
    const { name, password } = useContext(AccountCreationContext)
    console.log("Current Name:")
    console.log(name)
    console.log(password)

    const navigation = useNavigation()
    const [text, setText] = useState("")

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
                    <Text style={styles.prompt}>Create a password</Text>
                    <Text style={styles.purpose}>
                        Create a password with at least 6 letters or numbers. It should be something others can't guess.
                    </Text>
                    <GurthInput
                        placeholder="Password"
                        type="password"
                        onTextChange={(textValue) => { handleChildInput(textValue) }}
                    />
                    <NextButton
                        typeOfInput={"password"}
                        input={text}
                        nextScreen="PasswordEntryScreen"
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
        fontSize: 28,
        marginBottom: 10
    },
    purpose: {
        color: "white",
        fontFamily: "RethinkSans",
        fontSize: 14,
        marginBottom: 20
    },
    inputContainer: {
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

export default PasswordEntryScreen;


