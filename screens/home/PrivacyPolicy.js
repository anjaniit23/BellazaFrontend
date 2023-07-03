import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
// import Toast from 'react-native-toast-message';

const PrivacyPolicy=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    //const navigation2 = useNavigation();
      useEffect(() => {
      },[]);
      
    return(
      
        <ScrollView style={{backgroundColor:'white',flex:1}}>
            {/* <View style={{borderWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'6%'}}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../../statics/back.png')}  style={{backgroundColor:'#4e4060',width:30,height:30,borderRadius:100,borderWidth:1}}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',alignSelf:'center',marginRight:10,fontFamily:'Poppins-Regular',fontSize:18,fontWeight:'600'}}>Terms Of Use</Text>
                </View>
                <Text >'                 '</Text>
            </View> */}
            <Header nav={navigation} title="Privacy Policy"/>
            <View style={{paddingHorizontal:25,marginTop:10,marginBottom:50}}>
      
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>1. Introduction</Text>
            <Text>
            At Bellazza.in or Bellazza app, protecting your privacy is a priority and we want to
            remain worthy of the trust you place in us by using our Bellazza.in website and
            our services, provided by Bellazza Web services (we/us/our). To do this, we do
            everything we can to protect and secure all personal data that you share with us.
            We act in the interests of our customers and are transparent about the
            processing of your personal data. This Privacy Policy, which can be consulted at
            any time, explains in a clear and transparent manner how we use and process
            your personal data, so that you can easily understand our approach. In addition,
            we tell you how to contact us if you have any questions about your personal data,
            and we will be happy to help you. This Privacy Policy applies to all kinds of
            information that we collect through our internet platform or through other means
            associated with this platform (eg, contacting our customer service by e-mail).
            This Privacy Policy is subject to change from time to time. If you want to know
            more about your personal data, check this page regularly for the latest updates.
            </Text> 
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>2. What information is collected?</Text>
            <Text>
            First, we store the personal data that customers provide when entering them in
            our apps. This is the information communicated at the time of registration ( first
            name, password, telephone number, e-mail address, gender and date of birth). If
            you choose to create a Bellazza profile via the Google/Facebook functionality, in
            addition to the information mentioned above, we will collect your Facebook
            profile photo (no other information from your Facebook profile will be collected).
            We also keep data related to your account and your transactions. This aspect is
            necessary for the proper provision of services by us. As part of improving our
            services, we collect and store your usage data (e.g. IP address, type of medium
            used during your connection). It is also possible, on occasion, that you provide us
            with additional information / notes for your support by our partners. We store the
            transmitted information and process it in our database. If you contact us via
            email or via Intercom (communication tool located at the bottom right of our
            website), we keep a record of this conversation. This allows us to better assist
            you in future exchanges. All of the information listed above is neither visible nor
            publicly available on our site (apart from your first name and photo, if applicable,
            when you post a review on the Bellazza page of one of our partners). Here is a
            summary table showing what personal data we keep, for what purpose and on
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>
            Identification data:</Text><Text>
            name, password, phone number, e-mail address, gender and date of birth, profile
            picture identification service delivery to keep in touch legal obligation contractual
            Interest deemed legitimate (customer relationship management) Bank account
            data:banking or payment institution, account number, account type, account
            description, balance, available balance, currency service delivery legal obligation
            Contractual
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>
            Transaction data:</Text><Text>
            name, account number, bank or payment institution, customer access token,
            authorization payment services contractual
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>
            Usage data:</Text><Text>
            device brand, operating system, location, cookies, usage data, crash logs
            service delivery and improvement contractual permission
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>
            Extended data:</Text><Text>
            all kinds of data that you provide to us spontaneously or that we obtain by asking
            you questions service delivery interest deemed legitimate (improvement of our
            services)
    
            Communication:
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>3. With whom is this information shared?</Text>
            <Text>
            We take the security and handling of your personal information very seriously. We
            never share / sell your personal data to any business partner. However, in order to
            be able to offer you our services, we need to disclose some of your data to third
            parties, which can be divided into the following categories.
            Who receives your data? Why do they receive your data?
            Hosting providers To be able to store your data in highly secure databases with
            encrypted data transfer
            Partner(s) of Bellazza whose services you have requested To manage and
            finalise your booking. This information is intended for internal use and
            We pass on personal data to law enforcement agencies insofar as this is required
            by law or strictly necessary for the prevention, detection or prosecution of
            criminal acts or fraud, or if we are legally obliged to do so.
            This exchange of information will guarantee our partners maximum security
            (avoid “no shows” and “phantom profiles”). figure, any request for the
            deletion/modification of your personal data must be addressed directly to the
            salon(s) in question.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>4. What is the retention period of your data?</Text>
            <Text>
            Your personal data will be kept for as long as necessary for the purposes
            described in this privacy policy or at least as long as necessary to comply with
            regulatory requirements or to resolve any disputes. The retention periods applied
            by Bellazza take into account the laws and regulations which impose a specific
            retention period for certain categories of data. We may also archive your data
            until the expiry of the legal limitation periods, for reasons directly related to the
            establishment, exercise or defence of a legal right.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>5. How can you access and correct your personal information?</Text>
            <Text>
            You have the right to ask Bellazza to access and rectify your data. You also have,
            subject to specific conditions imposed by the legislation, the right to request the
            erasure of your personal data or the limitation of the processing of this data as
            well as the right to request the portability of your personal data. If your
            information was collected when registering on our site, you can easily change
            your surname, first name, date of birth and gender by logging into your Bellazza
            profile. To change your telephone number and/or your email address, or for any
            other question relating to your personal information, you can contact us by e-mail
            by sending a message to support@Bellazza.lu and we will endeavour to answer
            your question. request as soon as possible. As part of the processing of your
            request, we may ask you to provide us with the following:
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}> 6. Security</Text>
            <Text>
            We will take all steps reasonably necessary by law to ensure the secure treatment
            of your personal information in accordance with this Privacy Policy. To do this, we
            review and update our security measures based on currently available
            technologies. In addition, our employees and service providers who provide
            services related to our information systems are required to respect the
            confidentiality of personal information held by us. That said, we cannot be held
            responsible for events resulting from unauthorised access to your personal
            information, in the case of irreverent behaviour on the part of the user.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-8,marginTop:5}}>7. Your Agreement</Text>
            <Text>
            By using our website, you consent to our collection and use of your personal
            information as set out in this Privacy Policy. This Privacy Policy supersedes any
            policy previously adopted. We may change this policy at any time; please
            therefore consult it regularly on our website to take note of any updates. If you do
            not accept certain modifications, you must imperatively stop using our website
            and the services in question.
            </Text>
                        
            </View>
        </ScrollView>
    )
}

export default PrivacyPolicy;