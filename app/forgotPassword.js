import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default function forgotPassword(){
  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Şifremi Unuttum</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Şifre Sıfırla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backToLogin}>
        <Text style={styles.backToLoginText}>Giriş Ekranına Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backToLogin: {
    marginBottom: 20,
  },
  backToLoginText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});