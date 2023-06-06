import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/HomeScreen";
import CadastrarIScreens from "./components/CadastrarIScreen";
import CadastrarPScreens from "./components/CadastrarPScreen";
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

      <Tabs.Screen name="LoginScreen" component={LoginScreen} />

      <Tabs.Screen 
        name="VerMaisScreen" 
        component={VerMaisScreen} 
      />

      <Tabs.Screen
        name="CadastrarIScreens" //cadastrarIScreens
        component={CadastrarIScreens}
      />
      <Tabs.Screen name="CadastrarPScreens" component={CadastrarPScreens} />
    </Tabs.Navigator>
  );
}
