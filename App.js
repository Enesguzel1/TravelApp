import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };

  const loginScreen = (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo1.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#fff"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifre"
          placeholderTextColor="#fff"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgot}>Şifremi Unuttum?</Text>
      </TouchableOpacity>
    </View>
  );

  const forgotPasswordScreen = (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo2.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#fff"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleBackToLogin}>
        <Text style={styles.loginText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );

  return isForgotPassword ? forgotPasswordScreen : loginScreen;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: '#fb5b5a',
    fontSize: 16,
    marginTop: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
  },
});