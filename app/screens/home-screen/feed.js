import React, {useEffect} from 'react'
import { View, TouchableOpacity } from 'react-native'
import * as Resources from '../../services/api/resources'
import * as Text from '../../components/Text'
import * as Button from '../../components/Button'
import * as mainStyle from '../../assets/styles/main-style'
import style from './feed.style'


function feed({navigation}) {
  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = () => {
    Resources.getUsers().then(r => {
      console.tron.log(r)
    }).catch(e => {
      console.tron.log(e)
    })
  }

  return (
    <View style={{...style.feedBlock}}>
      <Text.Regular>Tes</Text.Regular>
      <Text.Bold>Tes</Text.Bold>
      <View style={{...mainStyle.main.shadow, padding: 10, backgroundColor: "#FFF"}}>
        <Text.Light>Tes</Text.Light>
      </View>
      <Button.Regular style={{...mainStyle.button.default}} onPress={() => navigation.navigate('Detail')} text="Go to Details"/>
    </View>
  )
}

export default feed
