import React from 'react'
import {text, View,TextInput, Text} from 'react-native'

const Input =({label,value,onChangeText,placeholder})=>{
  const{labelStyle,inputStyle, containerStyle}=styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput 
      placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle} 
        value={value}
        onChangeText={onChangeText}
       />
    </View>
  )
}

const styles={
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 5,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection : 'row',
    alignItems:'center'

  }
}

export default Input;