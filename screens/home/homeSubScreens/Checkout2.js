import React, {useEffect, useState} from "react";
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Button,Icon } from "react-native-elements";
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
const Card=({slot})=>{
    return(
        <>
       <TouchableOpacity>
        <View style={{width:144,height:40,alignSelf:'center',justifyContent:'center',borderColor:'#D4D4D4',borderWidth:1,borderRadius:6,marginTop:15}}>
           <Text style={{fontFamily:'Poppins-Medium',fontSize:12,fontWeight:'400',color:'black',lineHeight:18,textAlign:'center'}}>{slot}</Text>
        </View>
        </TouchableOpacity>
        </>
    )
  }
  const data = [
    { label: '11:00 AM', value: '11:00 AM' },
    { label: '12:00 AM', value: '12:00 AM' },

  ];
const Checkout2=({navigation})=>{
    const [time,setTime]=useState();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);

    const getSlots=async()=>{
        try{
            const token=await generateToken({name:'anjnai'});
            console.log("Token: ",token);
            if(token!='error'){
                const userInfo=await AsyncStorage.getItem('userInfo');
                if(userInfo){
                    const {email_mobile}=JSON.parse(userInfo);
                    const slotRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
            
                        access_key:6808,
                        view_profile:1,
                        email_mobile:email_mobile
                    },{
                        headers:{
                            authorization:`Bearer ${token}`
                        }
                    });
                    console.log(slotRes);
                    if(slotRes.data.error==false){
                        // let userd={name:accRes.data.data.name,email_mobile:accRes.data.data.email_mobile,gender:accRes.data.data.gender,age:accRes.data.data.age,profile:accRes.data.data.profile,address:''};
                        // setUser({...userd});
                    }
                }
            }
        }catch(e){
            console.log("Error: ",e);
        }
    }

    useEffect(()=>{
        getSlots();
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    },[navigation])

    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <Text style={{color:'black',fontWeight:'600',fontSize:18,fontFamily:'Poppins-Medium',textAlign:'center',justifyContent:'center', lineHeight:26,marginTop:30}}>Checkout</Text>
            
            <View style={{paddingHorizontal:25,marginVertical:30,borderColor:'gray'}}>
                <Text style={{fontFamily:'Poppins-Regular',color:'#FF3737',fontSize:20,lineHeight:22.5,marginTop:20,fontWeight:'600'}}>Loreal Salon & Spa</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'black',fontSize:14,lineHeight:21,marginTop:20,fontWeight:'500'}}>Date</Text>
                <TouchableOpacity onPress={()=>setOpen(true)}>
                    <View style={{color:'black', width:171,height:32,borderColor:'black',borderWidth:1,textAlign:'center',textAlignVertical:'center',borderRadius:6,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'black',fontSize:14}}>{date.getDate()}</Text>
                        <Text style={{color:'black',fontSize:14}}>/</Text>
                        <Text style={{color:'black',fontSize:14}}>{date.getMonth()+1}</Text>
                        <Text style={{color:'black',fontSize:14}}>/</Text>
                        <Text style={{color:'black',fontSize:14}}>{date.getFullYear()}</Text>
                    </View>
                </TouchableOpacity>
                <DatePicker
                    modal
                    mode={'date'}
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false);
                    console.log(date);
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
                            <Text style={{fontFamily:'Poppins-Medium',color:'black',fontSize:14,lineHeight:21,marginTop:20,fontWeight:'500'}}>Select Hour</Text>
                <Dropdown
                        style={{width:144,borderColor:'black',borderWidth:1,alignItems:'center',paddingHorizontal:10,borderRadius:6,marginTop:10}}
                        selectedTextStyle={{fontSize:13,color:'black'}}
                        //   inputSearchStyle={styles.inputSearchStyle}
                        //   iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Time"
                        value={time}
                        onChange={(item) => {
                            setTime(item.label)
                        }}
                       
                        />
                <Text style={{fontFamily:'Poppins-Medium',color:'black',fontSize:14,lineHeight:21,marginTop:20,fontWeight:'500'}}>Select Slot</Text>
                <View style={{flexWrap:'wrap',flexDirection:'row', display:'flex', justifyContent:'space-between',marginTop:10,width:'100%'}}>
                    <Card slot='1:00 PM'/>
                    <Card slot='1:00 PM'/>
                    <Card slot='1:00 PM'/>
                    <Card slot='1:00 PM'/>
                </View>
            </View>
            <View style={{paddingHorizontal:25,width:'100%',position:'absolute',top:'88%'}}>
                <Button title={'Checkout & Pay'} onPress={()=>navigation.navigate('BookingConfirmed')} buttonStyle={{backgroundColor:'#FF3737',height:57,borderRadius:10,width:'100%'}} titleStyle={{color:'white'}}/>
            </View>
          
            
          
        </View>
    )
}

export default Checkout2;