import React, {Fragment, useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import {CalendarProvider} from './hooks/useCalendar';
import {AxiosProvider} from './services';

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <AxiosProvider>
        <NavigationContainer>
          <CalendarProvider>
            <RootNavigator />
          </CalendarProvider>
        </NavigationContainer>
      </AxiosProvider>
    </Fragment>
  );
};

export default App;
