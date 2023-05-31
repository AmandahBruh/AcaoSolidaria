import { StyleSheet } from "react-native";

// @autor Joao Gabriel <joao.alves1@alunos.sc.senac.br>
// @description CSS global do App

export const styles = StyleSheet.create({
    //Estilos universais "eu acho"
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%",
    },
    titulo:{
        color:"#Fff",
        fontWeight:'bold',
        fontSize:30,
    },
    Header:{
        width:"100%",
        height:100,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#000",
        marginBottom:20,
    },
    //HomeScreen
    box:{
        width:"100%",
        height:"70%",
        backgroundColor:"#f2f2f2",
        borderTopEndRadius:7,
        borderTopStartRadius:7,
    },
    containerH:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#000",
    },
    //LoginScreen
    input:{
        width:"60%",
        height:50,
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        borderBottomColor:'#000',
        borderBottomWidth:3,
        marginBottom:30,
    },
    containerL:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
})

export default styles;