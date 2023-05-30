import { StyleSheet } from "react-native";

// @autor Joao Gabriel <joao.alves1@alunos.sc.senac.br>
// @description CSS global do App

export const styles = StyleSheet.create({
    //Estilos universais "eu acho"
    container:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#000",
    },
    titulo:{
        color:"#Fff",
        fontWeight:'bold',
        fontSize:30,
    },
    //Box do HomeScreen
    box:{
        width:"100%",
        height:"100%",
        backgroundColor:"#f2f2f2",
        borderTopEndRadius:7,
        borderTopStartRadius:7,
    },
})

