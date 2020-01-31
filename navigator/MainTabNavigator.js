import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import Home from './HomeNavigator'
import Detail from './DetailNavigator'

const Tabs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => {
        return focused ?
          <Image source={require('../asset/tabs/home.png')} style={{ width: 24, height: 24 }} /> :
          <Image source={require('../asset/tabs/home.png')} style={{ width: 18, height: 18 }} />
      }
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      tabBarLabel: '详情',
      tabBarIcon: ({ focused }) => {
        return focused ?
          <Image source={require('../asset/tabs/detail.png')} style={{ width: 24, height: 24 }} /> :
          <Image source={require('../asset/tabs/detail.png')} style={{ width: 18, height: 18 }} />
      }
    }
  }
}

const RootTab = createBottomTabNavigator({ Home: Tabs.Home, Detail: Tabs.Detail }, {
  tabBarComponent: props => (
    <BottomTabBar {...props} activeTintColor='grey' style={{ borderTopColor: 'red', borderTopWidth: 3 }} />
  )
})

const Rooters = createAppContainer(RootTab)

export default Rooters