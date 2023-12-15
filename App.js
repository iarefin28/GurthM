import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from './src/screens/SignInScreen';
import InformationEntryScreen from './src/screens/InformationEntryScreen';
import * as Font from 'expo-font';

export default function App() {
  const Stack = createNativeStackNavigator()
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync({
      'RethinkSans': require('./assets/fonts/RethinkSans.ttf'),
      'RethinkSans-Bold': require('./assets/fonts/RethinkSans-Bold.ttf')
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <View style={styles.root}>
          <Stack.Navigator initialRouteName="SignUpScreen">
            <Stack.Screen name="SignInS" component={SignInScreen} />
            <Stack.Screen name="InformationEntryScreen" component={InformationEntryScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
});
