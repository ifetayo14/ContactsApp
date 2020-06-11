import React, { Component } from 'react'
import { Text } from 'react-native'

export const Light = (props) => {
  return (
    <Text style={{fontWeight: "100", fontFamily: "Arial", ...props.style}}>{props.children}</Text>
  )
}

export const Regular = (props) => {
  return (
    <Text style={{fontWeight: "normal", fontFamily: "Arial", ...props.style}}>{props.children}</Text>
  )
}

export const Bold = (props) => {
  return (
    <Text style={{fontWeight: "bold", fontFamily: "Arial", ...props.style}}>{props.children}</Text>
  )
}