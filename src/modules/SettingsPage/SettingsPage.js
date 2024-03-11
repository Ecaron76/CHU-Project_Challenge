import { View } from 'react-native';
import SettingItem from './components/SettingItem';
import SettingsStyles from './Settings.styles';
import {themeStore} from "../../store/themeStore";

export default function SettingsPage() {
    const { setToggle } = themeStore();

    return (
        <View style={{ ...SettingsStyles.container }}>
            <SettingItem
                iconName="weather-night"
                text="Mode sombre"
                hasToggle
                onToggle={(value) => setToggle(value)}
            />
            <SettingItem iconName="lock" text="Confidentialité" isPrivacy />
            <SettingItem
                iconName="exit-to-app"
                text="Déconnexion"
                isLogout
                style={{
                    ...SettingsStyles.settingItem
                }}
            />
        </View>
    );
}
