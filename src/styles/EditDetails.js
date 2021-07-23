import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({




    EditDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    edit_details_description: {
        backgroundColor: '#eee',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 20,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 120,
        padding: 10,
        marginTop: 50,
    },
    edit_details_1: {
        width: Dimensions.get('window').width - 50,
        flexDirection: 'column',
        paddingVertical: 20,
        borderRadius: 5,
        position: 'relative'
    },
    edit_details_details: {
        flexDirection: 'column',
        width: '100%',

    },
    titles: {
        width: '100%',
        fontSize: 15,
        fontFamily: 'ISBold',
        color: '#636363',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        paddingBottom: 10,
    },


    conditions_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },

    avilibiy_first: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 20,
        borderRadius: 20,
    },

    avilibiy_item: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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

    add_images_boxes: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        width: '100%',
    },
    images_box: {
        width: (Dimensions.get('window').width - 82) / 3,
        height: (Dimensions.get('window').width - 82) / 3,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ececec',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        resizeMode: 'cover',
    },

    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    select_image: {
        color: '#636363',
        fontSize: 50,
        // resizeMode: 'cover',
        borderRadius: 10
    },

    input: {
        textAlign: 'right',
        borderRadius: 15,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        paddingRight: 10,
        marginTop: 10,
        fontFamily: 'ISFBold',
        fontSize: 12
    },


    text_area: {
        width: '100%',
        backgroundColor: '#fff',
        color: '#636363',
        paddingRight: 10,
        textAlignVertical: 'top',
        minHeight: 180,
        borderRadius: 15,
        fontFamily: 'ISFBold',
        fontSize: 12,
        textAlign: 'right',
        textAlignVertical: 'top',
        marginTop: 10,
    }
    ,
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // padding: 10,

    },
    button: {
        backgroundColor: 'blue',
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    delete_condition: {
        width: 30,
        justifyContent: 'center',
        height: 30,
        alignItems: 'center'
    },
    conditions_parent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5

    },
    condition_text: {
        fontSize: 12,
        fontFamily: 'ISMedium',
        color: '#333',
    },
    capacity: {
        textAlign: 'right',
        borderRadius: 15,
        width: Dimensions.get('window').width - 50,
        height: 50,
        backgroundColor: '#fff',
        color: '#636363',
        marginTop: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        fontFamily: 'ISBold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    counters_title: {
        fontFamily: 'ISBold',
        fontSize: 12,
        color: '#333'
    },
    modal_boxes: {
        backgroundColor: '#fff',
        borderRadius: 15
    },
    picker_modal: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker_box: {
        width: '90%',
        paddingHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        overflow: 'hidden',
    },
    picker_item: {
        fontFamily: 'ISBold',
        paddingVertical: 10,
        fontSize: 12,
        textAlign: 'center',
        color: '#333'
    },
    picker_button: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        width: '100%',
        backgroundColor: '#fff',
        padding: 5
    },
    full_screen_map: {
        position: 'absolute',
        top: 11,
        left: 11,
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: 2
    }


})


export default styles;
