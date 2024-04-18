import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

import { Link,router } from 'expo-router';


export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Adınız"
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <View style={styles.login}>
        <Text style={styles.loginText}>Zaten bir hesabınız var mı?</Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Giriş Yapın</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  login: {
    position: 'absolute',
    bottom: 20,
  },
  loginText: {
    marginRight: 5,
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
