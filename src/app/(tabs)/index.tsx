import { StyleSheet ,Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors';
import products from '@assets/data/products';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <SafeAreaView>
      <ProductListItem product={products[0]}/> 
      <ProductListItem product={products[1]}/> 
    </SafeAreaView>
  );
}

