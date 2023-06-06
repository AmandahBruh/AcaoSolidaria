import { View, Text, SafeAreaView, ScrollView, Image,  } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../utils/styles";
import Header from "./header/Header";


/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável por mostrar as instituições em ordem e separada por tipo
 * @version         1.0.3
 * @since           1.0.0
 *
 * @export          {function} vermaisScreen
 * @return          {React.Component} 
 */

export default function VerMaisScreen({}){
    return (
        <SafeAreaView style={styles.container}>
            <Header/>

            <View style={styles.areaInput}>
                <TextInput
                    style={styles.inputV}
                    placeholder="Pesquise"
                />
            </View>

            <ScrollView style={styles.rolagem}>

            <Text style={styles.textRolagem}>Aqui ó</Text>

            <View style={styles.lines}>
                
                <Image 
                style={styles.image}
                source={{
                    uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                }}
                />
                <Text style={styles.textRolagem}>Instituição A:</Text>
            </View>
            <View style={styles.lines}>
                <Image 
                style={styles.image}
                source={{
                    uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                }}
                />
                <Text style={styles.textRolagem}>Instituição B:</Text>
            </View>
            <View style={styles.lines}>
                <Image 
                style={styles.image}
                source={{
                    uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                }}
                />
                <Text style={styles.textRolagem}>Instituição C:</Text>
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}

//Fazer as imagens estilo posts fazer um quadrado para cada (parecido com o insta)