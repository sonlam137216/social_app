import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    Alert,
    TouchableNativeFeedback,
    Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { timeDifference } from '../../helpers/timeDifference';

import Colors from '../../constants/Colors';
import ENV from '../../env';
import { useDispatch } from 'react-redux';
import * as postActions from '../../store/actions/posts';
import { showMessage } from 'react-native-flash-message';
import VerifiedUser from '../../constants/VerifiedUser';

const Card = (props) => {
    const { post, userId, fromUserProfile } = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // const liked = post.likes.indexOf(userId) !== -1;

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [imageUri, setImageUri] = useState('');
    const [showFullBody, setShowFullBody] = useState(false);
    const [imgWidth, setImgWidth] = useState();
    const [imgHeight, setImgHeight] = useState();

    const [isShowSetting, setIsShowSetting] = useState(false);

    const onImageErrorHandler = () => {
        setImageUri(ENV.defaultImageUri);
    };

    let TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }

    const deleteHandler = (id) => {
        Alert.alert('Are you sure?', 'Do you really want to delete this post?', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes',
                style: 'destructive',
                onPress: async () => {
                    await dispatch(postActions.deletePost(id));
                    showMessage({
                        message: 'Your post was successfully deleted.',
                        type: 'success',
                        icon: { icon: 'success', position: 'left' },
                        duration: 3000,
                    });
                },
            },
        ]);
    };

    const checkLike = () => {
        let match = post.likes.indexOf(userId) !== -1;
        return match;
    };

    const toggleSetting = () => {
        setIsShowSetting(!isShowSetting);
    };

    const toggleLike = async () => {
        props.toggleLikeHandler(post._id, checkLike());
    };

    useEffect(() => {
        let imageUrl = `${ENV.apiUrl}/post/photo/${post._id}?${new Date(post.updated)}`;
        Image.getSize(imageUrl, (width, height) => {
            // calculate image width and height
            const screenWidth = Dimensions.get('window').width;
            const scaleFactor = width / screenWidth;
            const imageHeight = height / scaleFactor;
            setImgWidth(screenWidth);
            setImgHeight(imageHeight);
        });
    }, []);

    return (
        <TouchableComp
            background={Platform.OS === 'ios' ? undefined : TouchableNativeFeedback.Ripple('#b3b3b3')}
            onPress={
                () => (fromUserProfile ? {} : {})
                // : navigation.navigate('UserProfile', {
                //     userId: post.postedBy._id,
                //     name: post.postedBy.name,
                //   })
            }
        >
            <View style={styles.card}>
                <View style={styles.cardTitleHeader}>
                    <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                        <View style={styles.timeContainer}>
                            <Image
                                style={styles.userIcon}
                                source={{
                                    uri:
                                        imageUri ||
                                        `${ENV.apiUrl}/user/photo/${post.postedBy._id}?${new Date(
                                            post.postedBy.updated
                                        )}`,
                                }}
                                onError={onImageErrorHandler}
                            />
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                }}
                                onPress={() =>
                                    navigation.navigate('UserProfile', {
                                        userId: post.postedBy._id,
                                        name: post.postedBy.name,
                                    })
                                }
                            >
                                {post.postedBy.name + ' '}
                                {VerifiedUser.verifiedUsersId.includes(post.postedBy._id) && (
                                    <Octicons name="verified" size={18} color={Colors.brightBlue} />
                                )}
                            </Text>
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <Ionicons
                                name={Platform.OS === 'android' ? 'md-time' : 'ios-time'}
                                size={14}
                                style={{ marginTop: 3 }}
                            />
                            <Text> {timeDifference(new Date(), new Date(post.created))} </Text>
                            {post.postedBy._id === userId && (
                                <View>
                                    <TouchableOpacity style={styles.socialBarButton} onPress={toggleSetting}>
                                        <Ionicons
                                            name="md-settings"
                                            size={24}
                                            style={{ marginLeft: 5 }}
                                            color={checkLike() ? 'red' : 'black'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View>
                </View>

                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>{post.title ? post.title : ''}</Text>
                        {post.body && post.body.length > 30 ? (
                            <View>
                                {showFullBody ? (
                                    <Text style={styles.description}>
                                        {post.body}
                                        <Text
                                            style={{ color: Colors.brightBlue }}
                                            onPress={() => setShowFullBody((prevState) => !prevState)}
                                        >
                                            {' '}
                                            Read Less
                                        </Text>
                                    </Text>
                                ) : (
                                    <Text style={styles.description}>
                                        {post.body.substring(0, 60)}
                                        <Text
                                            style={{ color: Colors.brightBlue }}
                                            onPress={() => setShowFullBody((prevState) => !prevState)}
                                        >
                                            ...Read More
                                        </Text>
                                    </Text>
                                )}
                            </View>
                        ) : (
                            <Text style={styles.description}> {post.body} </Text>
                        )}
                    </View>
                </View>
                <View style={styles.cardImageContainer}>
                    <Image
                        style={{ ...styles.cardImage }}
                        source={{
                            uri: `${ENV.apiUrl}/post/photo/${post._id}?${new Date(post.updated)}`,
                        }}
                        onLoad={() => setIsImageLoading(false)}
                    />
                    <ActivityIndicator
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}
                        animating={isImageLoading}
                        size="large"
                        color={Colors.brightBlue}
                    />
                </View>

                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton} onPress={toggleLike}>
                                <Ionicons
                                    name="md-heart"
                                    size={24}
                                    style={{ marginRight: 5 }}
                                    color={checkLike() ? 'red' : 'black'}
                                />
                                <Text style={styles.socialBarLabel}> {post.likes.length} </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity
                                style={styles.socialBarButton}
                                onPress={() =>
                                    navigation.navigate('Comments', {
                                        postId: post._id,
                                        userId: userId,
                                    })
                                }
                            >
                                <Ionicons name="md-chatboxes" size={24} style={{ marginRight: 5 }} />
                                <Text style={styles.socialBarLabel}> {post.comments.length} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Comments', {
                            postId: post._id,
                            userId: userId,
                        })
                    }
                >
                    {post.comments.length > 0 ? (
                        <Text
                            style={{
                                paddingHorizontal: 16,
                                paddingBottom: 15,
                                paddingTop: 5,
                            }}
                        >
                            View all {post.comments.length} comments{' '}
                        </Text>
                    ) : (
                        <Text
                            style={{
                                paddingHorizontal: 16,
                                paddingBottom: 15,
                                paddingTop: 5,
                            }}
                        >
                            Comment here{' '}
                        </Text>
                    )}
                </TouchableOpacity>
                {isShowSetting && post.postedBy._id === userId && (
                    <View style={styles.postActions}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity
                                style={styles.socialBarButton}
                                onPress={() => navigation.navigate('EditPost', { postId: post._id })}
                            >
                                <MaterialCommunityIcons
                                    name="square-edit-outline"
                                    size={20}
                                    style={{ marginRight: 5 }}
                                    color={Colors.lightAccent}
                                />
                                <Text style={styles.socialBarLabel}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity
                                style={styles.socialBarButton}
                                onPress={deleteHandler.bind(this, post._id)}
                            >
                                <MaterialCommunityIcons
                                    name="delete"
                                    size={20}
                                    style={{ marginRight: 5 }}
                                    color="red"
                                />
                                <Text style={styles.socialBarLabel}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </TouchableComp>
    );
};

