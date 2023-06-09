import { View, Text, TouchableOpacity,  } from "react-native";
import styles from "../utils/styles";
import React from "react";
import Header from "./header/Header";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @author          Amanda Richetti <amanda.rondao@alunos.sc.senac.br>
 * 
 * @description     Pagina responsavel por cadastrar instituições
 * @version         1.0.4
 * @since           1.0.0
 *
 * @export          {function} cadastrarIScreen
 * @return          {React.Component} 
 */

export default function CadastrarIScreen({navigation}){
    const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarInsti() {
    console.log(nome);
    console.log(email);
    console.log(senha);

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // adicionar o usuário a coleção Instituição usando o uid do usuário como chave estrangeira
        const docRef = addDoc(collection(db, "Instituicao"), {
          nome: nome,
          email: email,
          senha: senha,
          uid: user.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  
    return (
        <View style={styles.container}>

            <Header />
            
            <View style={styles.boxL}>

                <TextInput
                placeholder="Nome da Instituição ..."
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                label="nome"/>  

                <TextInput
                placeholder="Email da Instituição ..."
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                label="email"/>

                <TextInput
                placeholder="Senha ..."
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                label="senha"/>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.textoInput}>Já está cadastrado? <Text style={styles.TouchableOpacity}>Entrar</Text> </Text>
                </TouchableOpacity>

                <Button
                style={styles.ButtonL}
                mode="contained"
                onPress={cadastrarInsti}
                >Cadastrar</Button>
            </View>    

        </View>
    );
}