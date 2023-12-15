import React from "react";
import { StyleSheet, Text, SafeAreaView} from 'react-native';

import {useFocusEffect, useNavigation} from '@react-navigation/native'
import { LinearGradient } from "expo-linear-gradient";

const InformationEntryScreen = () => {
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
                <Text style={styles.header}>What's your name?</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
    },
    header:{
        color: "white",
        fontSize: '30',
        fontFamily: 'Arial'
    }
})

export default InformationEntryScreen;


