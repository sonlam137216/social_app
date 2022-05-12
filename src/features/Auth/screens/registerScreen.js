import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";
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

const RegisterScreen = ({ navigation }) => {
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
        <Header screenName={"Register"} />
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
                  <Button
                    title="Login"
                    style={styles.loginButton}
                    onPress={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
          <Text style={styles.orText}>Or</Text>
          <View style={styles.buttonGroup}>
            <Button title="Facebook" />
            <Button title="Google" />
          </View>
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
    marginBottom: 50,
    marginTop: 50,
  },
});

export default RegisterScreen;
