import React from "react"
import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const GurthInput = ({ placeholder, type, onTextChange }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [text, setText] = useState("")
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handleInputChange = (inputText) => {
        setText(inputText)
        onTextChange(inputText)
    }

    return (
        <View style={styles.root}>
            <View style={styles.overlay} />
            <View style={[styles.inputMainContainer, isFocused && { borderColor: "white" }]}>
                <View style={[styles.inputSubContainer, ((text && isFocused) || type === "password") ? { width: "80%" } : { width: "100%" }]}>
                    {(isFocused || text) &&
                        <Text
                            style={[styles.inputType, isFocused ? { color: "white" } : { color: "gray" }]}>
                            {placeholder}
                        </Text>
                    }
                    <TextInput
                        ref={inputRef}
                        secureTextEntry={type === "password" ? true : false}
                        style={[styles.input, (isFocused || text) ? { height: "35%" } : { height: "100%" }]}
                        placeholder={isFocused ? "" : placeholder}
                        placeholderTextColor={isFocused ? "white" : "gray"}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleInputChange}
                        returnKeyType='done'
                    />
                </View>
                {text && isFocused && type === "name" &&
                    <View style={styles.additionalFunctionality}>
                        <TouchableOpacity>
                            <Entypo name="cross" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                }
                {(isFocused || text) && type === "password" &&
                    <View style={styles.additionalFunctionality}>
                        <TouchableOpacity>
                            <Entypo name="eye-with-line" size={23} color="white" />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    root: {
        marginBottom: 20
    },
    inputMainContainer: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        height: 55,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
    },
    inputSubContainer: {
        marginLeft: 10,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center"
    },
    inputType: {
        height: "35%",
        fontFamily: "RethinkSans",
        fontSize: 14,
        color: "gray"
    },
    input: {
        color: "white",
        fontFamily: "RethinkSans",
        fontSize: 15,
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