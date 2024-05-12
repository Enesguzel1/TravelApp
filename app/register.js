import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import React,{useState} from 'react';
import { Link,router } from 'expo-router';
import axios from 'axios';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} on onPress={x=x=>registerUser(username,password)}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <View style={styles.login}>
        <Text style={styles.loginText}>Zaten bir hesabınız var mı?</Text>
          <Link href="index">
            <Text style={styles.loginLink}>Giriş Yapın</Text>
          </Link>
      </View>
    </View>
  );
}
function Route1(path){
  router.push(path)
}
const registerUser = async (username, pass) => {
  try {
    const response = await axios.post(`https://e8d5-5-47-162-108.ngrok-free.app/api/User/CreateUser?username=${username}&password=${pass}`);
    if (response.data === "success") {
      Route('index');
    } else {
      alert(response.data);
    }
  } catch (error) {
    if (error.response.status === 409) {
      alert("Username already exists");
    } else {
      alert(error.message);
    }
  }
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