const styles = StyleSheet.create({
    userIcon: {
        height: 40,
        width: 40,
        borderRadius: 30,
    },
    card: {
        width: '100%',
        elevation: 1,
        shadowColor: 'black',

        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowRadius: 2,
        marginVertical: 8,
        backgroundColor: 'white',
    },
    cardTitleHeader: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
    },
    cardHeader: {
        paddingTop: 5,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImageContainer: {
        backgroundColor: '#c2c2c2',
        flex: 1,
        display: 'flex',
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 5,
        // height: 275
    },
    cardImage: {
        flex: 1,
        height: 250,
        width: null,
        resizeMode: 'cover',
    },
    /******** card components **************/
    title: {
        fontSize: 15,
        color: '#484848',
        lineHeight: 21,
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        color: '#484848',
        lineHeight: 21,
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        display: 'none',
    },
    time: {
        fontSize: 13,
        color: '#808080',
        marginTop: 5,
    },
    icon: {
        width: 25,
        height: 25,
    },
    iconData: {
        width: 15,
        height: 15,
        marginTop: 5,
        marginRight: 5,
    },
    timeContainer: {
        flexDirection: 'row',
    },
    /******** social bar ******************/
    socialBarContainer: {
        flexDirection: 'row',
    },
    socialBarSection: {
        marginRight: 10,
        marginBottom: 5,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayColor,
    },
    socialBarlabel: {
        marginLeft: 20,
    },
    socialBarButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postActions: {
        position: 'absolute',
        top: 40,
        right: 20,
        borderTopColor: '#c2c2c2',
        borderTopWidth: 1,
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
});

export default Card;
