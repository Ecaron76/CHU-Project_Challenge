import { View } from 'react-native';
import SettingItem from './components/SettingItem';
import SettingsStyles from './Settings.styles';
import { useTheme } from '../shared/ThemeContext';

export default function SettingsPage() {
    const { theme } = useTheme();

    return (
        <View style={{ ...SettingsStyles.container, backgroundColor: theme.backgroundColor }}>
            <SettingItem
                iconName="weather-night"
                text="Mode sombre"
                hasToggle
                onToggle={(value) => console.log('Theme:', value)}
            />
            <SettingItem iconName="lock" text="Confidentialité" isPrivacy />
            <SettingItem
                iconName="exit-to-app"
                text="Déconnexion"
                isLogout
                style={{
                    ...SettingsStyles.settingItem,
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}
            />
        </View>
    );
}
