import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({


    Notifications: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    account_box: {
        flexDirection: 'row',
        width: '90%',
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    account_title: {
        fontSize: 16,
        fontFamily: 'ISBold',
        color: '#333',
        textAlign: 'right'
    },




})


export default styles;
