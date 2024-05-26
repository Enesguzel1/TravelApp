import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
const {apiUrl}=require('../config');
const App = () => {
  const [data, setData] = useState([]);
  const params=useLocalSearchParams;
  const{city_id} = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl+'api/Place/GetPlacesById?id='+city_id);
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
      <Image source={{uri:item.place_image_url}} style={styles.image} />
      <Text style={styles.title}>{item.place_name}</Text>
      <Text style={styles.description}>{item.place_description}</Text>
      <Text style={styles.location}>{item.place_location}</Text>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.places_to_visit_id.toString()}
      />
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
  location: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default App;
