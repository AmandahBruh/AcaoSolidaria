import { View, Text } from "react-native";
import { styles } from "../utils/styles";
import React from "react";

/**
 * @author          João Gabriel <joao.gabriel@alunos.sc.senac.br>
 * @description     Função responsável por exibir a página inicial
 * @version         1.0.0
 * @since           1.0.0
 *
 * @param           {Object} navigation tipo React Navigation
 * @export          {Function} Home
 * @return          {React.Component}
 */

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ação Solidaria</Text>
      <View style={styles.box}></View>
    </View>
  );
}
