import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Link,router } from 'expo-router';


export default function Page() {
  return (
    <View style={styles.container}> 
      <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
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
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword} onPress={x=x=>Route('forgotPassword')}>
        <Text>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register} onPress={x=x=>Route('register')}>
        <Text>Hesabın Yok mu? Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

function Route(path){
  router.push(path);
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
  forgotPassword: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor:'red',
  },
  register: {
    position: 'absolute',
    bottom: 10,
  },
});
