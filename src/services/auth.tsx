import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from './base';
import {useSetRecoilState} from 'recoil';
import {userDataState} from '../recoil/atoms';

export interface dataSignIn {
  token_type: String;
  access_token: String;
  refresh_token: String;
  user: Object;
}

export const postSignIn = async (params: Object) => {
  const userData = useSetRecoilState(userDataState);
  const data: dataSignIn = await instance.post('signin', params);
  if (data) {
    const tokenTypePair = ['@token_type', data?.token_type];
    const tokenPair = ['@token', data?.access_token];
    const refreshTokenPair = ['@refresh_token', data?.refresh_token];
    await AsyncStorage.multiSet([tokenTypePair, tokenPair, refreshTokenPair]);
    userData(data.user);
    return true;
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
