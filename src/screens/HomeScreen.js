import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';


const ScreenOne = () => {
    const onSwipe = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            console.log('Swiped!');
            // Add your swipe handling logic here
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={onSwipe}>
                <View style={styles.slide}>
                    <View style={styles.swipeableArea}>
                        <Text>hi</Text>
                    </View>
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};


const ScreenTwo = () => (
    <View style={styles.slide}>
        <Text style={styles.text}>Screen Two</Text>
    </View>
);

const ScreenThree = () => (
    <View style={styles.slide}>
        <Text style={styles.text}>Screen Three</Text>
    </View>
);

const HomeScreen = () => {
    const [gMiniScreen, setScreen] = useState("Screen 1")
    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1


    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };


    const handleIndexChange = (index) => {
        fadeOut()
        setTimeout(() => {

        
        switch (index) {
            case 0:
                setScreen("Today's Tasks");
                break;
            case 1:
                setScreen("Agenda");
                break;
            default:
                setScreen("Other");
                break;
        }
        fadeIn()
    }, 20)
    };

    return (
        <View style={styles.GurthScreen}>
            <Animated.View style={{backgroundColor: "black", height: "4%", justifyContent: "center", alignItems: "center", opacity: fadeAnim}}>
                <Text style={{fontFamily: "RethinkSans", color: "white"}}>{gMiniScreen}</Text>
            </Animated.View>
            <Swiper style={styles.wrapper} showsButtons={false} loop={false} showsPagination={false}  onIndexChanged={handleIndexChange}>
                <ScreenOne />
                <ScreenTwo />
                <ScreenThree />
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    GurthScreen: {
        justifyContent: "column",
        height: "100%"
    },
    wrapper: {},
    slide: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: "center"
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontFamily: "RethinkSans",
        fontWeight: 'bold'
    },
    swipeableArea: {
        height: "10%",
        backgroundColor: "black",
        borderWidth: 1,
        borderColor: "gray",
        width: "90%",

    }
});

export default HomeScreen;
