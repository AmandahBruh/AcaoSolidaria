import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/HomeScreen";
import cadastrarIScreens from "./components/CadastrarIScreen";
import cadastrarPScreens from "./components/CadastrarPScreen";
import LoginScreen from "./components/LoginScreen";
import VerMaisScreen from "./components/VerMaisScreen";

/**
 * @author          João Gabriel <joao.alves1@alunos.sc.senac.br>
 * @description     Pagina responsável pela navegação
 * @version         1.0.1
 * @since           1.0.0
 *
 * @export          {function} RootNavigation
 * @return          {React.Component} 
 */

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: "#000000" }}
      activeColor="#0084FF"
      inactiveColor="#FFFFFF"
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Login" component={LoginScreen} />
      <Tabs.Screen name="Ver mais" component={VerMaisScreen} />
      <Tabs.Screen
        name="Cadastrar instituições"
        component={cadastrarIScreens}
        
      />
      <Tabs.Screen name="Cadastrar pessoas" component={cadastrarPScreens} />
    </Tabs.Navigator>
  );
}
