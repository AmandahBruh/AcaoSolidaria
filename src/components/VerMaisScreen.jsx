import { View, Text } from "react-native";
import styles from "../utils/styles";
import Header from "./header/Header";


/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por mostrar as instituições em ordem e separada por tipo
 * @version         1.0.0
 * @since           1.0.0
 *
 * @export          {function} vermaisScreen
 * @return          {React.Component} 
 */

export default function VerMaisScreen({}){
    return (
        <View style={styles.container}>

            <Header/>

            <Text>Aqui ó</Text>
        </View>
    );
}