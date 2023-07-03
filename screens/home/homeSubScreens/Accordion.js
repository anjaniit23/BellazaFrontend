import {  View,Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const Accordian=({items})=>{
    const [name,setNane]=useState('expand-more')
    return(

            <View style={{width:'100%',marginVertical:10}}>
                <TouchableOpacity
                    onPress={()=>setNane(()=>{
                        return name=='expand-less'?'expand-more':'expand-less';
                    })}
                    >
                <SafeAreaView  style={{width:'100%',flexDirection:'row',justifyContent:'space-between',borderColor:'gray',borderWidth:1,paddingHorizontal:10,height:46,alignItems:'center',borderRadius:10}}>
                <Text style={{fontSize:13,fontWeight:'500',fontFamily:'Poppins-Regular',lineHeight:19.5,color:'black'}}>Haircut(M)</Text>
                    {name=='expand-less'?(<Icon name={'expand-more'} size={25} color={'black'}/>):(<Icon name={'expand-less'} size={25} color={'black'}/>)}
                </SafeAreaView>
                </TouchableOpacity>
              {name=='expand-less'?(
                        <View>
                        {items}
                        </View>
              ):null} 
            </View>
    )
}

export default Accordian;