import React,{useEffect, useState} from 'react';
import {View,Text,Modal, TouchableWithoutFeedback,StyleSheet,ImageBackground, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Accordion from '../homeSubScreens/Accordion';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const oneS=(
  <View style={{flexDirection:'row'}}>
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
  </View>
)
const twoS=(
  <View style={{flexDirection:'row'}}>
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
  </View>
)
const threeS=(
  <View style={{flexDirection:'row'}}>
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
  </View>
)
const fourS=(
  <View style={{flexDirection:'row'}}>
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
  </View>
)
const fiveS=(
  <View style={{flexDirection:'row'}}>
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
      <Image source={require('../../../statics/star.png')} style={{width:20,height:20}} />
  </View>
)
const Card=({name,time,price,duration,rm})=>{
  return(
      <>
     
      <View style={{width:'100%',height:70,alignSelf:'center',marginTop:0,paddingHorizontal:10,flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:1}}>
          <View style={{flex:1,justifyContent:'center'}}>
              <Text style={{color:'black',fontSize:13,fontWeight:'600',lineHeight:19.5}}>{name} </Text>
              <View style={{flexDirection:'row',marginTop:5}}>
                  <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'#748AF9',marginRight:15}}>₹ {price}/-</Text>
                  <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'black'}}>{duration}</Text>
              </View>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
            {rm=='remove'?(<Button title={'Remove'} titleStyle={{marginTop:-4,fontSize:12,color:'#FF3737'}} buttonStyle={{width:92,height:33,borderColor:'#FF3737',borderWidth:2,backgroundColor:'white',borderRadius:6}}/>):(<Button title={'Add'} titleStyle={{color:'white',marginTop:-4,fontSize:12}} buttonStyle={{ borderRadius:6,width:92,height:33,borderColor:'#FF3737',borderWidth:2,backgroundColor:'#FF3737'}}/>)} 
          </View>
      </View>
      </>
  )
}

const Services=()=>{
  const navigation=useNavigation();
  return(
    <View style={{backgroundColor:'white', width:'100%',alignItems:'flex-start'}}>
    <Accordion
      items={(<>
      <Card rm='remove' name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'} />
      <Card rm='add' name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'}/>
      </>)}
    />
      <Accordion
      items={(<>
      <Card rm='remove' name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'} />
      <Card rm='add' name={'Waxing'} time={'05:30 PM'} price={150} duration={'15 min'}/>
      </>)}
    />
    <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
      <View style={{width:'100%',borderRadius:10,height:70,backgroundColor:'#FF3737',alignSelf:'center',marginVertical:10,paddingHorizontal:15,flexDirection:'row'}}>
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'500',lineHeight:19.5,color:'white'}}>1 Item </Text>
            <View style={{flexDirection:'row',marginTop:5}}>
                <Text style={{fontFamily:'Poppins-Medium',fontWeight:'500',fontSize:11,color:'white',marginRight:15}}>₹ 150/-</Text>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{color:'white',fontFamily:'Poppins-Medium',fontWeight:'600',fontSize:15,lineHeight:22.5}}>Proceed to Checkout </Text>
          <Icon name="arrow-forward-ios"  color={'white'}/>
        </View>
    </View>
    </TouchableOpacity>
  </View>
  )
}

