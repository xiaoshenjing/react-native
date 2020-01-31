import { createStackNavigator } from 'react-navigation-stack'

import Home from '../pages/home/XZHome'
import Content from '../pages/home/XZContent'

export default createStackNavigator({ Home, Content }, {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0
    })
})