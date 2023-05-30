import { View } from 'react-native';
import Home from './src/components/homeScreen';
import { styles } from './src/utils/styles';
import React from 'react';



/**
 * @author             João Gabriel
 * @description        apps
 * @version            1.0.0
 * @since              1.0.0
 * 
 * 
 * @param              {Object} navigation Objeto de navegação do React 
 * @export             {function}
 * @return             {React.Component} 
 */


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}