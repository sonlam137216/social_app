import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageReviews = ({ src }) => {
    return (
        <View style={styles.imageReviewContainer}>
            <Ionicons name="close-circle-sharp" style={styles.closeBtn} color="blue" />
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/wjbucloud/image/upload/v1651506774/uuz8k2xgonfhpkw65hfg.jpg',
                }}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageReviewContainer: {
        marginBottom: 10,
        height: 'fit-content',
        marginLeft: 10,
    },
    closeBtn: {
        position: 'absolute',
        fontSize: 20,
        top: -10,
        right: -10,
        zIndex: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
});

export default ImageReviews;
