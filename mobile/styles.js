import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f0f8ff',
    },
    screenContainer: {
        flex: 1,
        width: '100%',
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#343a40',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#495057',
        width: '100%',
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
    },
    navText: {
        color: '#adb5bd',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navTextActive: {
        color: '#ffffff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        margin: 10,
    },
});