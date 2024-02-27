import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizzza</Text>
      <Text style={styles.price}>$12.56</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price : {
    fontSize: 18,
    color: Colors.light.tint
  }
});
