import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../screens/contact-screen/feed'

const Stack = createStackNavigator();

export default main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={ContactScreen} />
    </Stack.Navigator>
  )
}
