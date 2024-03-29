//file name changed to dynamic 
import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{title: 'Detials'}}/>
      <Text>ProductDetailsScreen for { id }</Text>
    </View>
  )
}

export default ProductDetailsScreen;