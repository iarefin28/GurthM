import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NextButton = ({nextScreen, ready}) => {
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


