import { Stack, Slot } from 'expo-router'
import { useEffect } from 'react'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  })

  useEffect(() => {
    if (fontsLoaded || !fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Bagg' }} />
    </Stack>
  )
}
