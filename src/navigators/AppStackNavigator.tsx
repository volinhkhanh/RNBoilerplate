import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/home';

export type AppStackParamList = {
  HomeScreen: undefined;
  AnotherScreen: {paramName: string};
};

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackNavigator: React.FC<{}> = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
