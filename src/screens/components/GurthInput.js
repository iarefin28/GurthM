import React from "react"
import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const GurthInput = ({ placeholder, password }) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => { 
        setIsFocused(true)
    }

    const handleBlur = () => { 
        setIsFocused(false)
    }

    return (
        <View>
            <View style={styles.overlay} />
            <View style={[styles.inputContainer, isFocused && {borderColor: "white"}]}>
                <TextInput
                    secureTextEntry={password}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={isFocused ? "white" : "gray"}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <View style={styles.additionalFunctionality}>
                    <TouchableOpacity>
                        <Entypo name="cross" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        height: 55,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden"

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