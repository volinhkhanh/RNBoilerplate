import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUpScreen, SignInScreen} from '../screens/auth';

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthenticationNavigator: React.FC<{}> = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationNavigator;
