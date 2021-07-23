import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
    Image,
    TouchableOpacity,
    BackHandler,
    ScrollView,
    ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';


//components 
import NoRequest from '../components/NoRequest';
import Requestitems from '../components/RequestItems';
import Header from '../components/Header';


//style
import styles from '../styles/Home'


const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.show(
            props.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        return null;
    }
    return null;
};


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            activeColor: '#A52D53',
            inactiveColor: '#555',
            tab: [true, false, false, false],
            exitBtnCounter: 0
        };
    }

    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER_REF'].openDrawer();
    }


    componentDidMount() {
        // for disable back btn
        BackHandler.addEventListener('hardwareBackPress', () => this._handleBackButton());
    }


    //custom back button
    _handleBackButton = async () => {
        if (this.state.exitBtnCounter === 0 && (Actions.currentScene === 'Home' || Actions.currentScene === 'SendNumber')) {
            await this.setState({
                exitBtnCounter: 1,
                visible: true
            })
        } else if (this.state.exitBtnCounter > 0 && (Actions.currentScene === 'Home' || Actions.currentScene === 'SendNumber')) {
            this.setState({ visible: false })
            BackHandler.exitApp()
        } else {
            Actions.pop()
        }
        return true;
    }


    // log out
    _exit = () => {
        this._removeData()
        Actions.reset('SendNumber')
    }
    _removeData = async () => {
        try {
            await AsyncStorage.removeItem('@token')
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

    // gor to rent page 
    _showRequestsNavigate = () => {
        Actions.RentPage()
    }


    // change tabs for request type
    _changeTab = (tab) => {
        this.setState({ tab: tab })
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
                onDrawerSlide={(e) => { }}
                onDrawerStateChanged={(e) => { }}
                onDrawerClose={(e) => { }}
                onDrawerOpen={(e) => { this._openDrawer.bind(this) }}
            >
                <Toast style={{ fontFamily: 'ISBold' }} visible={this.state.visible} message="برای خروج دوباره فشار دهید" />
                <View style={styles.home_cover} >

                    <Header
                        bgColor="#A52D53"
                        title="درخواست ها"
                        titleColor="#fff"
                        iconColor="#fff"
                        menu={true}
                        press={() => this._openDrawer()}
                        leftPress={()=>Actions.Notifications()}
                        notification={true}
                        borderColor="#A52D53"
                    />


                    {/* request box  */}
                    <View style={styles.up} >
                        <View style={styles.tab}>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [true, false, false, false])}>
                                <Icon name="gesture-tap" size={20} color={this.state.tab[0] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[0] ? this.state.activeColor : this.state.inactiveColor }]}>درخواست ها</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [false, true, false, false])}>
                                <Icon name="close-box-multiple" size={20} color={this.state.tab[1] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[1] ? this.state.activeColor : this.state.inactiveColor }]}>رد شده  </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [false, false, true, false])}>
                                <Icon name="alarm-check" size={20} color={this.state.tab[2] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[2] ? this.state.activeColor : this.state.inactiveColor }]}>تایید شده</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab_box} onPress={() => this._changeTab(tab = [false, false, false, true])}>
                                <Icon name="alarm-multiple" size={20} color={this.state.tab[3] ? this.state.activeColor : this.state.inactiveColor} />
                                <Text style={[styles.tab_text, { color: this.state.tab[3] ? this.state.activeColor : this.state.inactiveColor }]}>رزرو شده</Text>
                            </TouchableOpacity>

                        </View>
                        {
                            this.state.tab[0] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }

                        {
                            this.state.tab[1] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />

                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }


                        {
                            this.state.tab[2] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />

                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }
                        {
                            this.state.tab[3] ?
                                <ScrollView contentContainerStyle={styles.requestBox} >
                                    {/* <NoRequest /> */}
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />
                                    <Requestitems navigate={this._showRequestsNavigate} />

                                </ScrollView> : <Text style={{ height: 0 }}></Text>
                        }

                    </View>


                </View>








            </DrawerLayoutAndroid >


        );
    }
}

