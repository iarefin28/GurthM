import React from "react";
import { View, Text } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoggedInWrapper = () => {
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();

    useFocusEffect(() => {
        navigation.setOptions({
            title: "Lord Ishan",
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "black"
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: "RethinkSans"
            },
        })
    })

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black', 
                    borderTopColor: 'gray' 
                },
                tabBarActiveTintColor: 'white', // active tab color
                tabBarInactiveTintColor: 'gray', // inactive tab color
                tabBarShowLabel: false,
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="assignment" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Vault"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="backpack" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Fitness"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="fitness-center" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Journal"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu-book" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default LoggedInWrapper