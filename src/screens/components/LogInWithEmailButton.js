import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const LoginWithEmailButton = () => {
    return (
        <TouchableOpacity onPress={null} style={styles.buttonContainer}>
            <Text style={styles.buttonDescription}>Log In</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#383838',
        borderRadius: 10, 
    },
    buttonDescription: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 18,
        color: "white",
        marginLeft: 5
    }
})

export default LoginWithEmailButton