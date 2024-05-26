import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {
  const params = useLocalSearchParams();
  const {city_id1} = params;
  const handleOptionPress = (option) => {
    // Seçilen seçeneğe göre yönlendirme işlemi
    switch (option) {
      case 1:
        router.push({pathname:'places',params:{city_id:city_id1}});
        break;
      case 2:
        router.push({pathname:'words',params:{city_id:city_id1}});
        break;
      case 3:
        router.push({pathname:'foods',params:{city_id:city_id1}});
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress(1)}>
        <Text style={styles.optionText}>Gezilecek Yerler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress(2)}>
        <Text style={styles.optionText}>Şehre Ait Kelimeler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress(3)}>
        <Text style={styles.optionText}>Şehrin Ünlü Yemekleri</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#00eeee',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
  },
  optionText: {
    fontSize: 20,
    color: '#000',
  },
});

export default HomeScreen;
