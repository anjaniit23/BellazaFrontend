import React,{useEffect,useReducer,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
// import Toast from 'react-native-toast-message';

const TermsOfUse=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    //const navigation2 = useNavigation();
      useEffect(() => {
      },[]);
      
    return(
      
        <ScrollView style={{backgroundColor:'white',flex:1}}>
            <Header nav={navigation} title="Term Of Use"/>
            <View style={{paddingHorizontal:25,marginTop:10}}>
              
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>1. Introduction</Text>
            <Text>
            These terms and conditions may be amended from time to time. They apply to all
            our services directly or indirectly. By accessing, browsing and using our website
            or any of our applications through whatever platform (hereafter collectively
            referred to as the “Platform”) and/or by completing a booking, you (Customer/s,
            Visitor/s, User/s, Salon/s, Spa/s, Partner/s, He/She, His/Her) acknowledge and
            agree to have read, understood and agreed to the terms and conditions set out
            below (including the privacy statement).
            </Text>
            <Text>
            These pages, the content and infrastructure of this Platform, and the online salon
            booking service provided on this Platform are owned, operated and provided by
            Bellazza (“Bellazza.in”, “us”, “we” or “our”) and your use is subject to the terms
            and conditions set out below.
           </Text>
            <Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14}}>Bellazza Web Services</Text> is a Proprietorship firm existing under MSME. Its
            registered office is at   <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:12.2}}>253 ANTA CHAMKANI ,SHAHJAHANPUR U.P. 242001
          (INDIA)</Text>
            </Text>
            <Text>
            Through the Platform our Partners (salons & spas) are provided with an online
            service through which all types of salon for booking, and, simultaneously, offers
            the Visitors of the Platform (the “Customer/s”) the ability to directly book their
            salon services with any Partner. By making a booking through Bellazza, you enter
            into a direct (legally binding) contractual relationship with the service provider
            (Partner) at which you book. From the point at which you make your booking, we
            act solely as an intermediary between you and the provider (Partner), transmitting
            the details of your booking to the relevant service provider (Partner) and sending
            you a confirmation email for and on behalf of the service provider (Partner) if you
            have provided us with your e-mail address.
            allowed to resell, deep-link, use, copy, monitor, display, download or reproduce any
            content or information, software, products or services available on our Platform.
            </Text>
            <Text>
            The Partners are solely responsible for the quality and the performance of these
            services. Bellazza is only responsible for providing the platform. The online
            Payment Gateways available through Bellazza are owned and operated by a third
            party payment provider, Visa & MasterCard (the “Payment Gateways”). The
            Customer and the Partner both agree that Bellazza is not responsible whatsoever
            for the services of the Payment Gateways providers and the Customer agrees
            that under no circumstances whatsoever will he/she bring a claim against
            Bellazza for the services of the Payment Gateways providers. If a problem arises
            with the services of the Payment Gateway Providers or the Partner, the Customer
            can contact Bellazza, who may, in its sole discretion assist the Customer.
            </Text> 
            <Text>
            As the following Terms & Conditions in whole or in portions can be changed or
            modified at any time without prior notice. You should periodically visit this page
            to review the Terms & Conditions so you stay aware of any revision to which you
            are bound.
            </Text>
            <Text>
            Use of the Platform after any such changes constitutes your acceptance of the
            new Terms & Conditions. If you do not agree to abide by these or any future
            Terms & Conditions, do not use or access. (or continue to use or access) the
            Platform.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>USE OF THE PLATFORM</Text>
            <Text>
            Anybody (Customer & Partner) can access the Platform when available online.
            Bellazza can put the Platform offline due to any reason it may deem appropriate
            or amend its content and services without notice. Bellazza will not be liable if, for
            any reason, the Platform or any part of it will not be available at any time or for
            any period.
            </Text>
            <Text>
            The Customer is solely responsible for any access to the Platform made by third
            parties with his/her credentials.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>MIS-USE OF THE PLATFORM</Text>
            <Text>
            You undertake that all data provided by you on the Platform is true, complete and
            accurate. You undertake to keep such information updated at all times and are
            solely responsible for any loss that arises out of a misrepresentation.
            </Text>
            <Text>
            You will be held personally responsible for any misuse of the Platform. Bellazza
            may pursue a civil or criminal action in case you:
            </Text>
            <Text>
            a- Knowingly introduces viruses, Trojans, worms, logic bombs, time bombs,
            keystroke loggers, spyware, adware or other material, program or code which
            adversely affect the operation of any computer software or hardware (or is
            designed to do so) to the Platform.
            </Text>
            <Text>
            b- Gain or attempt to gain unauthorised access to the server on which the
            Platform is stored or any server, computer or database connected to the
            Platform
            </Text>
            <Text>
             c- Attack the Platform via a denial-of-service attack or a distributed denial-of
            service attack.
            </Text>
            <Text>
            d- Use the Platform for any reason that is contrary to law or public policy.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>REGISTRATION</Text>
            <Text>
            If you choose to register on the APP, you agree to provide and maintain true,
            accurate, current and complete information about yourself including your contact
            details as prompted by the platform’s registration form. Registration data and
            certain other information about you are governed by our Privacy Policy. Every
            person of legal age may register on Bellazza. A Customer that is under the age of
            18 shall not register as a User of the Platform and shall not transact on or use the
            Platform.
            </Text>
            <Text>
            Bellazza reserves the right to suspend or cancel any registration or login data
            /access to the Platform in case of User misuse of the Platform in particular with
            the data submitted by the customer as set out in a later section. Bellazza shall
            not be liable for any loss or damages whatsoever arising from a user’s inability to
            access any pages on the Platform.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>MEMBER ACCOUNT, PASSWORD & SECURITY</Text>
            <Text>
            You are responsible for maintaining the confidentiality of your password and
            account and are fully responsible for any and all activities that occur under your
            password or account. You agree and acknowledge that you may only create one
            account. You agree to:
            </Text>
            <Text>
            – Immediately notify Bellazza of any unauthorised use of your password or
            account or any other breach of security.
            </Text>
            <Text>
            – Ensure that you exit from your account at the end of each session when
            accessing the Platform. Bellazza will not be liable for any loss or damage arising
            from your failure to comply with this section.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            CORRESPONDANCE & COMMUNICATION
            </Text>
            <Text>
            By completing a booking, you agree to receive:
            </Text>
            <Text>
            1- An email (if provided) which we may send you shortly after booking, giving
            you information on your booking and providing you with certain information and
            offers (including third party offers) relevant to your booking and services.
            </Text>
            <Text>
            2- A phone call to confirm the (mobile) phone number provided in your
            booking.
            </Text>
            <Text>
            3- An email which we may send you after your service asking you to complete
            your service experience review. Please see our Privacy Policy for more
            information about how we may contact you.
            In order to duly complete and secure your booking, you need to use your correct
            email address and phone number. We are not responsible or liable for (and have
            no obligation to verify) any wrong or misspelt email address or inaccurate or
            wrong (mobile) phone number.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            DATA SUBMITTED BY THE USER
            </Text>
            <Text>
            The Customer can create his own account on the Platform through his login data
            which will give him access to further features, content and special promotions on
            the Platform.
            </Text>
            <Text>
            The Customer can, at any time, delete his account by sending an e-mail to our
            customer service support@Bellazza.in. will make its best effort to deactivate the
            account in a timely manner.
            </Text>
            <Text>
            All content submitted to or uploaded on the Platform by any User through his
            account, including without limitation, personal data, contact details, usernames,
            pseudonyms, text, comments, reviews, images, and all other information must be
            true, complete, correct and shall not offend any third party right and shall not in
            any way be considered against public policy or public morale or the applicable
            laws in the state of Qatar.
            </Text>
            <Text>
            The User agrees that Bellazza may, in its sole discretion, amend or delete any
            content, before or after publication or refuse the publication. The User warrants,
            represents and undertakes to Bellazza that his DATA shall not:
            </Text>
            <Text>
            a- Infringe the copyrights or database rights, trademarks, rights of privacy,
            publicity or other intellectual property or other rights of any other person or entity.
            b- Contain any material which is defamatory of any person.
            </Text>
            <Text>
            c- Contain misleading or deceptive statements or omissions or misrepresentation
            as to identity (or his affiliation with any person or entity.
            </Text>
            <Text>
            d- Breach any legal or fiduciary duty owed to a third party, such as a contractual
            duty or a duty of confidence.
            </Text>
            <Text>
            e- Advocate, promote, or assist discrimination based on race, sex, religion,
            nationality, disability, sexual orientation or age.
            </Text>
            <Text>
            f- violate any other applicable law, statute, ordinance, rule or regulation.
            Should the data submitted by the user not be compliant with the applicable law or
            the above set rules, and as a result of this, should Bellazza suffer a loss or
            damage, the USER shall be held liable and the USER agrees to indemnify Bellazza
            for all such loss or damage.
            </Text>
            <Text>
            Should the data submitted by the user have criminal implications, Bellazza
            reserves the right to pass it on to the relevant authorities and to disclose the
            customer identity to any third party who claims that any of the user data
            constitutes a violation of any of their rights.
            </Text>
            <Text>
            Apart from personal data which are protected according to the law and to the
            Privacy Policy, any other user data submitted to the Platform will be considered
            non-confidential and non-proprietary.
            </Text>
            <Text>
            All user data posted on the Platform will be linked to the user’s username
            provided at the time of registration.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            BOOKING
            </Text>
            <Text>
            You (Registered or Visitor) can use the search engine on the Platform to find a
            Partner (salon / spa / beauty parlour) on the basis of your selection (e.g. Gender,
            location, service type, services, date and time).
            </Text>
            <Text>
            By booking through the platform You accept, the Privacy Policy and concludes
            the contractual relationship with the Partner.
            </Text>
            <Text>
            If you are a registered user, the relevant booking will be confirmed by an email
            acknowledging receipt of the booking which may include, the date and time of the
            booking, the price of the booked services, the professional employee in charge of
            delivering the service/services.
            </Text>
            <Text>
            The booking process allows you to check and amend any errors before
            submitting the booking.
            </Text>
            <Text>
            If you choose to pay online, you must retain a copy of the transaction records.

            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            APPOINTMENTS
            </Text>
            <Text>
            The Customer must arrive 10 minutes prior to his/her appointment. The
            appointment is scheduled and confirmed according to the Salon’s specialist’s
            availability and specialty. If the Customer cannot make it to the appointment,
            Customer must contact Bellazza Customer Service. Customers must know and
            accept that arriving late will likely limit the time allocated for his/her service
            which might lessen the effectiveness and most importantly the Customer’s
            pleasure and enjoyment.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            SERVICES
            </Text>
            <Text>
            All services shown on the Platform, the images and/or descriptions of these
            services are for illustrative purposes only and actual services may vary from
            those images and/or descriptions. Bellazza requires the Partners to ensure that
            all information provided by them for display on their page is accurate, complete
            and not misleading in any way. Bellazza cannot verify the information which they
            provide to us. It will be each Partner’s responsibility to ensure that all of its
            services listed on the Platform are available and accurately described.
            </Text>
            <Text>
            It is the Customer sole responsibility to communicate to the Partner directly any
            medical or health-related conditions and/or special needs that might affect or be
            affected by any services (for example without limitation, allergy information and
            health issues).
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            BOOKING AMENDMENTS (CANCELLATION & CHANGE)
            </Text>
            <Text>
            If you are a registered Customer and you need or wish to reschedule the booking
            (time/date) or change employee or cancel the booking after you have received
            the confirmation email, you may change or cancel the booking directly on the
            Platform if you are doing it at least six (4) hours prior to the booking and the paid
            amount will be refunded to you as credit in your Bellazza account if you have paid
            online.
            </Text>
            <Text>
            In case you wish to change or cancel a booking later than six (4) hours before the
            applicable appointment, you should contact Bellazza customer service by calling
            +91 766 800 9430 or by live chat.
            </Text>
            <Text>
            If you are not a registered Customer and you need or wish to reschedule the
            booking (time/date) or change employee or cancel the booking you should
            contact Bellazza customer service by calling +91 766 800 9430 or by live chat.
            Should a booking be amended or cancelled on request of the Partner, the Partner
            will notify Bellazza to notify the customer and Bellazza will update the salon’s
            calendar on the Platform.
            </Text>
            <Text>
            In case of urgent cancellation by the Partner, the Partner may not use the
            Customer contact details that Bellazza has provided it with, according to the
            Privacy Policy, and must contact Bellazza customer service to communicate with
            the customer.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            NO SHOW
            </Text>
            <Text>
            In case the Customer doesn’t show to his/her appointment in Salon or at Home,
            The Customer agrees that Bellazza reserves the right to ban him/her from
            accessing/using the Platform again.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            PRICE, PAYMENT & INVOICING
            </Text>
            <Text>
            The prices for the services are displayed on the Partner’s profile page on the
            Platform and may vary from time to time upon exclusive decision of the Partner.
            </Text>
            <Text>
            The Platform contains details of a number of services and it is possible that,
            despite Bellazza’s best efforts, some of the prices and other information shown
            by the Partner on the Platform for certain services are incorrect / not updated as
            it is the Partner’s sole responsibility to keep its information accurate.
            </Text>
            <Text>
            Any charges incurred in making an online payment will be borne by the Partner.
            Bellazza accepts payments online using debit cards and credit cards (Visa,
            MasterCard).
            </Text>
            <Text>
            Bellazza takes reasonable care to ensure that the Online Payment Gateway is
            available and functioning at all times, but cannot guarantee continuous and
            uninterrupted access to such Payment Gateway as it is owned and operated by a
            third party. Bellazza also tries to ensure that customers' payments are processed
            promptly, but it is often difficult to predict the amount of time needed to complete
            processing because it is dependent upon many factors outside of Bellazza’s
            control, such as delays in the banking system or in card networks. Access to the
            Online Payment Gateways may be occasionally restricted to allow for repairs,
            maintenance or the introduction of new facilities or services. Bellazza will
            attempt to provide reasonable notice of any scheduled interruptions to such
            Payment Gateway and will use its best effort to procure the restoration of the
            Payment Gateway as soon as reasonably possible.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            CLAIMS
            </Text>
            <Text>
            If you are not satisfied with the Services provided by the Partner, you shall directly,
            at the time of the service, make your claims to the servicing Partner. You may
            also contact Bellazza customer service who will try to find a solution with the
            Partner. However, ultimately, the Partner is the only and sole responsible for the
            performance of the Services.
            </Text>
            <Text>
            If you have an issue with the Payment Gateway, you may contact Bellazza who
            will attempt to facilitate a solution.
            </Text>
            <Text>
            In order to improve or keep a high quality Partner´s Services, Customers can also
            leave their review on the relevant Partner’s page on the Platform. However, such
            reviews cannot be offensive, misrepresentative or false.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            REFUNDS
            </Text>
            <Text>
            If “Pay Online” is selected as the payment method, then the Customer full name
            used in the booking should exactly match that of the credit or debit card used to
            make the booking.
            </Text>
            <Text>
            No refunds will be done for online payments instead the money will be credited to
            the user’s account on Bellazza for future use. If you do not have an account you
            will need to register on Bellazza so that the refunded amount can be debited to
            your account for future use:
            </Text>
            <Text>
            If you wish to review, adjust or cancel your booking, please revert to the
            confirmation email and follow the instructions there.
            If you have a late or delayed arrival on the date of your booking, make sure to
            communicate this with Bellazza customer service representatives so they inform
            the salon when to expect you to avoid cancellation of your booking.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            INTELLECTUAL PROPERTY
            </Text>
            <Text>
            Bellazza contains content & features that are protected by copyright, patent,
            trademark, trade secret and other proprietary rights and laws. Except as expressly
            authorised by Bellazza, Customers and Partners agree not to modify, copy, frame,
            scrape, rent, lease, loan, sell, distribute or create derivative works based on the
            Platform or the Platform Content, in whole or in part. In connection with your use
            of the Platform you will not engage in or use any data mining, robots, scraping or
            similar data gathering or extraction methods.
            </Text>
            <Text>
            Any use of the Platform or the Platform Content other than as specifically
            authorised herein is strictly prohibited. The technology and software underlying
            the Platform or distributed in connection therewith is the property of Bellazza.
            Any user of the Platform agrees not to copy, modify, create a derivative work of,
            reverse engineer, reverse assemble or otherwise attempt to discover any source
            code, sell, assign, sublicense, or otherwise transfer any right in the Software.
            The Users may download and/or print out the content of the Platform only for
            personal, non-commercial use.
            </Text>
            <Text>
            The User is not entitled to change, modify and/or (re)-edit the digital or hard
            copies of any particular content of the Platform and/or add, modify and/or
            (re-)use certain photographs, texts, (graphic) images and/or video and/or audio
            content to the original content of the Platform.
            </Text>
            <Text>
            As stated above, no part of the Platform (in whole or in part) may be published in
            any way, duplicated, transmitted, distributed, reproduced, copied, modified and/or
            in any other way used or exploited (including but not limited to reproduction or
            storage on other website(s) or any electronic storage device).
            </Text>
            <Text>
            Bellazza reserves all rights regarding the https://www.Bellazza.in domain name
            and MOBILE APPS. Bellazza name and logos are trademarks and service marks
            of Bellazza. Other company, product, and service names and logos used and
            displayed via the
            </Text>
            <Text>
            Platforms may be trademarks or service marks of their respective owners who
            may or may not endorse or be affiliated with or connected to us.
            </Text>
            <Text>
            Nothing in this Terms & Conditions or the Platform should be construed as
            granting, by implication, estoppel, or otherwise, any licence or right to use any of
            Bellazza Trademarks displayed on the Platforms, without our prior written
            permission in each instance.
            </Text>
            <Text>
            Please remember that when a Customer uses a link to go from the Platform to
            another website, the Privacy Policy will no longer be applicable.
            </Text>
            <Text>
            LIABILITY
            </Text>
            <Text>
            Bellazza is not responsible whatsoever for the Services provided by the partners.
            </Text>
            <Text>
            Bellazza is not responsible whatsoever for the Online Payment Gateway, Bellazza
            declares and the Customer acknowledges to be aware that it is operated by a
            third payment service provider company.
            </Text>
            <Text>
            Bellazza is only responsible for the function of the Platform, however Bellazza
            may, in its sole discretion, operate the Platform as it deems necessary.
            
            </Text>
            <Text>
            Under no circumstances whatsoever will Bellazza be liable for any indirect
            damage, consequential damage or moral damage.
            </Text>
            <Text>
            Bellazza shall not be held responsible for the inaccuracy of the content generated
            on the Platform directly by the Partner. It is not Bellazza's duty to control the
            accuracy of such content. The content of the Platform may contain typing and/or
            material errors for which Bellazza shall not be held responsible.
            </Text>
            <Text>
            Bellazza reserves the right to terminate accounts that are inactive for an
            extended period of time. And reserves the right to change these general practices
            and limits at any time, in its sole discretion, with or without notice.
            </Text>
            <Text>
            Bellazza reserves the right to modify or discontinue, temporarily or permanently,
            the Platform (or any part thereof) with or without notice. Users agree that
            Bellazza will not be liable to you or to any third party for any modification,
            suspension or discontinuance of the service.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            DISPUTES
            </Text>
            <Text>
            The Customer is solely responsible for his/her interactions with any service
            provider or other user in connection with the Platform and Bellazza will have no
            liability or responsibility with respect thereto. Bellazza reserves the right, but has
            no obligation, to become involved in any way with disputes between a customer
            and any service provider or other user of the Platform. In the event of an issue
            and/or dispute with a service booked from any spa or salon using the Platform,
            you must contact the relevant spa / salon.
            </Text>
            <Text>
            Any dispute arising out of or in connection with these, including any question
            regarding its existence, validity or termination, shall be subject to the exclusive
            jurisdiction of the Courts of Qatar.   
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            MODIFICATION TO SERVICES
            </Text>
            <Text>
            The User acknowledges that Bellazza may establish general practices and limits
            concerning use of the Platform, including without limitation the maximum period
            of time that data or other content will be retained by the Platform and the
            maximum storage space that will be allocated on Bellazza’s servers on the
            customer’s behalf. The User agrees that Bellazza has no responsibility or liability
            for the deletion or failure to store any data or other content maintained or
            uploaded by the Platform.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            CONDITIONS OF USE
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            User Conduct:
            </Text>
            <Text>
            The user agrees to not use the Platform to:
            </Text>
            <Text>
            Interfere with or disrupt the Platform or servers or networks connected to the
            Platform, or disobey any requirements, procedures, policies or regulations of
            networks connected to the Platform.
            </Text>
            <Text>
            Violate any applicable national or international law, or any regulations having the
            force of law.
            </Text>
            <Text>
            Impersonate any person or entity, or falsely state or otherwise misrepresent
            his/her affiliation with a person or entity.
            </Text>
            <Text>
            Solicit personal information from anyone under the age of 18.
            </Text>
            <Text>
            Harvest or collect email addresses or other contact information of other users
            from the Platform by electronic or other means for the purposes of sending
            unsolicited emails or other unsolicited communications.
            </Text>
            <Text>
            Advertise or offer to sell or buy any goods or services for any business purpose
            that is not specifically authorised.
            </Text>
            <Text>
            Further or promote any criminal activity or enterprise or provide instructional
            information about illegal activities.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            TERMINATION
            </Text>
            <Text>
            The User agrees that Bellazza in its sole discretion, may suspend or terminate
            his/her account (or any part thereof) or use of the Platform and remove and
            discard any content within the Platform, for any reason, including, without
            limitation, for lack of use or if Bellazza believes that he/she has violated or acted
            inconsistently with the letter or spirit of these Terms and Conditions. Any
            suspected fraudulent, abusive or illegal activity that may be grounds for
            termination of his/her use of Platform, may be referred to appropriate law
            enforcement authorities. Bellazza may also in its sole discretion and at any time
            discontinue providing the Platform, or any part thereof, with or without notice.
            The User agrees that any termination of his/her access to the Platform under any
            provision of these Terms and Conditions may be effected without prior notice,
            and acknowledges and agrees that Bellazza may immediately deactivate or
            delete his/her account and all related information and files in his/her account
            and/or ban any further access to such files or the Platform. Further, the User
            agrees that Bellazza will not be liable to the user or any third party for any
            termination of his/her access to the Platform.
            </Text>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:14,marginBottom:-3}}>
            DISCLAIMER
            </Text>
            <Text>
            To the extent permitted by law, neither we nor any of our officers, directors,
            employees, representatives, subsidiaries, affiliated companies, distributors,
            affiliate (distribution) partners, licensees, agents or others involved in creating,
            sponsoring, promoting, or otherwise making available the site and its contents
            shall be liable for (i) any punitive, special, indirect or consequential loss or
            damages, any loss of production, loss of profit, loss of revenue, loss of contract,
            loss of or damage to goodwill or reputation, loss of claim, (ii) any inaccuracy
            relating to the (descriptive) information (including rates, availability and ratings)
            of the services as made available on our website, (iii) the services rendered or the
            products offered by the service provider or other business partners, (iv) any
            (direct, indirect, consequential or punitive) damages, losses or costs suffered,
            incurred or paid by you, pursuant to, arising out of or in connection with the use,
            inability to use or delay of our website, or (v) any (personal) injury, death, property
            damage, or other (direct, indirect, special, consequential or punitive) damages,
            losses or costs suffered, incurred or paid by you, whether due to (legal) acts,
            errors, breaches, (gross) negligence, willful misconduct, omissions,
            non-performance, misrepresentations, tort or strict liability by or (wholly or partly)
            attributable to the service or any of our other business partners (including any of
            their employees, directors, officers, agents, representatives or affiliated
            companies) whose products or service are (directly or indirectly) made available,
            offered or promoted on or through the website, including any (partial)
            cancellation, overbooking, strike, unavoidable casualty or any other event beyond
            our control.
            </Text>
            </View>
        </ScrollView>
    )
}

export default TermsOfUse;