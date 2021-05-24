import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from './base';

export interface dataSignIn {
  token: String;
}

export const postSignIn = async (params: Object) => {
  const data = await instance.post('login', params);
  if (data) {
    const token = ['token', data?.token];
    await AsyncStorage.setItem('token', token);
    return data;
  } else {
    return false;
  }
};

export const postSignUp = async (params: Object) => {
  const data = await instance.post('signup', params);
  return data;
};

export const getSignOut = async () => {
  const data = await instance.get('signout');
  data && (await AsyncStorage.clear());
};
