import { View, Text, Button } from "react-native";
import { styles } from "../utils/styles";
import React from "react";

/**
 * @author          João Gabriel <joao.gabriel@alunos.sc.senac.br>
 * @description     Função responsável por exibir a página inicial
 * @version         1.0.1
 * @since           1.0.0
 *
 * @param           {Object} navigation tipo React Navigation
 * @export          {Function} Home
 * @return          {React.Component}
 */

export default function Home({navigation}) {
  return (
    <View style={styles.containerH}>

      <Text style={styles.titulo}>Ação Solidaria</Text>

      <View style={styles.box}>
        {/* arrumar a navegação do botão */}
          <Button
              title="Login"
              onPress={() => navigation.navigate('LoginScreen')}
          />
          <Button
              title="CadastrarIScreens"
              onPress={() => navigation.navigate('CadastrarIScreens')}
          />
          <Button
              title="CadastrarPScreens"
              onPress={() => navigation.navigate('CadastrarPScreens')}
          />
          <Button
              title="VerMaisScreen"
              onPress={() => navigation.navigate('VerMaisScreen')}
          />
      </View>
    </View>
  );
}
