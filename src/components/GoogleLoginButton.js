import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const GoogleLoginButton = () => {
    return (
        <TouchableOpacity onPress={null} style={styles.buttonContainer}>
            <Image
                source={require('../../../assets/GoogleButtonIcon.png')}
                resizeMode="contain"
                style={styles.googleIcon}
            />
            <Text style={styles.buttonDescription}>Continue with Google</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '20%',
        marginBottom: 15,
        backgroundColor: '#383838',
        borderRadius: 10,
        padding: 4,
    },
    googleIcon: {
        height: '100%',
        width: "6%",
    },
    buttonDescription: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 18,
        color: "white",
        marginLeft: 5
    }
})

export default GoogleLoginButton