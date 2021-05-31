import React from 'react';
import {ImageBackground, KeyboardAvoidingView, ScrollView} from 'react-native';

import ImageAssets from '../assets/images';

import {create} from '../utils/normalize';

export default function Background({children}: any) {
  return (
    <ImageBackground
      source={ImageAssets.background_dot}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
