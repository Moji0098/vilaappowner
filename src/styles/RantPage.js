import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({

    rent_page: {
        backgroundColor: '#f6f6f6',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    my_box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 160,
        marginTop: 20,
        width: Dimensions.get('window').width - 50,

    },
    box_1: {
        shadowColor: "#eee",
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        resizeMode: 'cover',

    },
    circle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        width: '50%',
        padding: 10
    },
    user_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#686868',
    },
    twins: {
        // width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 40
    },
    Modal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.8)',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    alarm_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#EEAF4B',
    }



})


export default styles;
