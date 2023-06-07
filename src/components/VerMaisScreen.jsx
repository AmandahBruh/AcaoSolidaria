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
                <Text style={styles.TitleInst}>Instituição A:</Text>
                
                <Image 
                style={styles.image}
                source={{
                    uri: ' https://gamerview.uai.com.br/wp-content/uploads/2022/09/Tanjiro-Demon-Slayer-DLC.jpg ',
                }}
                />
                <Text style={styles.textRolagem}>Descrição da Instituição A:</Text>
                <Text style={styles.textRolagem2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>

            <View style={styles.lines}>
                <Text style={styles.TitleInst}>Instituição B:</Text>

                <Image 
                style={styles.image}
                source={{
                    uri: ' https://nerdhits.com.br/wp-content/uploads/2021/08/tomioka01.jpg ',
                }}
                />
            <Text style={styles.textRolagem}>Descrição da Instituição B:</Text>
            <Text style={styles.textRolagem2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            </View>

            <View style={styles.lines}>
            <Text style={styles.TitleInst}>Instituição C:</Text>

                <Image 
                style={styles.image}
                source={{
                    uri: 'https://animes.olanerd.com/wp-content/uploads/2022/12/1670451143_My-Hero-Academia-A-luta-de-Shigaraki-e-justificada.jpg',
                }}
                />
                <Text style={styles.textRolagem}>Descrição da Instituição C:</Text>
                <Text style={styles.textRolagem2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>

            </ScrollView>
        </SafeAreaView>
    );
}

//Fazer as imagens estilo posts fazer um quadrado para cada (parecido com o insta)