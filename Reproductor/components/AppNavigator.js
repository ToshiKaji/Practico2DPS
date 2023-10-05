import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './Principal';
import Canciones from './canciones';
import MusicPlayer from './MusicPlayer';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={themeNav}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Canciones" component={Canciones} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const themeNav = {
  dark: false,
  colors: {
    primary: 'rgb(208, 191, 255)',
    background: 'rgb(190, 173, 250)',
    card: 'rgb(223, 204, 251)',
    text: 'rgb(29, 28, 26)',
    border: 'rgb(186, 148, 209)',
    notification: 'rgb(255, 243, 218)',
  },
}