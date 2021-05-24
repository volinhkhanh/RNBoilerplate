import React, {Fragment, useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {RecoilRoot} from 'recoil';
import RootNavigator from './navigators/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <RecoilRoot>
        <RootNavigator />
      </RecoilRoot>
    </Fragment>
  );
};

export default App;
