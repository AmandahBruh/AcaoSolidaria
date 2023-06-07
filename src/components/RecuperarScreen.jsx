// import { createUserWithEmailAndPassword } from "firebase/auth";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "../utils/styles";
import { passwordReset } from "../config/firebase";
import { useState } from "react";
import Header from "./header/Header";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @author          Amanda Richetti <amanda.rondao@alunos.sc.senac.br>
 * 
 * @description     Pagina responsavel por recuperar senha
 * @version         1.0.4
 * @since           1.0.3
 *
 * @export          {function} RecSenhaScreen
 * @return          {React.Component} 
 */

export default function RecSenhaScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handlePasswordReset() {
    try {
      await passwordReset(email);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        console.log("Usuário não encontrado");
        setEmail("");
      }
    }
  }

  return (
    <View style={styles.container}>

      <Header/>
      <View style={styles.boxL}>

      <TextInput
        style={styles.input}
        label="E-mail"
        placeholder="Digite seu e-mail..."
        multiline={false}
        value={email}
        onChangeText={setEmail}
      /> 

      <Button
        style={styles.ButtonR}
        mode="contained"
        onPress={handlePasswordReset}
      >
        Recuperar Senha
      </Button>

      </View>
    </View>
  );
}

