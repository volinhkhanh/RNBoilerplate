import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useRecoilValue} from 'recoil';
import {CalendarProvider} from '../hooks/useCalendar';
import {AxiosProvider} from '../services';
import {loadingState} from '../recoil/atoms';

import AppStackNavigator from './AppStackNavigator';
import AuthenticationNavigator from './AuthenticationNavigator';

export type RootStackParamList = {
  AppStack: undefined;
  AuthStack: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<{}> = () => {
  const loading = useRecoilValue(loadingState);
  return (
    <AxiosProvider>
      <NavigationContainer>
        <CalendarProvider>
          <RootStack.Navigator headerMode="none">
            <RootStack.Screen
              name="AuthStack"
              component={AuthenticationNavigator}
            />
            <RootStack.Screen name="AppStack" component={AppStackNavigator} />
          </RootStack.Navigator>
        </CalendarProvider>
      </NavigationContainer>
      {loading && (
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color="#00ff00"
        />
      )}
    </AxiosProvider>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RootNavigator;
