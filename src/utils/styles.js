import { StyleSheet } from "react-native";

// @autor Joao Gabriel <joao.alves1@alunos.sc.senac.br>
// @description CSS global do App

export const styles = StyleSheet.create({
    //Estilos universais "eu acho"
    container:{
        flex: 1,
        backgroundColor: '#D4D4D4',
        alignItems: 'center', 
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
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#000",
        marginBottom:140,
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
        backgroundColor:"#D4D4D4",
    },
    Button:{
        width:"100%",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        backgroundColor:"#000",
        borderRadius:7,
    },

    //LoginScreen
    input:{
        width:"60%",
        height:50,
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        borderBottomColor:'#000',
        borderBottomWidth:3,
        marginTop:30,
    },
    boxL:{
        width:"100%",
        height:400,
        alignItems:"center",
        textAlign:"right",
        justifyContent:"center",
        backgroundColor:"#D4D4D4",
    },
    textoInput:{
        marginBottom:30,
    },
})

export default styles;