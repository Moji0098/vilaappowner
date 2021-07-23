import React, { Component } from 'react';

import {
    Text, View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Animated
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import GradientButton from '../components/GradientButton';
import AsyncStorage from '@react-native-community/async-storage';

//style
import styles from '../styles/EnterCode'

class EnterCode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bg: '#dfdfdf',

            code: '1111',

            wrongCode: false,
            fadeText: new Animated.Value(1)


        }
    }


    // resend number 
    _sendNumber = () => {
        Actions.pop()
    }


    // validation and go home
    _goHome = async () => {
        // fetch ...
        //..
        //..
        if (this.state.code == '1111') {
            // go HOME
            Actions.Home();
            this._storeData();


        } else {

            // animation show permission 
            await this.setState({
                wrongCode: true
            })

            //text animation 
            Animated.timing(
                this.state.fadeText,
                {
                    toValue: 0,
                    duration: 2000,
                    delay: 3000
                }
            ).start()

            // set text animation opacity value
            // reset wrong number to default
            setTimeout(() => {
                this.setState({
                    wrongCode: false,
                    fadeText: new Animated.Value(1),
                })
            }, 5000)
        }

    }

    //
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@token', 'true')
            
        } catch (e) {
            // saving error
        }

    }

    render() {
        let { fadeText } = this.state


        return (
            <View style={styles.EnterCode}>
                <KeyboardAvoidingView style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} behavior="position">
                    <View style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={styles.box_1} >
                            <Text style={styles.my_code} >
                                کد فعال سازی
                            </Text>
                            <View style={styles.resend_box}>
                                <TouchableOpacity
                                    style={styles.Resend}
                                    activeOpacity={.6}
                                    onPress={this._sendNumber}
                                >
                                    <Text style={styles.resend_text}  >ارسال مجدد</Text>
                                </TouchableOpacity>
                                <Text style={styles.my_number}>+912 123 4567</Text>
                            </View>
                        </View>

                        <View style={styles.box_2} >
                            <Text style={styles.activation_code_text} >
                                کد فعال سازی خود را وارد کنید
                            </Text>

                            <View style={styles.code_show_box}>
                                <TextInput
                                    onFocus={() => {
                                        this.setState({ bg: '#C72A54' })
                                    }}
                                    onBlur={() => {
                                        this.setState({ bg: '#dfdfdf' })
                                    }} value={this.state.code}
                                    onChangeText={(e) => this.setState({ code: e.replace(/[^0-9]/g, '').trim() })}
                                    maxLength={4}
                                    value={this.state.code}
                                    style={{
                                        borderBottomColor: this.state.bg,
                                        marginHorizontal: 5,
                                        paddingHorizontal: 5,
                                        fontSize: 30,
                                        paddingBottom: 5,
                                        borderBottomWidth: 2,
                                        fontFamily: 'ISFMedium',
                                        textAlign: 'center',
                                        width: '60%',
                                        letterSpacing: 16
                                    }}
                                    keyboardType='numeric'
                                />

                            </View>
                            {
                                this.state.wrongCode ?
                                    <Animated.Text style={{
                                        height: 20,
                                        width: Dimensions.get('window').width - 100,
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'red',
                                        marginTop: 20,
                                        opacity: fadeText,
                                        textAlign: 'center'
                                    }} >
                                        کد وارد شده اشتباه است
                            </Animated.Text> :
                                    <Text style={{ height: 20, marginTop: 20, }}></Text>

                            }
                        </View>



                        <GradientButton
                            width={Dimensions.get('window').width - 100}
                            press={this._goHome}
                            activeOpacity={.6}
                            color_1="#36a35b"
                            color_2="#6fcf97"
                            height={50}
                            borderRadius={50}
                            textColor="#fff"
                            size={16}
                            title="ورود"
                            top={20}
                            bottom={100}
                        />
                       
                    </View>

                </KeyboardAvoidingView>
            </View>



        );
    }
}





export default EnterCode; 