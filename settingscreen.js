// Settings screen with basic toggle functionality

import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Settings</Text>

      <View style={{ marginTop: 20 }}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Dark Mode (Demo)</Text>
      </View>
    </View>
  );
}
