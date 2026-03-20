// Settings menu implementation with navigation

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function SettingsMenu({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Menu</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={{ marginTop: 20 }}
      >
        <Text>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
