import { StyleSheet ,Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors';
import products from '../../../assets/data/products';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductListItem from '../../components/ProductListItem';

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListItem product={products[0]}/> 
      <ProductListItem product={products[1]}/> 
    </SafeAreaView>
  );
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
