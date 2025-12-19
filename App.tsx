import { StatusBar } from 'expo-status-bar';

import './global.css';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Listas } from '@/screens/listas';
import { LoginScreen } from '@/screens/login';
import { Soma } from '@/screens/soma';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@/interface/rootPages';
import { ListaNumerica } from '@/screens/listanumerica';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Stack.Navigator initialRouteName="listanumerica" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="listas" component={Listas} />
            <Stack.Screen name="listanumerica" component={ListaNumerica} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="soma" component={Soma} />
                                                  
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
