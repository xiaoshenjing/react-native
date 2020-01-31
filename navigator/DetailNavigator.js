import { createStackNavigator } from 'react-navigation-stack'

import Detail from '../pages/detail/XZDetail'

export default createStackNavigator({ Detail }, {
    initialRouteName: "Detail",
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0
    })
})