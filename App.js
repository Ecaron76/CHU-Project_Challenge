import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/modules/Navigation/components/Tabs";
import LoginPage from "./src/modules/LoginPage/LoginPage";
import SettingsPage from "./src/modules/SettingsPage/SettingsPage";
import NotificationsPage from "./src/modules/NotificationsPage/NotificationsPage";
import { createStackNavigator } from '@react-navigation/stack';
import { loginStore } from './src/store/loginStore';


export default function App() {

const isLogged = loginStore((state) => state.isLogged);
console.log("isLogged = " + isLogged);

const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        { !isLogged ? // Si pas log on balance la page de login
          ( <>
            <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
            />
            </>
          ) : // sinon la stack normale de l'appli 
          (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
              <Stack.Screen name="Notifications" component={NotificationsPage} options={{ headerShown: true }} />
              <Stack.Screen name="Settings" component={SettingsPage} options={{ headerShown: true }} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
