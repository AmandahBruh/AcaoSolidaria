import { StyleSheet } from "react-native";

// @autor Joao Gabriel <joao.alves1@alunos.sc.senac.br>
// @description CSS global do App

export const styles = StyleSheet.create({
    //Estilos universais "eu acho"
    container:{
        flex: 1,
        backgroundColor: '#000',
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
        // marginBottom:140,
    },
    TouchableOpacity:{
        color:"#160DBF",
        fontWeight:"bold",
    },
    input:{
        width:"80%",
        height:50,
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        borderBottomColor:'#000',
        borderBottomWidth:3,
        marginTop:30,
    },

    //HomeScreen
    box:{
        width:"90%",
        height:"50%",
        backgroundColor:"#f2f2f2",
        borderRadius:7,
        marginTop:150,
        justifyContent:"center",
        alignItems:"center",
    },
    containerH:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        backgroundColor:"#D4D4D4",
    },
    Button:{
        width:"70%",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        backgroundColor:"#000",
        borderRadius:7,
    },

    //LoginScreen
    inputL:{
        width:"80%",
        height:50,
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        borderBottomColor:'#000',
        borderBottomWidth:3,
    },
    boxL:{
        width:"90%",
        height:400,
        borderRadius:7,
        marginTop:150,
        alignItems:"center",
        textAlign:"right",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    textoInput:{
        marginBottom:30,
    },
    ButtonL:{
        width:"60%",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        backgroundColor:"#000",
        borderRadius:7,
    },

    //VerMais
    inputV:{
        width:"95%",
        height:50,
        borderRadius:9,
        borderBottomColor:'#000',
        borderBottomWidth:3,
        },
    image:{
        width:"100%",
        height:250,
        marginTop:30,
        marginBottom:10,
    },
    rolagem:{
        // marginTop:-,
        width:"100%",
        textAlign:'center',
    },
    areaInput:{
        width:"100%",
        height:100,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
    },
    textRolagem:{
        color:"#fff",
        fontSize:15,
    },
    textRolagem2:{
        color:"#fff",
        textAlign:"justify",
        marginBottom:"20%",
    },
    lines:{
        borderTopWidth:3,
        borderBottomWidth:3,
        borderColor:"#fff",
        textAlign:"left",
    },
    TitleInst:{
        color:"#fff",
        fontSize:15,
        fontWeight:"bold",
        marginTop:5,
    },

    //RecuperarScreen
    ButtonR:{
        width:"70%",
        height:50,
        marginTop:20,
        justifyContent:"center",
        backgroundColor:"#000",
        borderRadius:7,
    },
})

export default styles;