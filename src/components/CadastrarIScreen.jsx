import { View, Text, TouchableOpacity, Button } from "react-native";
import styles from "../utils/styles";
import React from "react";
import Header from "./header/Header";
import { TextInput } from "react-native-paper";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsavel por cadastrar instituições
 * @version         1.0.1
 * @since           1.0.0
 *
 * @export          {function} cadastrarIScreen
 * @return          {React.Component} 
 */

export default function CadastrarIScreen({navigation}){
    return (
        <View style={styles.container}>

            <Header />
            
            <View style={styles.boxL}>

                <TextInput
                placeholder="Nome da Instituição ..."
                style={styles.input}
                />  

                <TextInput
                placeholder="Email da Instituição ..."
                style={styles.input}
                />

                <TextInput
                placeholder="Senha ..."
                style={styles.input}
                />
                <TouchableOpacity>
                <Text style={styles.textoInput}>Loge-se ?</Text>
                </TouchableOpacity>

                <Button
                title="Cadastrar"
                color="#000"
                style={styles.Button}
                />
            </View>    

        </View>
    );
}