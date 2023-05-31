import React from "react";
import RootNavigation from "./src/index";
import { Provider as NativeProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { customTheme } from "./src/utils/theme";

/**
 * @author             João Gabriel
 * @description        apps
 * @version            1.01
 * @since              1.0.0
 *
 *
 * @param              {Object} navigation Objeto de navegação do React
 * @export             {function}
 * @return             {React.Component}
 */

export default function App() {
  // const theme = useColorScheme();
  // const themeDark = customTheme.dark;
  // const themeLight = customTheme.light;
  return (
    // <NativeProvider theme={theme === "dark" ? themeDark : themeLight}>
    // </NativeProvider>
      <RootNavigation />
  );
}