const ReviewCard=({name,review,ns})=>{
  return(
    <>
   
    <View style={{width:'100%',paddingVertical:17,alignSelf:'center',marginTop:0,paddingHorizontal:10,flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:1}}>
        <View style={{flex:1.2,justifyContent:'center'}}>
            <Text style={{color:'black',fontSize:13,fontWeight:'600',lineHeight:18,fontFamily:'Poppins-Medium'}}>{name} </Text>
            <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:11,lineHeight:15,color:'black',marginRight:15,marginTop:5}}>{review}</Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        {ns==5?(fiveS):((ns==4)?(fourS):((ns==3)?(threeS):((ns==2)?(twoS):(oneS))))}
        </View>
    </View>
    </>
)
}
const About=()=>{
  const [showModal,setShowModal]=useState(false);
  const [rating,setRating]=useState({desc:'',rating:1});
  const [ShowModal2,setShowModal2]=useState(false);
  const [reviews,setReviews]=useState([]);
  const clickadd=async()=>{
    
    try{
      //let a=[];
    //  a=reviews;
    //  a.push({ns:rating.rating,desc:rating.desc});
    //  setReviews([...a]);
      // const token=await generateToken({name:'anjnai'});
      // console.log("Token: ",token);
      // if(token!='error'){
      //     const userInfo=await AsyncStorage.getItem('userInfo');
      //     if(userInfo){
      //         const {user_id,name}=JSON.parse(userInfo);
      //         console.log("hi",user_id,name,rating)
      //         const addRevRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
      
      //             access_key:6808,
      //             add_rating:1,
      //             user_id:user_id,
      //             username:name,                 
      //             vendor_id:'119',
      //             description:rating.desc,
      //             no_of_rating :rating.rating,
      //         },{
      //             headers:{
      //                 authorization:`Bearer ${token}`,
      //                 'Content-Type':'multipart/form-data',
      //             }
      //         });
      //         console.log(addRevRes.data);
      //         if(addRevRes.data.error=='false'){
      //           setShowModal(false);
      //           setShowModal2(true)
      //             // let userd={name:accRes.data.data.name,email_mobile:accRes.data.data.email_mobile,gender:accRes.data.data.gender,age:accRes.data.data.age,profile:accRes.data.data.profile,address:''};
      //             // setUser({...userd});
      //         }
      //     }
      //     console.log('hi2')
          
      // }
      setShowModal(false);
      setShowModal2(true);
  }catch(e){
      console.log("Error: ",e);
  }
   
  }
  const getReviews=async()=>{
    try{
      const token=await generateToken();
      console.log("Token: ",token);
      if(token!='error'){
              const getRevRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
      
                  access_key:6808,
                  get_rating:1,
                  vendor_id:'119'
              },{
                  headers:{
                      authorization:`Bearer ${token}`,
                      'Content-Type':'multipart/form-data',
                  }
              });
              console.log(getRevRes.data);
              if(getRevRes.data.error=='false'){
               // console.log("inside hi");
                setReviews([...getRevRes.data.data]);
              }
            
              
          
      }
  }catch(e){
      console.log("Error: ",e);
  }
  }
  useEffect(()=>{
    //getReviews()
  },[])

  return(
    <View>
        <Modal 
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false)
        }}
        >
        <TouchableOpacity 
                style={{height:'100%',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                activeOpacity={1} 
                onPressOut={() => {setShowModal(false)}}
            >
                <TouchableWithoutFeedback>
                <View style={{backgroundColor:'white',position:'absolute',top:'25%',borderRadius:15,justifyContent:'space-evenly',width:'80%',alignSelf:'center',padding:30,elevation:600}}>
                            <Text style={{fontFamily:'Poppins-Medium',fontSize:18,fontWeight:'600',lineHeight:27,color:'#FF3737'}}>Add review </Text>
                            <View style={{marginTop:20}}>
                                <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',color:'black',lineHeight:15}}>Add rating</Text>
                                <View style={{flexDirection:'row'}}>
                                  <TouchableOpacity onPress={()=>setRating({...rating,rating:1})} >
                                  <Image source={(rating.rating>0?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={()=>setRating({...rating,rating:2})} >
                                  <Image source={(rating.rating>1?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={()=>setRating({...rating,rating:3})} >
                                  <Image source={(rating.rating>2?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={()=>setRating({...rating,rating:4})} >
                                  <Image source={(rating.rating>3?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={()=>setRating({...rating,rating:5})} >
                                  <Image source={(rating.rating>4?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                                  </TouchableOpacity>
                                </View>
                                <TextInput 
                                    style={{borderBottomColor:'#D9D9D9',borderBottomWidth:1,color:'black'}}
                                    editable={true}
                                    value={rating.desc}
                                    onChangeText={(text)=>{setRating({...rating,desc:text})}}
                                    placeholder="review"
                                    ></TextInput>
                            <Button onPress={()=>{clickadd()}} title={'Add'} buttonStyle={{backgroundColor:'#FF3737',width:93,height:40,borderRadius:10,alignSelf:'center',marginTop:30}} titleStyle={{color:'white'}}/>
                            </View>
                            

                        </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>  
        
        </Modal>
        <Modal 
                animationType="fade"
                transparent={true}
                visible={ShowModal2}
                onRequestClose={() => {
                   setShowModal2(false)
                }}
                >
                <TouchableOpacity 
                        style={{height:'100%',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                        activeOpacity={1} 
                        onPressOut={() => {setShowModal2(false)}}
                    >
                        <TouchableWithoutFeedback>
                        <View style={{backgroundColor:'white',position:'absolute',top:'25%',borderRadius:15,justifyContent:'space-evenly',width:'80%',alignSelf:'center',padding:30}}>
                            <Image style={{alignSelf:'center',width:65,height:65}} source={require('../../../statics/tick.png')}/>
                            <Text style={{fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'600',lineHeight:24,alignSelf:'center',width:'80%',textAlign:'center',color:'#FF3737',marginTop:15}}>Rating submitted</Text>          
                        </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>  
                
          </Modal>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis urna, interdum ut varius eget, ornare sit amet dolor. Quisque dictum aliquet nisi, et blandit leo facilisis eget. Suspendisse vitae mi rhoncus, aliquet dolor et, facilisis turpis. Curabitur ac placerat tellus. Cras at scelerisque est. </Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,borderBottomColor:'#DEDEDE',borderBottomWidth:1,paddingBottom:15}}>
      <Text style={{fontFamily:'Poppins-Medium',fontSize:17,fontWeight:'600',color:'black',lineHeight:25.5}}>Review & Rating</Text>
      <TouchableOpacity onPress={()=>setShowModal(true)}>
      <Text style={{fontFamily:'Poppins-Medium',fontSize:12,fontWeight:'500',color:'#FF3737',lineHeight:18}}>Add Review</Text>
      </TouchableOpacity>
      
    </View>
    <View style={{marginBottom:20}}>
      {reviews.length>0 && reviews.map((review)=>{return <ReviewCard key={review.id} name={review.username} review={review.description} ns={review.no_of_rating}/> })}
      {/* <ReviewCard name='Kaif' review='Nice & Very good behaviour' ns={4}/>
      <ReviewCard name='Kaif' review='Nice & Very good behaviour' ns={5}/>
      <ReviewCard name='Kaif' review='Nice & Very good behaviour' ns={4}/>
      <ReviewCard name='Kaif' review='Nice & Very good behaviour' ns={5}/> */}
    </View>
    
    </View>
  )
}
const  Haircutdetails=({navigation})=>{
    const [category,setCategory]=useState('Haircut');
    const [tab,setTab]=useState('services');
    return(
        <ScrollView style={{flex:1}}>
          <LinearGradient  colors={['white','white','white','white','white','white','black','black','black','black','black','black']} style={{width:'100%',height:280,alignItems:'center',justifyContent:'center',borderRadius:8,flex:1}}>
            {/* <ImageBackground source={require('../../../statics/poster.png')} resizeMode="cover" style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.6}}></ImageBackground> */}
            <Swiper
                style={styles.wrapper}
                activeDotColor="red"
                activeDot={<View style={{backgroundColor: '#FF3737', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                dot={<View style={{backgroundColor: 'white' , width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,borderColor:'gray',borderWidth:1}} />}
            >
                <View style={styles.slide1}>
                    <ImageBackground source={require('../../../statics/poster.png')} resizeMode="cover" style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.8}}></ImageBackground>
                </View>
                <View style={styles.slide2}>
                    <ImageBackground source={require('../../../statics/banner.png')} resizeMode="cover" style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.8}}></ImageBackground>
                </View>
                <View style={styles.slide3}>
                     <ImageBackground source={require('../../../statics/poster.png')} resizeMode="cover" style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.8}}></ImageBackground>
                </View>
                <View style={styles.slide4}>
                <ImageBackground source={require('../../../statics/poster.png')} resizeMode="cover" style={{width:'100%',height:'100%'}} imageStyle={{opacity:0.8}}></ImageBackground>
                </View>
            </Swiper>
          </LinearGradient>
           
            <View style={{backgroundColor:'white', width:'100%',alignItems:'flex-start',paddingHorizontal:25,borderTopLeftRadius:30,borderTopRightRadius:30,position:'relative',top:-70,flex:2,marginBottom:-70}} >

            <View style={{alignSelf:'flex-start',position:'relative',top:-60}}>
              <Text style={{fontSize:18,fontFamily:'Poppins-Medium',fontWeight:'600',lineHeight:27,color:'white'}}>Loreal Salon & Spa</Text>
              <Text style={{fontSize:15,fontFamily:'Poppins-Medium',fontWeight:'500',lineHeight:22.5,color:'white'}}>Lajpat nahar , Delhi</Text>
            </View>

            <View style={{backgroundColor:'#FF3737',width:70,height:70,alignItems:'center',justifyContent:'center',borderRadius:100,alignSelf:'flex-end',position:'absolute',top:-30,right:35}}><Icon name="favorite-border" size={33} color='white'/></View>
            <Text style={{fontSize:11,fontWeight:'500',fontFamily:'Poppins-Medium',width:'70%',alignSelf:'flex-start',paddingLeft:0,marginBottom:30,color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
            
            <View style={{flexDirection:'row',marginVertical:10}}>
              <TouchableOpacity onPress={()=>setTab('services')}>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:17,color:'black',fontWeight:'600',lineHeight:25.5,marginRight:40,borderBottomColor:'#FF3737',borderBottomWidth:(tab=='services'?2:0)}}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setTab('about')}>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:17,color:'black',fontWeight:'600',lineHeight:25.5,borderBottomColor:'#FF3737',borderBottomWidth:(tab=='about'?2:0)}}>About</Text>
              </TouchableOpacity>
            </View>
           {tab=='services'?<Services />:<About/>}
            </View>
        </ScrollView>
    )
}

export default Haircutdetails;
const styles = StyleSheet.create({
    wrapper: {
        marginTop:0
    },
    slide1: {
      flex: 1,
      backgroundColor:'none'
    },
    slide2: {
      flex: 1,
      backgroundColor:'none'
    },
    slide3: {
      flex: 1,
      backgroundColor:'none'
    },
    slide4: {
        flex: 1,
        backgroundColor:'none'
      },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })