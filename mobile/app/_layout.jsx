import { Stack } from "expo-router";
import SaveScreen from "../components/SaveScreen"
import { SafeAreaProvider } from "react-native-safe-area-context";
import {StatusBar} from 'expo-status-bar'

export default function RootLayout() {
  return <SafeAreaProvider>
    <SaveScreen>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(auth)"/>
      </Stack>
    </SaveScreen>
    <StatusBar style="dark"/>
  </SafeAreaProvider>
}
