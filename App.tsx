import { StatusBar } from 'expo-status-bar';

import './global.css';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Listas } from '@/screens/listas';


export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <Listas />
      </SafeAreaView>

      <StatusBar style="auto" />
    </> 
  );
}
