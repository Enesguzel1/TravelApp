import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams,router} from 'expo-router';
const {apiUrl}=require('../config');
const WordScreen = () => {
  const [data, setData] = useState([]);
  const params=useLocalSearchParams();
  const{city_id} = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl+'api/Word/GetWordsByCity?id='+city_id);
        if(response.data!=null){
            setData(response.data);
        }
        else{
            alert(response.data);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.vocable}</Text>
      <Text style={styles.description}>{item.meaning}</Text>
    </View>
  );
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.word_id.toString()}
      />
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff6347',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WordScreen;
