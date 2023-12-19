import React, {useContext} from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AccountCreationContext } from "../../contexts/AccountCreationContext";

const NextButton = ({typeOfInput, input, nextScreen, ready}) => {
    const navigation = useNavigation()
    const { updateName, updatePassword } = useContext(AccountCreationContext);

    const handleNext = () => {
        if(typeOfInput === "name") updateName(input)
        if(typeOfInput === "password") updatePassword(input)


        navigation.navigate(nextScreen);
    };

    return (
        <TouchableOpacity 
            style={styles.container}
            disabled={ready}
            onPress={handleNext}
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


