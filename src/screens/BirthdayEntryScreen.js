import React from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";

import GurthInput from "./components/GurthInput";
import NextButton from "./components/NextButton";

import { useState, useContext } from "react";

import DateTimePicker from '@react-native-community/datetimepicker';

import { AccountCreationContext } from "../contexts/AccountCreationContext";
import { FIREBASE_AUTH } from "../../FirebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";


const BirthdayEntryScreen = () => {
    const navigation = useNavigation()
    const [text, setText] = useState(new Date())
    const auth = FIREBASE_AUTH;
    const { name, password } = useContext(AccountCreationContext);

    console.log(name);
    console.log(password);

    useFocusEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: '',
        });
    });

    console.log(text.toString())

    const handleChildInput = (input) => {
        setText(input)
    }

    const handleDateChange = (event, selectedDate) => {  
        setText(selectedDate)
    }

    const handleCreateAccount = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, name, password);
            console.log(response);
        } catch (error) {
            console.log(error)
            alert("Sign in failed: " +  error.message)
        }
    }

    return (
        <LinearGradient
            colors={['#000000', '#2c3e50']}
            style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.mainContainer}>
                    <Text style={styles.prompt}>What's your birthday?</Text>
                    <Text style={styles.purpose}>
                        Use your own birthday. This information will only be available to you. Why do I need to provide my
                        birthday?
                    </Text>
                    <GurthInput
                        placeholder="Birthday"
                        type="birthday"
                        date={text}
                        onTextChange={(textValue) => { handleChildInput(textValue) }}
                    />
                    <NextButton
                        typeOfInput={"birthday"}
                        input={text}
                        nextScreen="EmailEntryScreen"
                        ready={text ? false : true}
                    />
                    <TouchableOpacity onPress={handleCreateAccount}><Text>hello</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={{ height: "35%", justifyContent: "center", alignItems: "center" }}>
                <View style={styles.overlay} />
                <DateTimePicker
                    value={text}
                    display="spinner"
                    backgroundColor="transparent"
                    textColor="white"
                    onChange={handleDateChange}
                />
            </View>
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
        marginTop: 7,
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
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        opacity: 0.7,
    },
})

export default BirthdayEntryScreen;


