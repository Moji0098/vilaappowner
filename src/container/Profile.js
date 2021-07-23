import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    NativeModules,
    TouchableOpacity,
    ImageBackground,
    Modal
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import DatePicker from 'react-native-jalaali-date-picker'


//components 
import GradientButton from '../components/GradientButton';


//style
import styles from '../styles/Profile'


// import ImagePicker from 'react-native-image-picker';
var ImagePicker = NativeModules.ImageCropPicker;

// images for upload
var imgs = []


export default class EditProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dateModal: false
        }
    }


    _saveInfo = () => {
        Actions.Home()
    }


    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }



    // pick image 
    pickSingleImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then((image) => {
            imgs.push({ uri: image.path, width: image.width, height: image.height, mime: image.mime });
            this.setState({
                image: imgs
            });
        })
    }

    // show selected images
    renderAsset(image) {

        // return <Image  style={styles.images_box} source={image} />

        return <ImageBackground style={styles.images_box} imageStyle={{}} source={image}>
            <View style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                padding: 2,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                alignItems: 'center'
            }}>
                <Icon name="delete" size={20} color="red" />

            </View>
        </ImageBackground>
    }


    // delete selected images
    _deleteImage = (key) => {
        imgs.splice(0, 1)
        this.setState({
            image: null,
        });
    }



    render() {

        return (
            <KeyboardAvoidingView style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} behavior="padding">

                <View style={styles.EditProfile}>
                    <View style={styles.icon_parent} >
                        <View style={styles.icon_cover} >
                            {this.state.image ? this.state.image.map(i =>
                                <TouchableOpacity activeOpacity={.8} style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 22,
                                    overflow: 'hidden'
                                }} onPress={() =>
                                    this._deleteImage(i.uri)} key={i.uri}>{this.renderAsset(i)}
                                </TouchableOpacity>)
                                :
                                <TouchableOpacity onPress={this.pickSingleImage} activeOpacity={.8} >
                                    <Icon style={styles.icon} size={40} name="account-outline" color="#fff" />
                                </TouchableOpacity>}
                            {
                                !this.state.image ?
                                    <TouchableOpacity activeOpacity={.8}
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,.3)',
                                            padding: 2,
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            left: 0,
                                            alignItems: 'center',
                                            width: '100%',
                                            height: 20
                                        }}
                                        onPress={this.pickSingleImage}>
                                        <Icon name="image-plus" size={16} color="#fff" />
                                    </TouchableOpacity>
                                    : null
                            }

                        </View>
                    </View>

                    {/* <View style={styles.account_box}>
                       
                        <Text style={styles.account_text} >
                            برای دریافت صورت حساب نیاز به پست  الکترونیک و دیگر اطلاعات شما داریم
                        </Text>
                    </View> */}
                    <View style={styles.account_form}>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="نام و نام خانوادگی"
                                placeholderTextColor="#999"
                            />
                            <Icon size={20} name="account-outline" color="#A52D53" />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="ایمیل"
                                placeholderTextColor="#999"
                            />
                            <Icon size={20} name="email-outline" color="#A52D53" />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 8,
                            width: Dimensions.get('window').width - 40,
                        }}>
                            
                            <View style={{
                                backgroundColor: '#fff',
                                height: 40,
                                width: '49%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 20,
                                borderRadius: 15,
                                elevation: 1,
                                overflow: 'hidden'
                            }} >
                                <TextInput
                                    style={{
                                        backgroundColor: '#fff',
                                        height: 40,
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        textAlign: 'right',
                                        paddingRight: 10,
                                        width: '90%',
                                        color: '#333'
                                    }}
                                    onChangeText={(countryCode) => this.setState({ countryCode })}
                                    placeholder="شهر"
                                    placeholderTextColor="#999"
                                />
                                <Icon size={20} name="home-city-outline" color="#A52D53" />
                            </View>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 40,
                                width: '49%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 20,
                                borderRadius: 15,
                                elevation: 1,
                                overflow: 'hidden'
                            }} >
                                <TextInput
                                    style={{
                                        backgroundColor: '#fff',
                                        height: 40,
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        textAlign: 'right',
                                        paddingRight: 10,
                                        width: '90%',
                                        color: '#333'
                                    }}
                                    onChangeText={(countryCode) => this.setState({ countryCode })}
                                    placeholder="استان"
                                    placeholderTextColor="#999"
                                />
                                <Icon size={20} name="city-variant-outline" color="#A52D53" />
                            </View>
                        </View>

                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="آدرس"
                                placeholderTextColor="#999"
                            />
                            <Icon size={20} name="map-marker-outline" color="#A52D53" />
                        </View>

                       
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 8,
                            width: Dimensions.get('window').width - 40,
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                paddingHorizontal: 20,
                                borderRadius: 15,
                                height: 40,
                                width: '49%',
                                elevation: 1,
                                overflow: 'hidden'
                            }} onPress={() => this.setState({ dateModal: true })}>
                                <Text style={[styles.form_birthday, { color: this.state.birthday ? '#333' : '#999' }]}>
                                    {this.state.birthday ? this.state.birthday : 'تاریخ تولد'}
                                </Text>
                                <Icon size={20} name="calendar-today" color="#A52D53" />
                            </TouchableOpacity>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 40,
                                width: '49%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 20,
                                borderRadius: 15,
                                elevation: 1,
                                overflow: 'hidden'
                            }} >
                                <TextInput
                                    style={{
                                        backgroundColor: '#fff',
                                        height: 40,
                                        fontSize: 10,
                                        fontFamily: 'ISBold',
                                        textAlign: 'right',
                                        paddingRight: 10,
                                        width: '90%',
                                        color: '#333'
                                    }}
                                    onChangeText={(countryCode) => this.setState({ countryCode })}
                                    placeholder="شماره همراه"
                                    placeholderTextColor="#999"
                                />
                                <Icon size={20} name="cellphone" color="#A52D53" />
                            </View>
                        </View>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.dateModal}
                            onRequestClose={() => {
                                this.setState({ dateModal: false })
                            }}>
                            <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ dateModal: false })} >
                                <View style={styles.picker_box}>
                                    <DatePicker
                                        defDateString="1990/04/21"
                                        showTitleDate={false}
                                        onChangeDate={(date) => {
                                            this.setState({ birthday: date.format('jYYYY/jM/jD') })
                                        }}
                                        dateStyle={{ fontFamily: "ISFMedium", color: '#636363', fontSize: 16 }}
                                        btnStyle={{ backgroundColor: 'transparent' }}
                                        arrowTintColor="#ddd"
                                        arrowSize={30}
                                        dateBoxStyle={{ borderRadius: 15, backgroundColor: '#ddd' }}
                                        btnUnderlayColor="transparent"
                                    />
                                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
                                        activeOpacity={.7}
                                        onPress={() => this.setState({ dateModal: false })} >
                                        <Text style={{
                                            width: 100,
                                            paddingVertical: 10,
                                            paddingHorizontal: 20,
                                            fontSize: 12,
                                            fontFamily: 'ISBold',
                                            backgroundColor: '#A52D53',
                                            borderRadius: 10,
                                            textAlign: "center",
                                            color: '#fff'
                                        }}
                                            onPress={() => this.setState({ dateModal: false })}
                                        >تایید</Text>
                                    </TouchableOpacity>

                                </View>
                            </TouchableOpacity>
                        </Modal>


                    </View>



                    <GradientButton
                        width={Dimensions.get('window').width - 40}
                        press={this._saveInfo}
                        activeOpacity={.6}
                        color_1="#36a35b"
                        color_2="#6fcf97"
                        height={50}
                        borderRadius={50}
                        textColor="#fff"
                        size={16}
                        title="ذخیره"
                        top={40}
                        bottom={0}
                    />



                </View>
            </KeyboardAvoidingView>



        );
    }
}
