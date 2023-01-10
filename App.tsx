import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <View className='flex-1 bg-zinc-900'>
      <StatusBar style='light' />
      <Routes />
    </View>

  );
}


