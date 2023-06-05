import { View, Text, SafeAreaView, ScrollView, Image,  } from "react-native";
import { TextInput } from "react-native-paper";
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

            <TextInput
                style={styles.inputV}
                placeholder="Pesquise"
            />

            <ScrollView style={styles.rolagem}>

            <Text>Aqui ó</Text>

            <View style={styles.lines}>
                
                <Text>Instituição A:</Text>
                <Image 
                style={styles.image}
                    source={{
                        uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                      }}
                />
            </View>
            <View style={styles.lines}>
                <Text>Instituição B:</Text>
                <Image 
                style={styles.image}
                    source={{
                        uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                      }}
                />
            </View>
            <View style={styles.lines}>
                <Text>Instituição C:</Text>
                <Image 
                style={styles.image}
                    source={{
                        uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                      }}
                />
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}