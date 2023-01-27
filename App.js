import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-200">
      <StatusBar style="auto" />
      <Text>Welcome to my new Expo app!</Text>
    </View>
  );
}
