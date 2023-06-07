import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity,  } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "../utils/styles";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";


/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por fazer o login de pessoas e instituições
 * @version         1.0.3
 * @since           1.0.0
 *
 * @export          {function} loginScreen
 * @return          {React.Component} 
 */

export default function LoginScreen({navigation}){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    useEffect(() => {
        // verifica se o usuário está logado
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuário UID: ", user.uid)
                navigation.navigate('VerMaisScreen')
            } else {
                console.log("Usuário não logado")
            }
        })


    }, [])

    function handleLogin() {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('VerMaisScreen')
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            });
    }


    return (
        <View style={styles.container}>

            <Header />
            
            <View style={styles.boxL}>

                <TextInput
                placeholder="Email..."
                style={styles.inputL}
                value={email}
                onChangeText={setEmail}
                />  
                <TouchableOpacity onPress={() => navigation.navigate("CadastrarPScreens")}>
                    <Text style={styles.textoInput}>Cadastre-se</Text>
                </TouchableOpacity>

                <TextInput
                placeholder="Senha..."
                style={styles.inputL}
                value={senha}
                onChangeText={setSenha}
                />
                <TouchableOpacity onPress={() => navigation.navigate("CadastrarIScreens")}>
                    <Text style={styles.textoInput}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <Button
                style={styles.ButtonL}
                onPress={handleLogin}
                mode="contained"
                >Logar</Button>
            </View>    

        </View>
    );
}