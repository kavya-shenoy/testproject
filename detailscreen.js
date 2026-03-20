// Detail screen displaying selected item information

import React from 'react';
import { View, Text } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Detail Screen</Text>

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Title: {item.title}
      </Text>

      <Text style={{ marginTop: 10 }}>
        Description: {item.description}
      </Text>
    </View>
  );
}
