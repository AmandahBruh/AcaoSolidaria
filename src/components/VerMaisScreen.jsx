import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "../utils/styles";
import Header from "./header/Header";


/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por mostrar as instituições em ordem e separada por tipo
 * @version         1.0.2
 * @since           1.0.0
 *
 * @export          {function} vermaisScreen
 * @return          {React.Component} 
 */

export default function VerMaisScreen({}){
    return (
        <SafeAreaView style={styles.container}>
                        <Header/>

            <ScrollView>

            <Text>Aqui ó</Text>

            <View style={styles.lines}>
                <Image />
            </View>

            <View style={styles.lines}>
                <Image />
            </View>

            <View style={styles.lines}>
                <Image />
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}