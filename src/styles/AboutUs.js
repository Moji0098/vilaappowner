import { StyleSheet, Dimensions  } from 'react-native';


const styles = StyleSheet.create({


    AboutUs: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    body:{
        width:'90%',
        padding: 10,
        paddingBottom: 200,
        // alignItems: 'flex-end',
    },
    texts:{
        fontFamily:'ISMedium' , 
        fontSize:12,
        color:'#444'
    }


})


export default styles;
