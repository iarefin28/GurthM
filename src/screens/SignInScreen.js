import React from "react";
import { useRef, useEffect } from "react";

import { StyleSheet, Text, View, Image, useWindowDimensions, Animated, Easing } from 'react-native';

import Logo from '../../assets/Logo.png';

import AppleLoginButton from "../components/AppleLoginButton.js";
import GoogleLoginButton from "../components/GoogleLoginButton.js";
import SignUpWithEmailButton from "../components/SignUpWithEmailButton.js";
import LoginWithEmailButton from "../components/LogInWithEmailButton.js";

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";


const SignInScreen = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions()
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(1000)).current; // Initial position off the screen

    useFocusEffect(() => {
        navigation.setOptions({ headerShown: false });
    });

    useEffect(() => {
        const scaleAnimation = Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        });

        const fadeAnimation = Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        });
        const spinAnimation = Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 1000, // Duration for one complete rotation
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );

        const slideAnimation = Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        });

        Animated.parallel([scaleAnimation, fadeAnimation, spinAnimation, slideAnimation]).start();


        const spinTimeout = setTimeout(() => {
            spinAnimation.stop(); // Stop the spinning animation

            // Set the spin animation value to 0 (0 degrees) manually
            spinAnim.setValue(0);
        }, 1000);

    }, [scaleAnim, fadeAnim, spinAnim, slideAnim]);


    const scaleValue = scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1], // Start from 0% of the size and grow to full size
    });

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });



    return (
        <LinearGradient
            colors={['#000000', '#2c3e50']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.root}>
                <View style={styles.logoContainer}>
                    <Animated.Image
                        source={Logo}
                        style={[
                            styles.logo,
                            {
                                height: height * 0.3,
                                opacity: fadeAnim,
                                transform: [{ scale: scaleValue }, { rotate: spin }],
                            }
                        ]}
                        resizeMode="contain"
                    />
                </View>
                <Animated.View style={[styles.loginOptions, { transform: [{ translateY: slideAnim }] }]}>
                    <AppleLoginButton />
                    <GoogleLoginButton />
                    <SignUpWithEmailButton />
                    <LoginWithEmailButton />
                </Animated.View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        flex: 1,
        flexDirection: 'column'
    },
    logoContainer: {
        height: '65%',
        alignItems: 'center',
        padding: 40,
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        width: '50%',
        maxWidth: '300',
        maxHeight: 300,
    },
    loginOptions: {
        height: '35%',
        backgroundColor: "black",
        opacity: 0.7,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 25,
    }
})

export default SignInScreen;


