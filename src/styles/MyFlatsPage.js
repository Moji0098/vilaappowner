import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({

    MyFlatsPage: {
        backgroundColor: "#eee",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        flex: 1,

    },


    up: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#eee',
        borderBottomLeftRadius: 0,
        overflow: 'hidden',
        zIndex: 1,
    },

    requestBox: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingBottom: 200,
    },



    icon_parent: {
        width: 100,
        height: 100,
        backgroundColor: '#aaa',
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        elevation:10
    },



    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 20,

    },
    person_desc: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    person_name: {
        fontSize: 14,
        fontFamily: 'ISBold',
        marginTop: 10,
        color: '#fff'
    },
    bottom_icons: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%'
    },
    drawer_text: {
        fontSize: 12,
        color: '#A52D53',
        fontFamily: 'ISMedium',
        marginRight: 10,
    },



})


export default styles;
