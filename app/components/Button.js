import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import * as style from '../assets/styles/main-style'

export const Regular = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{...style.button.default, ...props.style}}>
      <Text style={{...style.button.textDefault, ...props.textStyle}}>{props.text}</Text>
    </TouchableOpacity>
  )
}