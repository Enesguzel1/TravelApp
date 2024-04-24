import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Link,router } from 'expo-router';

const MainScreen = ({ navigation }) => {
  const cities = ['Adana', 'İzmir', 'Muğla', 'Aydın', 'İstanbul','Çanakkale','Bursa','Edirne'];

  const handleCityPress = (city) => {
    router.push(city);
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCityPress(item)}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cities}
        renderItem={renderCityItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MainScreen;