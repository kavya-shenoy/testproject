// Notification implementation using Expo Notifications

import * as Notifications from 'expo-notifications';

// Request permission
export const requestPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission not granted');
  }
};

// Send notification
export const sendNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder",
      body: "This is a test notification",
    },
    trigger: { seconds: 5 },
  });
};
