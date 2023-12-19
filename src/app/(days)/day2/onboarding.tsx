import { Stack } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'

import { View, Text, StyleSheet } from 'react-native'
export default function OnboardingScreen() {
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <FontAwesome5 name="people-arrows" size={24} color="black" />

      <Text style={styles.title}>Track every transaction</Text>
      <Text style={styles.description}>
        Monitor your spending and contribution, ensuring every penny aligns with
        your family's aspirations
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',
    padding: 20,
  },
  image: {},
  title: {
    color: '#fdfdfd',
    fontSize: 26,
    fontFamily: 'Inter',
    letterSpacing: 1.3,
  },
  description: {
    color: 'gray',
    fontSize: 18,
  },
})
