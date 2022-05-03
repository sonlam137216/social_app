import React from "react";
import { View } from "react-native-web";

const NotificationItem = ({item}) => {
    console.log(item)
    return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.content}</Text>
        </View>
    )
}
export default NotificationItem