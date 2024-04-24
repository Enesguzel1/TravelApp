import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React,{useState} from 'react';
import { Link,router } from 'expo-router';
import { firebase } from '../config';


export default function Page() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}> 
      <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
      />
      <Text style={styles.welcome}> Hoşgeldiniz! </Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        onChangeText={text => setMail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={text=>setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={x=x=>LogInUser(mail,password)}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={x=x=>Route('forgotPassword')}>
        <Text style={{color:'white'}}>Şifremi Unuttum</Text>
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
const LogInUser=async(mail,pass)=>{
  try{
    await firebase.auth().signInWithEmailAndPassword(mail,pass);
    Route('main');
  }catch(error){
    alert(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcome:{
    fontWeight:'bold',
    fontSize:25,
    marginBottom:20
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
