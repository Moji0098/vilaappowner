import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Modal
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageSlider from 'react-native-image-slider';
import MapView, { Marker } from 'react-native-maps';


//components 
import GradientButton from './../components/GradientButton'

//style
import styles from '../styles/Details'

const arrowDown = <Icon style={{ top: -10 }} name="chevron-down" size={36} color="#ccc" />
const arrowUp = <Icon style={{ top: -10 }} name="chevron-up" size={36} color="#ccc" />






export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            availabilityText: 'بیشتر',
            availability: false,
            aboutvilaText: 'بیشتر',
            aboutvila: false,
            conditionsText: 'بیشتر',
            conditions: false,
            sliderFullScreen: false,
            markers: [
                { latitude: 35.68925, longitude: 51.3890, latitudeDelta: 0, longitudeDelta: 0, },
            ],
            imageSliderModal:false

        }
    }


    //close modal
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _backToResultImage = () => {
        Actions.ResultItemsPage()
    }


    //see  more funcion 
    _seeMore = (name, text) => {

        if (!this.state[name]) {
            this.setState({
                [text]: 'کمتر',
                [name]: true,
            })
        } else {
            this.setState({
                [text]: 'بیشتر',
                [name]: false,
            })
        }
    }




    render() {
        const images = [
            'https://placeimg.com/640/640/nature',
            'https://placeimg.com/640/640/people',
            'https://placeimg.com/640/640/animals',
            'https://placeimg.com/640/640/beer',
        ];


        // map marker
        const marker = (
            this.state.markers.map(marker => (
                <Marker coordinate={marker} key={marker.latitude}>
                    <Icon name="map-marker" size={45} color="#A52D53" />
                </Marker>
            ))
        )



        return (
            <View style={styles.Details}>

                {/* header */}

                <View style={styles.header} >
                    <Text style={styles.owner_answer}>پذیرفته شده</Text>
                    <TouchableOpacity style={styles.back_button} onPress={() => Actions.pop()} >
                        <Icon name="chevron-right" size={36} color="#fff" />
                    </TouchableOpacity>
                </View>

                <ScrollView  >
                    <SafeAreaView >
                        <ImageSlider
                            loopBothSides
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                <TouchableOpacity key={index}
                                    activeOpacity={1}
                                    // style={style}
                                    onPress={() => this.setState({ imageSliderModal: true })}>
                                    <Image source={{ uri: item }}
                                        // source={{ uri: item }}
                                        style={{
                                            width: Dimensions.get('window').width,
                                            height: Dimensions.get('window').width * .75,
                                            resizeMode: 'cover'
                                        }} />
                                </TouchableOpacity>
                            )}
                            customButtons={(position, move) => (
                                <View style={{
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    position: 'absolute',
                                    bottom: 0,
                                    paddingHorizontal: 20,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    height: 120,
                                    paddingBottom: 50
                                }}>
                                    <View style={{
                                        width: 100,
                                        textAlign: 'center',
                                        height: 30,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                    }}>
                                        <Text style={styles.image_counter}>{position + 1}  /  {images.length}</Text>
                                        <Icon name="image-area" style={{ marginLeft: 8 }} size={30} color="#fff" />
                                    </View>

                                    {/* price and back button fullscreen and resize mode */}
                                    <View style={{
                                        backgroundColor: 'rgba(255,255,255,1)',
                                        textAlign: 'center',
                                        paddingHorizontal: 50,
                                        height: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,
                                    }}>
                                        <Text style={{ color: '#333', fontSize: 16, fontFamily: 'ISFBold' }}>150,000 ت</Text>
                                    </View>

                                </View>
                            )}
                        />
                    </SafeAreaView>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.imageSliderModal}
                        onRequestClose={() => {
                            this.setState({ imageSliderModal: false })
                        }}>
                        <SafeAreaView style={{
                            height: Dimensions.get('window').height,
                            width: Dimensions.get('window').width,
                            zIndex: 9999,
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }}>
                            <ImageSlider
                                loopBothSides
                                images={images}
                                customSlide={({ index, item, style, width }) => (
                                    <TouchableOpacity key={index}
                                        activeOpacity={1}
                                        style={[style, {
                                            backgroundColor: '#000',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%'
                                        }]}
                                        onPress={() => this.setState({ imageSliderModal: false })}>
                                        <Image source={{ uri: item }}
                                            // source={{ uri: item }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                resizeMode: 'contain'
                                            }} />
                                    </TouchableOpacity>
                                )}
                                customButtons={(position, move) => (
                                    <View style={{
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        position: 'absolute',
                                        bottom: 0,
                                        paddingHorizontal: 20,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        height: 100,
                                        paddingBottom: 40
                                    }}>
                                        <View style={{
                                            width: 100,
                                            textAlign: 'center',
                                            height: 30,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 20,
                                        }}>
                                            <Text style={styles.image_counter}>{position + 1}  /  {images.length}</Text>
                                            <Icon name="image-area" style={{ marginLeft: 8 }} size={30} color="#fff" />
                                        </View>

                                        {/* price and back button fullscreen and resize mode */}

                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: '#33333320',
                                                padding: 10,
                                                width: 50,
                                                height: 50,
                                                borderRadius: 30,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                            onPress={() => this.setState({ imageSliderModal: false })}>

                                            <Icon name="chevron-right" size={36} color="#fff" />
                                        </TouchableOpacity>


                                    </View>
                                )}
                            />
                        </SafeAreaView>
                    </Modal>


                    <View style={{ top: -50,
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 40,
                        backgroundColor: '#fff',
                        alignItems: 'center',}}>

                        {/* icons */}
                        <View style={styles.vila_posibilities}>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>اتاق 2</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="door" color="#333" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>2 تختخواب </Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="hotel" color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>1 نفر</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="account-group" color="#636363" />
                                </View>
                            </View>
                            <View style={styles.posibility}>
                                <Text style={styles.posibility_text}>45 متر مربع</Text>
                                <View style={styles.posibility_icon_box} >
                                    <Icon size={15} name="city-variant-outline" color="#636363" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.about_vila}>
                            <View style={styles.about_vila_first}>
                                <Text style={styles.about_vila_title} >در مورد ویلا</Text>
                                <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                                {
                                    this.state.aboutvila ?
                                        <Text style={styles.about_vila_text} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                                        : null
                                }
                            </View>

                            {/* more btn */}
                            <TouchableOpacity
                                style={{ marginVertical: 10, alignItems: 'center' }}
                                onPress={(e) => this._seeMore('aboutvila', 'aboutvilaText')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                    marginVertical: 2
                                }}>{this.state.aboutvilaText}</Text>
                                {this.state.aboutvila ? arrowUp : arrowDown}
                            </TouchableOpacity>
                        </View>


                        <View style={styles.avilibiy} >
                            <Text style={styles.about_vila_title} >دسترسی </Text>
                            <View style={styles.avilibiy_first}>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >پارکینگ</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >WiFi</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >لباسشویی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >سیستم گرمایشی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >الکتریکی</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                <View style={styles.avilibiy_item} >
                                    <Text style={styles.avilibiy_text} >استخر</Text>
                                    <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                </View>
                                {
                                    this.state.availability ?
                                        <View style={styles.avilibiy_first}>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >پارکینگ</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >WiFi</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >لباسشویی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#bbb" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >سیستم گرمایشی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>
                                            <View style={styles.avilibiy_item} >
                                                <Text style={styles.avilibiy_text} >الکتریکی</Text>
                                                <Icon style={{ marginLeft: 5 }} size={15} name="check-circle-outline" color="#6FCF97" />
                                            </View>

                                        </View> : null

                                }
                            </View>

                            {/* more btn */}
                            <TouchableOpacity
                                style={{ marginVertical: 10, alignItems: 'center' }}
                                onPress={() => this._seeMore('availability', 'availabilityText')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                    marginVertical: 2
                                }} >{this.state.availabilityText}</Text>
                                {this.state.availability ? arrowUp : arrowDown}
                            </TouchableOpacity>


                        </View>

                        <View style={styles.conditions}>
                            <Text style={styles.about_vila_title}>شرایط</Text>

                            <Text style={styles.conditions_text}>1. آرام باشید و مراقب خودتان باشید.</Text>
                            <Text style={styles.conditions_text}>2. عاشق خودتان باشید .</Text>
                            <Text style={styles.conditions_text}>3. اتاق را کثیف نکنید </Text>
                            <Text style={styles.conditions_text}>4. اتاق را تمیز نکنید . </Text>


                            {this.state.conditions ?
                                <View>

                                    <Text style={styles.conditions_text}>5. آشغال نریزید </Text>
                                    <Text style={styles.conditions_text}>6. داخل اتاق سیگار نکشید . </Text>
                                    <Text style={styles.conditions_text}>7. دقت کنید </Text>
                                    <Text style={styles.conditions_text}>8. نماز اول وقت را فراموش نکنید </Text>
                                    <Text style={styles.conditions_text} >9. خدا را ناظر بر اعمال خود بدانید </Text>
                                </View> : null}
                            <TouchableOpacity
                                style={{ marginTop: 10, alignItems: 'center' }}
                                onPress={() => this._seeMore('conditions', 'conditionsText')}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'ISBold',
                                    color: '#ccc',
                                }} >{this.state.conditionsText}</Text>
                                {this.state.conditions ? arrowUp : arrowDown}
                            </TouchableOpacity>

                        </View>



                        <View style={{ width: '100%', height: Dimensions.get('window').width * .75, marginTop: 20 }}>
                            <MapView
                                style={{ flex: 1 }}
                                mapType="hybrid"
                                zoomLevel={7}
                                scrollEnabled={false}
                                initialRegion={this.state.markers[0]}
                                maxZoomLevel={16}
                            >
                                {marker}
                            </MapView>
                        </View>

                        <View style={styles.save_button}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >

                            <GradientButton
                                width="80%"
                                press={() => Actions.EditDetails()}
                                color_1="#dfdfdf"
                                color_2="#f1f1f1"
                                height={50}
                                borderRadius={30}
                                textColor="#9e9e9e"
                                size={16}
                                title="ویرایش"
                            />
                        </View>


                    </View>
                </ScrollView >
            </View>




        );
    }
}
