import { View } from 'react-native';
import Home from './src/components/homeScreen';
import { styles } from './src/utils/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}