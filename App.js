import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home/Home';
import TaskScreem from './src/screens/Tasks/Task';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Task: { screen: TaskScreem }
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle:{
      backgroundColor: '#162b38'
    },
    headerTintColor: '#faf3f2'
  }
});

export default createAppContainer(AppNavigator);
