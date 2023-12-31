import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";

import { AccountCreationContext } from "../contexts/AccountCreationContext";
import CreateAccountButton from "../components/CreateAccountButton.js";

const PrivacyTermsScreen = () => {
    const { name } = useContext(AccountCreationContext)
    const navigation = useNavigation()

    useFocusEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: '',
        });
    });

    return (
        <LinearGradient
            colors={['#000000', '#2c3e50']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <SafeAreaView style={styles.root}>
                <View style={styles.mainContainer}>
                    <Text style={styles.prompt}>Agree to Gurth's terms and policies</Text>
                    <Text style={styles.purpose}>
                        By tapping I agree, you agree to create an account and to Gurth's Terms, Privacy Policy,
                        and Cookies Policy.
                    </Text>
                    <Text style={styles.purpose}>
                        The Privacy Policy describes the ways we can use the information we collect 
                        when you create an account. For example, we use this information to provide, personalize
                        and improve our product. 
                    </Text>
                    <CreateAccountButton/>
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
    }
})

export default PrivacyTermsScreen;


