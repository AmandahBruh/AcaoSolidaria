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

            {/* fazer um componente para o header */}
            <View style={styles.Header}>
                <Text style={styles.titulo}>Login</Text>
            </View> 

            <TextInput
            placeholder="Login..."
            style={styles.input}
            />  
            <TouchableOpacity>
            <Text>Cadastre-se</Text>
            </TouchableOpacity> 

            <TextInput
            placeholder="Senha..."
            style={styles.input}
            />
            <TouchableOpacity>
            <Text>Esqueceu a senha ?</Text>
            </TouchableOpacity>

            <Button
            title="Logar"
            color="#000"
            />

               

        </View>
    );
}