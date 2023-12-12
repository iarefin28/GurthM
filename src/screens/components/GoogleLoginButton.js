import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const GoogleLoginButton = () => {
    return (
        <TouchableOpacity onPress={null} style={styles.button}>
            <Image
                source={require('../../../assets/SignInWithGoogle.png')}
                resizeMode="contain"
                style={{flex: 1, width: "100%", height: "100%"}}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: '20%',
        marginBottom: 15,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 4
    }
})

export default GoogleLoginButton