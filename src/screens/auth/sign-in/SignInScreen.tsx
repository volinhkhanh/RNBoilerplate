import React, {FC, useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';

import {emailValidator} from '../../../helpers/emailValidator';
import {passwordValidator} from '../../../helpers/passwordValidator';

import {postSignIn} from '../../../services';

interface SignInView {
  onPressSignIn: () => void;
  email: string;
  password: string;
}

export const SignInScreen: FC<SignInView> = ({navigation}: any) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onPressSignIn = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    const data = await postSignIn({
      username: email,
      password: password,
    });
    if (data) {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
      return;
    }
  };
  const {t, i18n} = useTranslation();

  return (
    <Background>
      <View style={styles.changeLanguageContent}>
        <Text
          style={styles.languageItem}
          onPress={() => {
            i18n.changeLanguage('en');
          }}>
          English
        </Text>
        <Text
          style={styles.languageItem}
          onPress={() => {
            i18n.changeLanguage('vi');
          }}>
          Tiếng Việt
        </Text>
      </View>
      <Logo />
      <TextInput
        placeholder={t('Email')}
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        placeholder={t('Password')}
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>{t('Forgot your password?')}</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          onPressSignIn();
        }}>
        <Text>{t('Login')}</Text>
      </Button>
      <View style={styles.row}>
        <Text>{t('Don’t have an account?')} </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
          <Text style={styles.link}>{t('Sign up')}</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  changeLanguageContent: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    right: 0,
  },
  languageItem: {
    padding: 5,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
  },
  link: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
