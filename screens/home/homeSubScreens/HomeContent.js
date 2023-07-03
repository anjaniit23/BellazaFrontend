import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Voice from '@react-native-community/voice';
import Header from '../../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const oneS=(
    <View style={{flexDirection:'row',marginTop:-5}}>
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const twoS=(
    <View style={{flexDirection:'row',marginTop:-5}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const threeS=(
    <View style={{flexDirection:'row',marginTop:-5}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const fourS=(
    <View style={{flexDirection:'row',marginTop:-5}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const fiveS=(
    <View style={{flexDirection:'row',marginTop:-5}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const CardScroll=({source,nav,val,key})=>{
   
    
    return(
        <TouchableOpacity onPress={()=>nav.navigate('Haircut')}>
            <Image style={{marginHorizontal:20,width:200,height:130,borderRadius:10}} source={source}/>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:2}}>Loreal Salon & Spa</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:200,justifyContent:'center',alignItems:'center'}}>
                <Text style={{flex:1,fontFamily:'Poppins-Regular',fontSize:12,fontWeight:'600',lineHeight:18,color:'#4CAF50',paddingLeft:25,marginBottom:1}}>Open</Text>
                <Icon name="schedule" size={15} color="#FF3737" style={{flex:1}}/>
                <Text style={{flex:3,fontFamily:'Poppins-Regular',fontSize:12,fontWeight:'500',lineHeight:18,color:'black',paddingLeft:4,marginBottom:1}}>10 Am to 11:30 Pm</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:198,alignItems:'center',paddingLeft:25}}>
                {val==5?(fiveS):((val==4)?(fourS):((val==3)?(threeS):((val==2)?(twoS):(oneS))))}
                <Text style={{flex:1,fontFamily:'Poppins-Regular',fontSize:10,fontWeight:'500',lineHeight:24,color:'black',paddingLeft:25,marginBottom:2}}>11.5k Ratings</Text>
            </View>
        </TouchableOpacity>
    )
}
const BannerScroll=({nav,source})=>{
    useEffect(()=>{
        //console.log(source);
    })
    return(
       // <TouchableOpacity >
              <Image source={source} style={{width:'90%',height:115,alignSelf:'center',borderRadius:15}}/>
       // </TouchableOpacity>
    )
}

const ServiceScroll=({source,service,key,category,changeCateg})=>{
    return(
        <View  style={{borderRadius:8,marginHorizontal:20,height:70,width:70}}>
            <TouchableOpacity onPress={()=>changeCateg(service)}>
                {category==service? ( 
                <LinearGradient  colors={['#FF5353','#FF5353','#FF5353', '#9A0000DB']} style={{width:'100%',height:65,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                     <Image source={source}  style={{width:25, height:25,alignSelf:'center'}}/>
                </LinearGradient>)
                :(
                <View style={{borderRadius:8,height:65,width:66,backgroundColor:'#F6F6F6',justifyContent:'center'}}>
                    <Image source={source}  style={{width:25, height:25,alignSelf:'center'}}/>
                </View>
                )}
                
            </TouchableOpacity>
           
           <Text style={{fontFamily:'Poppins-Regular',fontSize:11,fontWeight:'500',lineHeight:17,color:'black',textAlign:'center',textTransform:'capitalize',marginTop:5}}>{service}</Text>
        </View>
    )
}
const VoiceST=({navigation})=>{
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [started, setStarted] = useState(false);
    const [results, setResults] = useState([]);
    const [search,setSearch]=useState()
    const [partialResults, setPartialResults] = useState([]);
    const  onSpeechStart = (e) => {
        setStarted(true)
    };
    const onSpeechEnd = () => {
        setStarted(false);
    };
    const onSpeechError = (e) => {
        setError(JSON.stringify(e.error));
    };
    const onSpeechResults = (e) => {
        setSearch(e.value[0])
        setResults(e.value);
        
       
       
    };
    const onSpeechPartialResults = (e) => {
        setSearch(e.value[0])
        // setPartialResults(e.value);
        console.log("res",e.value[0]);
      
    };
    const onSpeechVolumeChanged = (e) => {
        setPitch(e.value);
        // console.log(e.value);
    };
    const startSpeechRecognizing = async () => {
        setPitch('')
        setError('')
        setStarted(true)
        setResults([])
        setPartialResults([])
       
        try {
            await Voice.start('en-US',{EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS: 1000});
            } catch (e) {
            console.error(e);
            }
    };
const stopSpeechRecognizing = async () => {

        try {
            setStarted(false);
        	await Voice.stop();
           
        } catch (e) {
        	console.error(e);
        }
    };
    useEffect(()=>{
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    },[])
    return(
        <>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',paddingRight:0,alignSelf:'center'}}>
                
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',borderColor:'gray',borderWidth:1,width:'85%',backgroundColor:'#F9F9F9',paddingLeft:5,borderRadius:8,height:45}}>
                    <Icon
                        name="search"
                        size={24}
                        color="gray"
                        iconStyle={{alignSelf:'flex-start'}}
                    />
                    <TextInput
                        style={{width:'76%',borderWidth:0,borderRadius:0, color: 'black',alignSelf:'center',backgroundColor:'transparent',marginTop:0,overflow:'scroll'}}
                    
                        multiline={true}
                        horizontal={true}
                        editable={true}
                        onChangeText={(text)=>{setSearch(text)}}
                        value={search}
                        placeholderTextColor = "gray"
                        placeholder=" Search for salon, Services etc"
                ></TextInput>
                    <View>
                    {started==false?(
                        <TouchableOpacity
                            onPress={()=> startSpeechRecognizing() }
                            style={{ marginVertical: 1 }}>
                            <Icon name="mic" size={25}  color="gray"/>
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity
                            onPress={()=> stopSpeechRecognizing() }
                            style={{ marginVertical: 1 }}>
                            <Icon name="fiber-manual-record" size={25}  color="red"/>
                        </TouchableOpacity>
                    )}
                       
                    </View>
               
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Filters',{nav:navigation,ns:4})}>
                    <View style={{alignItems:'center',width:40}}>
                        <LinearGradient  colors={['#FF5353','#FF5353','#FF5353', '#9A0000DB']} style={{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                            <Icon name="tune" size={30} color="white"/>
                    </LinearGradient>
                    </View>
                </TouchableOpacity>
               
            </View>
        {/* <View style={{borderColor:'gray',borderWidth:1,width:'80%',alignSelf:'center'}}>
        {started==false?
            <TouchableOpacity
                onPress={()=> startSpeechRecognizing() }
                style={{ marginVertical: 100 }}>
                 <Icon name="mic" size={35} />
            </TouchableOpacity>
            :
            <TouchableOpacity
                onPress={()=> stopSpeechRecognizing() }
                style={{ marginVertical: 100 }}>
                   <Icon name="fiber-manual-record" size={35} />
            </TouchableOpacity>}
           
            </View> */}
        </>
        
        )
}
const HomeContent=({navigation})=>{
    const [category,setCategory]=useState('');
    const [bansrcs,setBansrcs]=useState({src1:'',src2:'',src3:''})
    const changeCateg=(service)=>{
        setCategory(service);
       
    }
    const getVendorServices=async()=>{
        try{
            const token=await generateToken({name:'anjnai'});
            console.log("Token: ",token);
            if(token!='error'){
                const userInfo=await AsyncStorage.getItem('userInfo');
                if(userInfo){
                    const {email_mobile}=JSON.parse(userInfo);
                    const accRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
            
                        access_key:6808,
                        get_vendor_services:1,
                        email_mobile:email_mobile
                    },{
                        headers:{
                            authorization:`Bearer ${token}`,
                            'Content-Type':'multipart/form-data',
                        }
                    });
                    console.log(accRes.data);
                    if(accRes.data.error==false){
                        // let userd={name:accRes.data.data.name,email_mobile:accRes.data.data.email_mobile,gender:accRes.data.data.gender,age:accRes.data.data.age,profile:accRes.data.data.profile,address:''};
                        // setUser({...userd});
                    }
                }
            }
        }catch(e){
            console.log("Error: ",e);
        }
        
    }
    const getBanners=async()=>{
        try{
            const token=await generateToken();
            console.log("Token: ",token);
            if(token!='error'){
                const banRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
        
                    access_key:6808,
                    get_banner:1,
                },{
                    headers:{
                        authorization:`Bearer ${token}`,
                        'Content-Type':'multipart/form-data',
                    }
                });
                console.log(banRes.data);
                if(banRes.data.error=='false'){
                    setBansrcs({src1:banRes.data.data.banner_1,src2:banRes.data.data.banner_2,src3:banRes.data.data.banner_3,});
                    console.log("hi",bansrcs);
                }
               
            }
        }catch(e){
            console.log("Error: ",e);
        }
    }
    useEffect(()=>{
      //  getVendorServices();
      //  getBanners();
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',height:500,flex:1}}>
            <Header nav={navigation} title="Home"/>
            <VoiceST navigation={navigation}/>
           
           <View style={{height:200,width:'100%',justifyContent:'center',alignItems:'center'}}>
          {/* {bansrcs.src1!=''? */}
           <Swiper
                style={styles.wrapper}
                activeDotColor="red"
                activeDot={<View style={{backgroundColor: '#FF3737', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                dot={<View style={{backgroundColor: 'white' , width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,borderColor:'gray',borderWidth:1}} />}
            > 
                    <View style={styles.slide1}>
                        <BannerScroll source={require('../../../statics/poster.png')} nav={navigation}/>
                    </View>
                    <View style={styles.slide2}>
                        <BannerScroll source={require('../../../statics/poster.png')} nav={navigation}/>
                    </View>
                    <View style={styles.slide3}>
                        <BannerScroll source={require('../../../statics/poster.png')} nav={navigation}/>
                    </View>
            </Swiper> 
          {/* :null} */}
           </View>
           <Text style={{fontFamily:'Poppins-Regular',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,paddingBottom:10}}>Top Services</Text>
           <View style={{height:95,marginBottom:0}}>
            <ScrollView  horizontal={true} >
                <ServiceScroll changeCateg={changeCateg} source={(category=='Haircut'?require('../../../statics/haircutw.png'):require('../../../statics/haircut.png'))} service={'Haircut'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} source={(category=='Massage'?require('../../../statics/massagew.png'):require('../../../statics/massage.png'))} service={'Massage'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} source={(category=='Spa'?require('../../../statics/spaw.png'):require('../../../statics/spa.png'))} service={'Spa'} category={category}/>
                <ServiceScroll changeCateg={changeCateg} source={(category=='Shaving'?require('../../../statics/shavingw.png'):require('../../../statics/shaving.png'))} service={'Shaving'} category={category}/>
                {/* <ServiceScroll changeCateg={changeCateg} source={require('../../../statics/banner.png')} service={'Haicut'} category={category}/> */}
                
            </ScrollView>
           </View>
           
          
           <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
            <Text style={{fontFamily:'Poppins-Regular',color:'white'}}>Curated for you</Text>
            <Icon name="chevron-right"
                size={24}
                color='white'
                />
           </View>
           <Text style={{fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:15}}>Best  Rated Salon</Text>
           <View style={{height:200,marginBottom:20,}}>
            <ScrollView horizontal={true} >
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={3} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={5} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={2} nav={navigation} source={require('../../../statics/movImg.png')}/>
              
            </ScrollView>
           </View>
           <Text style={{fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:15}}>Top Salonist</Text>
           <View style={{height:200,marginBottom:20,}}>
            <ScrollView horizontal={true} >
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={3} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={5} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={2} nav={navigation} source={require('../../../statics/movImg.png')}/>
              
            </ScrollView>
           </View>
           <Text style={{fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:15}}>Top Hair cutting Salon</Text>
           <View style={{height:200,marginBottom:20,}}>
            <ScrollView horizontal={true} >
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={3} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={5} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={2} nav={navigation} source={require('../../../statics/movImg.png')}/>
              
            </ScrollView>
           </View>
           <Text style={{fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'600',lineHeight:24,color:'black',paddingLeft:25,marginBottom:15}}>Top Massage Salon</Text>
           <View style={{height:200,marginBottom:20,}}>
            <ScrollView horizontal={true} >
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={3} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={4} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={5} nav={navigation} source={require('../../../statics/movImg.png')}/>
                <CardScroll val={2} nav={navigation} source={require('../../../statics/movImg.png')}/>
              
            </ScrollView>
           </View>
        </ScrollView>
    )
}

export default HomeContent;
const styles = StyleSheet.create({
    wrapper: {
        marginTop:30
    },
    slide1: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide4: {
        flex: 1,
        backgroundColor: 'white'
      },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })