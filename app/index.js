import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React,{useState} from 'react';
import { Link,router } from 'expo-router';
import axios from 'axios';
const {apiUrl}=require('../config')


export default function Page() {
  const [username, setUsername] = useState('');
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
        placeholder="Kullanıcı Adı"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={text=>setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={x=x=>LogInUser(username,password)}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
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

const LogInUser=async(username,pass)=>{
  try{
    const response = await axios.get(apiUrl+"api/User/Login?username="+username+"&password="+pass)
    if(response.data=="success"){
      Route('main')
    }else{
      alert("Kullanıcı Adı veya Şifre Hatalı");
    }
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
