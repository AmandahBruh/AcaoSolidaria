import { View, Text, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import Header from "./header/Header";
import { TextInput, Button } from "react-native-paper";
import Home from "./HomeScreen";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por cadastrar pessoas
 * @version         1.0.3
 * @since           1.0.0
 *
 * @export          {function} cadastrarPScreen
 * @return          {React.Component}
 */

export default function CadastrarPScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.boxL}>
        <TextInput placeholder="Nome ..." style={styles.input} />

        <TextInput placeholder="Email ..." style={styles.input} />

        <TextInput placeholder="Senha ..." style={styles.input} />

        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.textoInput}>Já está cadastrado? <Text style={styles.TouchableOpacity}>Entrar</Text> </Text>
        </TouchableOpacity>

        <Button style={styles.ButtonL} mode="contained">
          Cadastrar
        </Button>
      </View>
    </View>
  );
}
