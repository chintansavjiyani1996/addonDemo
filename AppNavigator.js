import { AuthLoadingScreen } from "./screen/AuthLoadingScreen";
import LoginScreen from "./screen/LoginScreen";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));
  
  const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
  const AuthStack = createStackNavigator({ login:LoginScreen  });
