import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppStackNavigator from './AppStackNavigator';
import AuthenticationNavigator from './AuthenticationNavigator';

export type RootStackParamList = {
  AppStack: undefined;
  AuthStack: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<{}> = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="AuthStack" component={AuthenticationNavigator} />
      <RootStack.Screen name="AppStack" component={AppStackNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
