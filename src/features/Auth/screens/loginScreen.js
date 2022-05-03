import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import FormInput from '../components/FormInput';

import { Formik } from 'formik';
import * as yup from 'yup';
import authAPI from '../../../api/authAPI';

const validationSchema = yup.object().shape({
  username: yup.string().required('Please enter your name'),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const LoginScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (userInfo) => {
    const response = await authAPI.login(userInfo);
    console.log(response);
    if(response.success) {
        navigation.navigate('Home')
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
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
                  label="Username"
                  error={touched.username && errors.username}
                  placeholder="Enter your name"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />

                <FormInput
                  value={password}
                  label="Password"
                  error={touched.password && errors.password}
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
                <Button title="Login" onPress={handleSubmit} />
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;
