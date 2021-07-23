import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';


//components 
import ResultItems from '../components/ResultItems';
import NoFlat from '../components/NoFlat';
import Header from '../components/Header'

//style
import styles from '../styles/MyFlatsPage'


export default class MyFlatsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newRequestBtn:true
        };
    }

    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }


    // log out
    _exit = () => {
        console.log(111)
        this._removeData()
        Actions.replace('SendNumber')
    }
    _removeData = async () => {
        try {
            await AsyncStorage.removeItem('@token')
            console.log(AsyncStorage.getItem('@token'))
        } catch (e) {

        }
    }


    //drawer actions
    _navigate = (path) => {
        //go to route
        Actions[path]()

        //close drawer
        this.refs['DRAWER_REF'].closeDrawer();

    }



    // go to detail page
    _showDetail = () => {
        Actions.Details()
    }



    // run when scroll requests and show hide new request button 
    _onScroll = async (event) => {
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.state.offset ? 'down' : 'up';

        if (direction === 'down') {
            await this.setState({ newRequestBtn: false, offset: currentOffset })
        } else {
            await this.setState({ newRequestBtn: true, offset: currentOffset })
        }

    }


    render() {

        const navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                {/* <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text> */}
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 20,
                    backgroundColor: '#A52D53',
                    width: '100%',
                    marginBottom:10
                }} >
                    <View style={styles.icon_parent} >
                            <Image style={styles.icon} source={require('../../Assets/Images/jason.webp')} />
                    </View>
                    <View style={styles.person_desc} >
                        <Text style={styles.person_name} >علی تقوی</Text>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={(e) => this._navigate('MyFlatsPage')}>
                    <Text style={styles.drawer_text}>ویلاهای من</Text>
                    <Icon size={22} name="home-outline" color="#A52D53" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={(e) => this._navigate('Home')}>
                    <Text style={styles.drawer_text}>درخواست ها</Text>
                    <Icon size={22} name="home-city-outline" color="#A52D53" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Profile')}>
                    <Text style={styles.drawer_text}>پروفایل</Text>
                    <Icon name="account-outline" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to Archives */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Archives')}>
                    <Text style={styles.drawer_text}>آرشیو</Text>
                    <Icon name="calendar-clock" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to support */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Support')}>
                    <Text style={styles.drawer_text}>پشتیبانی</Text>
                    <Icon name="face-agent" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to about us */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('AboutUs')}>
                    <Text style={styles.drawer_text}>درباره ما</Text>
                    <Icon name="information-outline" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* got to rules */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={() => this._navigate('Rules')}>
                    <Text style={styles.drawer_text}>قوانین و مقررات</Text>
                    <Icon name="book-open-page-variant" size={24} color="#A52D53" />
                </TouchableOpacity>

                {/* EXIT */}
                <TouchableOpacity activeOpacity={.6} style={styles.bottom_icons} onPress={this._exit}>
                    <Text style={styles.drawer_text}>خروج</Text>
                    <Icon name="exit-to-app" size={24} color="#A52D53" />
                </TouchableOpacity>
            </View>
        );



        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerSlide={(e) => { console.log('1') }}
                onDrawerStateChanged={(e) => { console.log('2') }}
                onDrawerClose={(e) => { console.log('close') }}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >
                <View style={styles.MyFlatsPage} >

                    <Header
                        bgColor="#eee"
                        title="ویلاهای من"
                        titleColor="#636363"
                        iconColor="#636363"
                        menu={true}
                        press={() => this._openDrawer()}
                        leftPress={()=>Actions.Notifications()}
                        notification={true}
                        borderColor="#fff"
                    />


                    {/* request box  */}
                    <View style={styles.up} >

                        <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.requestBox} >
                            {/* <NoFlat press={()=> alert('yyy')} /> */}
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                            <ResultItems navigate={this._showDetail} />
                        </ScrollView>
                    </View>

                    {
                        this.state.newRequestBtn ?
                            <TouchableOpacity activeOpacity={.9}
                                style={{
                                    position: 'absolute',
                                    top: Dimensions.get('window').height - 80,
                                    zIndex: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                                onPress={this._requestModalOpen}>
                                <LinearGradient
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['#838383', '#636363']}
                                    style={{
                                        borderRadius: 40,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        elevation: 10,
                                        flexDirection: 'row',
                                        paddingHorizontal: 30,
                                        paddingVertical: 5
                                    }}>
                                    <Text style={{
                                        fontFamily: 'ISFBold',
                                        fontSize: 12,
                                        color: '#fff',
                                    }} >ثبت  ویلا     </Text>
                                    <Icon style={{ marginLeft: 10 }} name="plus" size={30} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity> : null
                    }



                </View>

            </DrawerLayoutAndroid >


        );
    }
}
