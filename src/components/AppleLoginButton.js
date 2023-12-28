import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';


const AppleLoginButton = () => { 
    return (
        <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
            cornerRadius={10}
            style={styles.button}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: '20%',
        marginBottom: 15,
    }
})

export default AppleLoginButton