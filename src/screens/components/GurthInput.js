import React from "react"
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GurthInput = ({ placeholder, password }) => {
    return (
        <View>
            <View style={styles.overlay} />
            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry={password}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={"white"}
                />
                <View style={styles.additionalFunctionality}>
                    <Ionicons name="close-circle-outline" size={24} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        height: 55,
        display: "flex",
        flexDirection: "row",

    },
    input: {
        color: "white",
        fontFamily: "RethinkSans",
        marginLeft: 10,
        height: "100%",
        width: "80%",

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        opacity: 0.6,
    },
    additionalFunctionality: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",

    }
})

export default GurthInput;