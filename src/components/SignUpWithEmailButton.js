import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const SignUpWithEmailButton = () => {
    const navigation = useNavigation()

    const navigateToInformationEntryScreen = () => {
        navigation.navigate('NameEntryScreen');
    };

    return (
        <TouchableOpacity onPress={navigateToInformationEntryScreen} style={styles.buttonContainer}>
            <Image
                source={require('../../../assets/EmailIconWhite.png')}
                resizeMode="contain"
                style={styles.emailIcon}
            />
            <Text style={styles.buttonDescription}>Sign up</Text>
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
    emailIcon: {
        height: '100%',
        width: "7%",
    },
    buttonDescription: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 18,
        color: "white",
        marginLeft: 5
    }
})

export default SignUpWithEmailButton