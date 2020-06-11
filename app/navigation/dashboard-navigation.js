import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../screens/home-screen/detail'
import FeedScreen from '../screens/home-screen/feed'
import MessageScreen from '../screens/home-screen/message'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardTab} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

const DashboardTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  )
}
