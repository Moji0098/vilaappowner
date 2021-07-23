import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components 
import GradientButton from '../components/GradientButton';


//style
import styles from '../styles/AboutUs'


export default class AboutUs extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {

        return (
            <View style={styles.AboutUs} >
                    <View style={{
                        width:'80%',
                        padding:10,

                        justifyContent: 'center',
                        alignItems:'center', 
                        flexDirection:'row' ,
                        borderBottomWidth:1,
                        borderColor:'#eee',
                        }} >
                        <Text style={{ fontSize:30, fontWeight:'900', textAlign:'center' , color:'#333'}} >VILA</Text>
                        <Text style={{ fontSize:30, fontWeight:'900', textAlign:'center' , color:'#A52D53'}} >APP</Text>
                        <Text style={{ fontSize:14, fontWeight:'900', textAlign:'center' , color:'#636363', bottom:-5 , fontFamily:'ISF'}} >  v 1.0</Text>
                    </View>

                <ScrollView contentContainerStyle={styles.body}>
                    <Text style={styles.texts} >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با اس
                    </Text>
                    <Text style={styles.texts} >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    
                    </Text>
                    <Text style={styles.texts} >
                    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    
                    </Text>
                    <Text style={styles.texts} >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    
                    </Text>

                    <Text style={styles.texts} >
                    در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    
                    </Text>

                    <Text style={styles.texts} >
                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                    
                    </Text>
                </ScrollView>

            </View>

        );
    }
}

