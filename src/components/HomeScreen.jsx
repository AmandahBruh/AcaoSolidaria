import { View, Text } from "react-native";
import { styles } from "../utils/styles";
import React from "react";
import Header from "./header/Header";
import { Button } from "react-native-paper";

/**
 * @author          João Gabriel <joao.gabriel@alunos.sc.senac.br>
 * @description     Função responsável por exibir a página inicial
 * @version         1.0.3
 * @since           1.0.0
 *
 * @param           {Object} navigation tipo React Navigation
 * @export          {Function} Home
 * @return          {React.Component}
 */

export default function Home({ navigation }) {
  return (
    <View style={styles.containerH}>
      <Header />

      <View style={styles.box}>
        {/* arrumar a navegação do botão */}
        <Button
          style={styles.Button}
          onPress={() => navigation.navigate("LoginScreen")}
          mode="contained"
        >
          Login
        </Button>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={() => navigation.navigate("CadastrarIScreens")}
          color="#000"
        >
          Cadastrar Instituições
        </Button>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={() => navigation.navigate("CadastrarPScreens")}
          color="#000"
        >
          Cadastrar Pessoas
        </Button>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={() => navigation.navigate("VerMaisScreen")}
          color="#000"
        >
          Ver Mais
        </Button>
      </View>
    </View>
  );
}
