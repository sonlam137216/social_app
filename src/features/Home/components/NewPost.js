import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native';
import Header from '../../../shareComponents/Header';
import ImageReviews from '../../../shareComponents/ImageReviews';

const NewPost = ({ navigation }) => {
    return (
        <View style={styles.newPostContainer}>
            <Header screenName="New Post" />
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.infoContainer}>
                        <Image
                            source={{
                                uri: 'https://res.cloudinary.com/wjbucloud/image/upload/v1652176269/chqpcf5x2td5raoqbgpx.jpg',
                            }}
                            style={styles.imageStyles}
                        />
                        <View>
                            <Text style={styles.name}>Khang Hoàng</Text>
                            <Text
                                style={styles.date}
                            >{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</Text>
                        </View>
                    </View>
                    <TouchableHighlight activeOpacity={0.6} underlayColor="green">
                        <Text style={styles.postBtn}>Đăng</Text>
                    </TouchableHighlight>
                </View>
                <TextInput
                    placeholder="Hôm nay bạn cảm thấy thế nào?"
                    style={styles.content}
                    multiline
                    numberOfLines={10}
                ></TextInput>
                <View style={styles.imageReviews}>
                    <ScrollView horizontal showsHorizontalScrollIndicator style={{ paddingTop: 10, marginLeft: -10 }}>
                        <ImageReviews />
                        <ImageReviews />
                        <ImageReviews />
                        <ImageReviews />
                        <ImageReviews />
                        <ImageReviews />
                        <ImageReviews />
                        <ImageReviews />
                    </ScrollView>
                </View>
            </View>
            <Button title="Photo/Video"></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    newPostContainer: {
        padding: 20,
    },
    imageStyles: {
        width: 50,
        height: 50,
        borderRadius: 50,
        flexShrink: 0,
        marginRight: 10,
    },
    infoContainer: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 17,
    },
    date: {
        fontSize: 15,
        color: 'grey',
    },
    content: {
        flex: 1,
        height: 50,
        padding: 10,
        outlineStyle: 'none',
        marginVertical: 15,
    },
    imageReviews: {
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 10,
    },
    postBtn: {
        fontSize: 16,
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default NewPost;
