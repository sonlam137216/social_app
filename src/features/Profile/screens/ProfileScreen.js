import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import Header from "../../../shareComponents/Header";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View>
        <Header screenName="Profile"></Header>
        <View style={styles.profileHeader}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651936335/zewyjllqejb1xrn23ghe.png?fbclid=IwAR2eCVVEB4vYVMWVXW2wV70M_w40D-c9JkDJQ2ScFMP7AFJVeqtPq9n8XLU",
            }}
          ></Image>
          <View style={styles.textCenter}>
            <Text>10</Text>
            <Text>Bài viết</Text>
          </View>
          <View style={styles.textCenter}>
            <Text>20</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.textCenter}>
            <Text>Following</Text>
            <Text>10</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Sửa thông tin cá nhân</Text>
          </Pressable>
        </View>
        <View style={styles.imageList}>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651488834/nb3grc3nhtk5nhdjokim.jpg?fbclid=IwAR3JhZWI6OXYUIzB92h2Gm7fzL1G-_PXbbQhGIl9r-zBm6X4tpE8CT0MyWM",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651488577/vah4fsrmcka80oay5bcr.jpg?fbclid=IwAR0GMXAQNDn0ftDDdqvbrhhk630fxP3mgKxjLNua1uIrjVGpbGJ0UyywX6s",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651309218/instagram_girl_2_kvrjak.jpg?fbclid=IwAR31oiNCwDy_SwfqXSgW9YWKCiaqRmGA5Xoc98-GYf74r_093qryNUv_H4A",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651594493/wvr9r4dxpjprb7gpcxav.jpg?fbclid=IwAR012DUyPvV3Sr5QAtlMMzW0LQDa7BVutUnJRDbDaFWNiBymjsqOHIwwQmo",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651488834/nb3grc3nhtk5nhdjokim.jpg?fbclid=IwAR3JhZWI6OXYUIzB92h2Gm7fzL1G-_PXbbQhGIl9r-zBm6X4tpE8CT0MyWM",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651488577/vah4fsrmcka80oay5bcr.jpg?fbclid=IwAR0GMXAQNDn0ftDDdqvbrhhk630fxP3mgKxjLNua1uIrjVGpbGJ0UyywX6s",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651309218/instagram_girl_2_kvrjak.jpg?fbclid=IwAR31oiNCwDy_SwfqXSgW9YWKCiaqRmGA5Xoc98-GYf74r_093qryNUv_H4A",
            }}
          ></Image>
          <Image
            style={styles.imagePost}
            source={{
              uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651594493/wvr9r4dxpjprb7gpcxav.jpg?fbclid=IwAR012DUyPvV3Sr5QAtlMMzW0LQDa7BVutUnJRDbDaFWNiBymjsqOHIwwQmo",
            }}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#504DE4",
    borderColor: "black",
    marginVertical: 20,
    width: 300,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: "50%",
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  textCenter: {
    textAlign: "center",
  },

  imagePost: {
    width: "45%",
    height: 180,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  imageList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
