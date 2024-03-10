import React, { useContext, useState } from 'react';
import { View, Text, Pressable, Switch, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import SettingsStyles from '../Settings.styles';
import { ThemeContext } from '../../shared/ThemeContext';
import {LoginService} from "../../../services/LoginService/LoginService";

const SettingItem = ({ iconName, text, hasToggle, onToggle, isLogout, isPrivacy }) => {
    const navigation = useNavigation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [toggleValue, setToggleValue] = useState(theme === 'dark');

    const handleToggle = () => {
        const newToggleValue = !toggleValue;
        setToggleValue(newToggleValue);

        if (onToggle) {
            onToggle(newToggleValue ? 'dark' : 'light');
        }

        toggleTheme(); // This should update the theme in the context
    };

    const handlePress = () => {
        if (!hasToggle) {
            if (isLogout) {
                Alert.alert('Logout', 'Are you sure you want to logout?', [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Logout',
                        onPress: async () => {
                            await LoginService.disconnect();
                            navigation.navigate('PrivacyPage');
                        },
                    },
                ]);
            } else if (isPrivacy) {
                navigation.navigate('PrivacyPage');
            } else {
                console.log('Non-togglable item clicked');
            }
        }
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={SettingsStyles.settingItem}>
                <MaterialCommunityIcons name={iconName} size={24} color="black" style={SettingsStyles.icon} />
                <Text style={SettingsStyles.text}>{text}</Text>
                {hasToggle && (
                    <Switch
                        value={toggleValue}
                        onValueChange={handleToggle}
                        style={SettingsStyles.toggleButton}
                    />
                )}
            </View>
        </Pressable>
    );
};

export default SettingItem;
