//file name changed to dynamic 
import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ProductDetailsScreen for { id }</Text>
    </View>
  )
}

export default ProductDetailsScreen;