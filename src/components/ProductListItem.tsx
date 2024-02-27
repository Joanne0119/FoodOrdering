import { StyleSheet ,Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import products from '../../assets/data/products';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10
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
