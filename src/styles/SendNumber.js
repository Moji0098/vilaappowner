import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({


    send_number: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A52D53',
        height: Dimensions.get('window').height,
    },
    bg_image: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo_box: {
        width: 160,
        height: 160,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20
    },

    input_box: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 100,
        borderRadius: 15,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: '#fff'
    },

    input_box_1: {
        height: 45,
        paddingLeft: 10,
        fontSize: 12,
        fontFamily: 'ISFBold'
    },
    input_box_2: {
        height: 45,
        width: '70%',
        paddingLeft: 10,
        fontSize: 18,
        letterSpacing: 5,
        fontFamily: 'ISFBold',
    },
    number_inputs: {
        marginTop: 50,
    },
    number_inputs_title: {
        color: '#999',
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'ISBold',

    },


})


export default styles;
