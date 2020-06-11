import 'react-native-gesture-handler';
import * as React from 'react';
import { YellowBox } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/main-navigation'

if(__DEV__) {
  import('./services/reactotron/index').then(() => console.log('Reactotron Configured'))
}

YellowBox.ignoreWarnings([
  "componentWillMount is deprecated",
  "componentWillReceiveProps is deprecated",
  "Require cycle:",
])

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App