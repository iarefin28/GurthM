import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from './src/screens/SignInScreen';
import InformationEntryScreen from './src/screens/InformationEntryScreen';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <View style={styles.root}>
          <Stack.Navigator initialRouteName="SignUpScreen">
            <Stack.Screen name="SignInS" component={SignInScreen} />
            <Stack.Screen name="InformationEntryScreen" component={InformationEntryScreen}/>
          </Stack.Navigator>
        </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
});
