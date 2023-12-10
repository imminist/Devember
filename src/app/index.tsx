import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import DayListItem from '../../src/components/core/DayListItem'

const days = [...Array(24)].map((val, index) => index + 1)

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
      />

      {/* {days.map((day) => (
        <View style={styles.box} key={day}>
          <Text style={styles.text}>{day}</Text>
        </View>
      ))} */}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
})
