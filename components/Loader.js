import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,TextInput,Modal,TouchableWithoutFeedback,ActivityIndicator} from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default Loader=()=>{
    return(
        <Modal 
                animationType="fade"
                transparent={true}
                visible={true}
                >
                <TouchableOpacity 
                        style={{height:'100%',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                        activeOpacity={1} 
                    >
                        <TouchableWithoutFeedback>
                        <View style={{backgroundColor:'white',position:'absolute',top:'25%',flexDirection:'row',borderRadius:0,height:90,justifyContent:'space-evenly',alignItems:'center',width:'80%',alignSelf:'center',padding:30,elevation:600}}>
                        <View style={{flex:1}}>
                            <ActivityIndicator color={'#FF3737'} size="large"/>
                        </View>
                        <View style={{flex:3}}>
                            <Text style={{color:'gray'}}>Please wait...</Text>
                        </View>
                        </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>  
                
        </Modal>
    )
  
}