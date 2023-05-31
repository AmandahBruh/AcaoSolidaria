import { View, Text, } from "react-native";
import styles from "../../utils/styles";

export default function Header(){
    return (
        <View style={styles.Header}>
                <Text style={styles.titulo}>Login</Text>
        </View> 
    );
}
