
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';

export default function App() {
  return (
    <>
      <LoginScreen/>
      <StatusBar style="auto" />
    </>
  );
}
