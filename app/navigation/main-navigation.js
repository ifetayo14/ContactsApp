import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardNavigation from '../navigation/dashboard-navigation'
import SettingNavigation from '../navigation/setting-navigation'
import ContactNavigation from '../navigation/contact-navigation'

const Drawer = createDrawerNavigator();

export default main = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardNavigation} />
      <Drawer.Screen name="Setting" component={SettingNavigation} />
      <Drawer.Screen name="Contacts" component={ContactNavigation} />
    </Drawer.Navigator>
  )
}
