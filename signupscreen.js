import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    const user = { username, email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));

    Alert.alert("Success", "User registered successfully");
    navigation.navigate("Login");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Signup</Text>

      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}
