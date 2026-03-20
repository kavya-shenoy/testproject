// Local storage implementation using AsyncStorage

import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Error saving data", error);
  }
};

// Get data
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

// Remove data
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting data", error);
  }
};
