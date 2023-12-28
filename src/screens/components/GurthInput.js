import React from "react"
import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const GurthInput = ({ placeholder, type, onTextChange, date }) => {
    const [isFocused, setIsFocused] = useState(false || type === "birthday")
    const [text, setText] = useState(type === "birthday" ? date : "")
    const [passwordToggle, setPasswordToggle] = useState(type === 'password')

    const inputRef = useRef(null);

    // useEffect(() => {
    //     if(type !== "birthday"){
    //         setTimeout(() => {
    //             inputRef.current?.focus();
    //         }, 530 );
    //     }
    // }, []);

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

    const handleClearInput = () => {
        console.log("Clearing input")
        setText("")
        onTextChange("")
    }

    const handlePasswordToggle = () => {
        setPasswordToggle(!passwordToggle)
    }

    const formatDate = (date) => {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
        const dayOfWeek = days[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
      
        return `${dayOfWeek}, ${month} ${day}, ${year}`;
      };

    return (
        <View style={styles.root}>
            <View style={styles.overlay} />
            <View style={[styles.inputMainContainer, isFocused && { borderColor: "white" }]}>
                <View style={[styles.inputSubContainer, ((text && isFocused)) ? { width: "80%" } : { width: "100%" }]}>
                    {(isFocused || text) &&
                        <Text
                            style={[styles.inputType, isFocused ? { color: "white" } : { color: "gray" }]}>
                            {placeholder}
                        </Text>
                    }
                    <TextInput
                        ref={inputRef}
                        value={date ?  formatDate(date) : text}
                        secureTextEntry={passwordToggle}
                        style={[styles.input, (isFocused || text) ? { height: "35%" } : { height: "100%" }]}
                        placeholder={isFocused ? "" : placeholder}
                        placeholderTextColor={isFocused ? "white" : "gray"}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleInputChange}
                        maxLength={type==="code" ? 6 : 50}
                        editable={type==="birthday" ? false : true}
                        keyboardType={type==="code" ? "numeric" : undefined}
                        keyboardAppearance={'dark'}
                    />
                </View>
                {text && isFocused && type === "name" &&
                    <View style={styles.additionalFunctionality}>
                        <TouchableOpacity onPress={handleClearInput}>
                            <Entypo name="cross" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                }
                {(isFocused || text) && type === "password" &&
                    <View style={styles.additionalFunctionality}>
                        <TouchableOpacity onPress={handlePasswordToggle}>
                            {passwordToggle && <Entypo name="eye-with-line" size={23} color="white" />}
                            {!passwordToggle && <Entypo name="eye" size={23} color="white" />}
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
        justifyContent: "center",
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