import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    paragraph: {
        textAlign: 'justify',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 8,
        color: '#00B4EC',
    },
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
