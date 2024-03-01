import { View, FlatList} from 'react-native';
import Colors from '../../../constants/Colors';
import products from '@assets/data/products';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[0]}/> 
      <ProductListItem product={products[1]}/>  */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }} //make the gap between components
      />
    </View>
  );
}

