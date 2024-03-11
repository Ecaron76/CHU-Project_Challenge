import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.backgroundColor,
        padding: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        // backgroundColor: theme.theme === 'dark' ? 'black' : 'white',
    },
    icon: {
        marginRight: 16,
    },
    text: {
        flex: 1,
        fontSize: 18,
    },
    toggleButton: {
        marginLeft: 'auto',
    },
});
