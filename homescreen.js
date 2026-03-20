// Home screen displaying list of items with navigation to detail screen

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy data (you can replace with API later)
    const items = [
      { id: '1', title: 'Item 1', description: 'Details of Item 1' },
      { id: '2', title: 'Item 2', description: 'Details of Item 2' },
      { id: '3', title: 'Item 3', description: 'Details of Item 3' }
    ];
    setData(items);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { item })}
      style={{ padding: 15, borderBottomWidth: 1 }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Home Screen</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
