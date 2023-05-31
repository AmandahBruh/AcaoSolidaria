import { View, Text, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../utils/styles";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por fazer o login de pessoas e instituições
 * @version         1.0.1
 * @since           1.0.0
 *
 * @export          {function} loginScreen
 * @return          {React.Component} 
 */

export default function LoginScreen(){
    return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={styles.titulo}>Login</Text>
            </View> 

            <TextInput
            placeholder="Login..."
            style={styles.input}
            />    
            <TextInput
            placeholder="Senha..."
            style={styles.input}
            />

            <Button
            title="Enviar"
            color="#000"
            />

            <TouchableOpacity>
            <Text>Cadastre-se</Text>
            </TouchableOpacity>    

        </View>
    );
}