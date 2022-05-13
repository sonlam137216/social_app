import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView, TextInput } from "react-native-web";
import FormInput from "../components/FormInput";

import { Formik } from "formik";
import * as yup from "yup";
import { loginThunk } from "../authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Header from "../../../shareComponents/Header";

const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter your name"),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (userInfo) => {
    try {
      const result = await dispatch(loginThunk(userInfo));
      const data = unwrapResult(result);
      if (data.success) navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header screenName={"Login"} />
        <Image
          style={styles.logo}
          source={{
            uri: "https://res.cloudinary.com/wjbucloud/image/upload/v1651936335/zewyjllqejb1xrn23ghe.png?fbclid=IwAR2eCVVEB4vYVMWVXW2wV70M_w40D-c9JkDJQ2ScFMP7AFJVeqtPq9n8XLU",
          }}
        ></Image>
        <View style={styles.formContainer}>
          <Formik
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({
              values,
              handleChange,
              touched,
              handleBlur,
              errors,
              handleSubmit,
            }) => {
              const { username, password } = values;
              return (
                <>
                  <FormInput
                    value={username}
                    label=""
                    error={touched.username && errors.username}
                    placeholder="Enter your name"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                  />

                  <FormInput
                    value={password}
                    label=""
                    error={touched.password && errors.password}
                    placeholder="Enter your password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    secureTextEntry
                  />

                  <Text
                    style={styles.forgotPass}
                    onPress={() => navigation.navigate("Home")}
                  >
                    Quên mật khẩu?
                  </Text>
                  <Text style={styles.rememberPass}>Nhớ mật khẩu</Text>
                  <Pressable style={styles.button}>
                    <Text style={styles.text}>Register</Text>
                  </Pressable>
                </>
              );
            }}
          </Formik>
          <Text style={styles.orText}>Or</Text>
          <View style={styles.buttonGroup}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Facebook</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Google</Text>
            </Pressable>
          </View>
          <Text style={styles.orText}>
            Do you have a account?
            <Text style={styles.registerText}> Register now.</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  formContainer: {
    margin: 20,
    marginTop: 50,
  },

  forgotPass: {
    textAlign: "right",
  },

  rememberPass: {
    marginTop: 20,
    marginBottom: 30,
  },

  loginButton: {
    backgroundColor: "#504DE4",
    borderRadius: 20,
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  orText: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#504DE4",
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  registerText: {
    fontWeight: "bold",
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    position: "relative",
    left: "35%",
  },
});

export default LoginScreen;
