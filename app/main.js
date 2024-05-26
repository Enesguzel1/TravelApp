import React, { useEffect, useState } from 'react';
import { Link,router } from 'expo-router';
import { View, Image, TextInput, FlatList,TouchableOpacity, Text, StyleSheet } from 'react-native';
// Diğer importlar...
const {apiUrl} = require('../config');
const MainScreen = ({ navigation }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCitiesFromAPI = async () => {
      try {
        const response = await fetch(apiUrl + 'api/City');
        const citiesFromAPI = await response.json();
        setCities(citiesFromAPI);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCitiesFromAPI();
  }, []);

  const handleCityPress = (path,data) => {
    router.push({pathname:path,params:{city_id1:data}})
    console.log("burası main ekranı ve id="+data)
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity onPress={()=>handleCityPress('choosingOptions',item.city_id)}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: 'purple'}}>
        <Text>{item.city_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cities}
        renderItem={renderCityItem}
        keyExtractor={(item) => item.city_id.toString()}
      />
    </View>
  );
};

export default MainScreen;