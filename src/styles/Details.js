import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({
    Details: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        flex: 1,
        position: 'relative',
    },

    header: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 20,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 99999,
        width: '100%'
    },

    owner_answer: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        backgroundColor: '#6FCF97',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 2,
        textAlign: 'center',
        marginTop: 10
    },
    back_button: {
        backgroundColor: '#33333320',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        end: 10,
        position: 'absolute'
    },

    image_counter: {
        color: '#fff',
        fontFamily: 'ISFBold',
        marginTop: 3,
        fontSize: 12
    },


    header_price: {
        height: 150,
        backgroundColor: '#00000036',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    price: {
        fontSize: 30,
        fontFamily: 'ISFBold',
        color: '#fff',
        marginBottom: 50,
    },
    per_night: {
        fontSize: 10,
        fontFamily: 'ISBold',
        color: '#fff',
        marginBottom: 50,
        marginRight: 10,
    },






    body: {
        top: -50,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },


    vila_posibilities: {
        backgroundColor: '#f6f6f6',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
        padding: 15

    },
    posibility: {
        width: '25%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    posibility_text: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#333',
        marginRight: 5
    },
    posibility_icon_box: {
        backgroundColor: '#eee',
        width: 25,
        height: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posibility_icon: {
        width: 15,
        resizeMode: 'contain'
    },
    about_vila: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10
    },
    about_vila_first: {

    },
    about_vila_title: {
        fontSize: 15,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 10
    },
    about_vila_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },
    see_more: {
        width: '100%',
        alignItems: 'center',
        marginTop: 15,

    },
    see_more_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#c7c7c7',
    },


    avilibiy: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
    },
    avilibiy_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    avilibiy_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 5
    },


    avilibiy_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    avilibiy_icon: {
        marginLeft: 5
    },
    conditions: {
        backgroundColor: '#f6f6f6',
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
    },
    conditions_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    save_button: {
        width: Dimensions.get('window').width,
        flexGrow: 2,
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: '#fff',
        height: 160,
        top: -50,
        alignItems: 'center',
    }




})


export default styles;
