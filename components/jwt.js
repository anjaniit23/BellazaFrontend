import { sign } from "react-native-pure-jwt";

export default generateToken=async()=>{
    try{
        const token= await sign(
            {
              iss: "aura",
              
              exp: new Date().getTime() + 3600 * 1000, // expiration date, required, in ms, absolute to 1/1/1970
              sub:'aura it solution'
            }, // body
            'AURA_IT', // secret
            {
              alg: "HS256"
            }
          );
        if(token){
            //console.log(token);
            return token;
        }
        
    //     jwt.sign({iss:'aura'}, 'AURA_IT',{algorithm: 'HS256',expiresIn:60000}, (err,token)=>{
    //         if(!err){
    //             return "Bearer " + token
    //        }
    //    })
    }catch(err){
        console.log("Error: ",err);
        return 'error'
    }
   
  }