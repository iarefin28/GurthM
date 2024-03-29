import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';



const ScreenOne = () => {
    const handleSwipe = (event) => {
        if (event.nativeEvent.state === State.END) {
            console.log("bye");
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.slide}>
                <View style={styles.swipeableArea}>
                    <PanGestureHandler onHandlerStateChange={handleSwipe} >
                        <View style={{ width: "90%", backgroundColor: "white", height: "100%" }}>
                            <Text>hi</Text>
                        </View>
                    </PanGestureHandler>
                </View>
            </View>
        </GestureHandlerRootView>
    );
};

const ScreenTwo = () => (
    <View style={styles.slide}>
        <Text style={styles.text}>Screen Two</Text>
    </View>
);


const handleScreenChangeBegin = (e, state, context) => {
    e.persist()
    console.log(e)
    console.log("hi")
}

const handleScreenChangeEnd = (e, state, context) => {
    console.log(context)
    console.log("bye")
}

const HomeScreen = () => {
    const [gMiniScreen, setScreen] = useState("Screen 1")

    const handleIndexChange = (index) => {
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
    };

    return (
        <View style={styles.GurthScreen}>
            <Animated.View style={{ backgroundColor: "black", height: "4%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "RethinkSans", color: "white" }}>{gMiniScreen}</Text>
            </Animated.View>
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                loop={false}
                showsPagination={false}
                onIndexChanged={handleIndexChange}
                onScrollBeginDrag={handleScreenChangeBegin}
                onMomentumScrollEnd={handleScreenChangeEnd}
            >
                <ScreenOne />
                <ScreenTwo />
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
        borderBottomWidth: 1,
        borderColor: "gray",
        borderTopWidth: 1,
        width: "100%",
        alignItems: "center",
    }
});

export default HomeScreen;