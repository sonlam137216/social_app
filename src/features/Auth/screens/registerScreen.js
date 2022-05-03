import React from 'react';
import { Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <div>registerScreen</div>
      <Button title="Login" onPress={() => navigation.push('Login')} />
    </>
  );
};

export default RegisterScreen;
