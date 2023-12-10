import React from "react";
import { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions, Animated, Easing } from 'react-native';
import Logo from '../../assets/Logo.png'; 

const SignInScreen = () => { 
    const {height} = useWindowDimensions()
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;


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

        Animated.parallel([scaleAnimation, fadeAnimation, spinAnimation]).start();

        // Stop the spinning animation after a certain delay (e.g., 3000 milliseconds)
        const spinTimeout = setTimeout(() => {
            spinAnimation.stop(); // Stop the spinning animation
            }, 1000); // Set the duration for how long the spinning animation should run
        
            return () => clearTimeout(spinTimeout); // Clean up the timeout

    }, [scaleAnim, fadeAnim, spinAnim]);


    const scaleValue = scaleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.25, 1], // Start from quarter of the size and grow to full size
    });

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['90deg', '360deg'],
    });

    return (
        <View style={styles.root}>
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
    )
} 

const styles = StyleSheet.create({
    root:{
        alignItems: "center",
        padding: 30 
    },
    logo: {
        width: '50%', 
        maxWidth: '300',
        maxHeight: 300,     
    }
})

export default SignInScreen;
