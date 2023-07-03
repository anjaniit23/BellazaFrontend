import React from "react";
import { Share, View, Button, Text } from "react-native";
  
const Sharef = () => {
    const shareData = async () => {
        try {
            await Share.share({
                message:
                    'This is the demo text',
            });
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={{ marginTop: 80 }}>
            <Text style={{ fontSize: 18 }}>
                GeeksforGeeks React Native Share</Text>
            <Button onPress={shareData} title="Share" />
        </View>
    );
};
  
export default Sharef;