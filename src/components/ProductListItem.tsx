import { StyleSheet ,Text, View, Image, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = { 
  //typescript need to make sure the data type
  product: Product
}

const ProductListItem = ({ product } : ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image 
          style={styles.image} 
          source={{ uri: product.image || defaultImage}}
          resizeMode='contain'
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price : {
    fontSize: 18,
    color: Colors.light.tint
  },
  image: {
    width: '100%',
    aspectRatio: 1 //the height will automatically be caculated
  }
});

export default ProductListItem;
