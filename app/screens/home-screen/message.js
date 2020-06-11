import React from 'react'
import { View, Text, Button } from 'react-native'

const message = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export default message
