import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './feed-style'
import * as Resources from '../../services/api/resources'

const getUsers = () => {
    Resources.getUsers().then(r => {
      console.tron.log(r)
    }).catch(e => {
      console.tron.log(e)
    })
  }
  
export default class App extends Component{
  
    constructor(){
        super()
        this.state = {
        dataSource: [],
        }
    }
    
    renderItem = ({item}) => {
        return(
        <View style={style.flatList}>
            <Image
            style={style.avatarImg}
            source={{uri: item.avatar}} />
            <View style={style.name}>
            <Text style={{fontSize: 23}}>
                {item.first_name} {item.last_name}
            </Text>
            <Text style={{fontSize: 15}}>
                {item.email}
            </Text>
            </View>
        </View>      
        )
    }
  
    componentDidMount(){
        Resources.getUsers()
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({
            dataSource: responseJson.data
        })
        })
        .catch((error) => {
        console.log(error)
        })
    }
  
    render(){
        return(
            <View style={style.container}>
            <FlatList
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
            />
            <TouchableOpacity style={style.fab}>
                <FontAwesome5 style={style.fabContent} name={'plus'} solid/>
            </TouchableOpacity>
            </View>
        )
    }
  }