import { View, Text, } from "react-native";
import styles from "../../utils/styles";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável pelo header geral das paginas
 * @version         1.0.1
 * @since           1.0.0
 *
 * @export          {function} Header
 * @return          {React.Component} 
 */

export default function Header(){
    return (
        <View style={styles.Header}>
                <Text style={styles.titulo}>Login</Text>
        </View> 
    );
}
