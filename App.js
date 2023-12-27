import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/modules/Navigation/components/Tabs";
import LoginPage from "./src/modules/LoginPage/LoginPage";
import SettingsPage from "./src/modules/SettingsPage/SettingsPage";
import NotificationsPage from "./src/modules/NotificationsPage/NotificationsPage";
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Notifications" component={NotificationsPage} options={{ headerShown: true }} />
      <Stack.Screen name="Settings" component={SettingsPage} options={{ headerShown: true }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


