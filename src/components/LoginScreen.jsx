import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../utils/styles";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";


/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por fazer o login de pessoas e instituições
 * @version         1.0.2
 * @since           1.0.0
 *
 * @export          {function} loginScreen
 * @return          {React.Component} 
 */

export default function LoginScreen({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
        // verifica se o usuário está logado
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuário UID: ", user.uid)
                navigation.navigate('MBTNavigation')
            } else {
                console.log("Usuário não logado")
            }
        })


    }, [])

    function handleLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('MBTNavigation')
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
                placeholder="Login..."
                style={styles.input}
                value="email"
                onChangeText={setEmail}
                />  
                <TouchableOpacity>
                <Text>Cadastre-se</Text>
                </TouchableOpacity> 

                <TextInput
                placeholder="Senha..."
                style={styles.input}
                value="password"
                onChangeText={setPassword}
                />
                <TouchableOpacity>
                <Text style={styles.textoInput}>Esqueceu a senha ?</Text>
                </TouchableOpacity>

                <Button
                title="Logar"
                color="#000"
                style={styles.Button}
                onPress={handleLogin}
                />
            </View>    

        </View>
    );
}