import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function Header({title}){
 const navigation = useNavigation();
  return(
    <View style={headerStyles.container}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image source={require('../statics/menu.png')}/>
        </TouchableOpacity>
        <Text style={{color:'black',fontWeight:'600',fontSize:18,fontFamily:'Poppins-Medium',textAlign:'center',justifyContent:'center', lineHeight:26,marginLeft:-50}}>{title}</Text>
        <Text style={{color:'black'}}></Text>
        
    </View>
    )
}

const headerStyles=StyleSheet.create({
   container:{
     
       width:'100%',
       backgroundColor:'white',
       elevation:0,
       height:50,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between',
       alignSelf:'center'
   }
})