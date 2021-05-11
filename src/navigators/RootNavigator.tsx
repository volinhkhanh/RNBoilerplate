import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="AuthStack"
          component={AuthenticationNavigator}
        />
        <RootStack.Screen name="AppStack" component={AppStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
