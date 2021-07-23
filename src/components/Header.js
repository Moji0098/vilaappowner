import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



{/* <Header title="درخواست ها"
        icon="arrow"
        color="#636363"
        press={()=>this._press}/> */}


const Header = (props) => (

    <View style={[styles.menu, { backgroundColor: props.bgColor, justifyContent: props.menu ? 'space-between' : 'flex-end'}]} >
        {
            props.menu ?
                <TouchableOpacity
                    style={styles.menu_icon}
                    onPress={props.leftPress}>
                    {props.notification ? <View style={[styles.notification_circle,{ backgroundColor:props.iconColor , borderColor:props.borderColor}]} ></View> : null}
                    <Icon name="bell-outline" size={32} color={props.iconColor} />
                </TouchableOpacity> : null

        }
        <View style={{flexDirection:'row', alignItems:'center'}} >
            <Text style={[styles.title, { color: props.titleColor }]} >{props.title}</Text>
            {
                props.menu ?
                    <TouchableOpacity style={styles.menu_icon} onPress={props.press}>
                        <Text style={{ position: 'absolute', top: 17, right: 10, borderRadius: 5, width: 24, height: 3, backgroundColor: props.iconColor }} ></Text>
                        <Text style={{ position: 'absolute', top: 25, right: 10, borderRadius: 5, width: 30, height: 3, backgroundColor: props.iconColor }} ></Text>
                        <Text style={{ position: 'absolute', top: 33, right: 10, borderRadius: 5, width: 20, height: 3, backgroundColor: props.iconColor }} ></Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.menu_icon} onPress={props.press}>
                        <Icon size={36} name={props.icon} color={props.iconColor} />
                    </TouchableOpacity>
            }
        </View>
    </View>

)

export default Header;

const styles = ({

    menu: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        paddingVertical: 5,
        alignItems: 'center',
    },

    title: {
        fontSize: 14,
        fontFamily: 'ISBold',
        textAlign: 'center',
    },
    menu_icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    notification_circle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        end: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 2,
        borderRadius: 20,
        zIndex: 99
    },


})



