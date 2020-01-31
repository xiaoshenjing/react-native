import React from 'react'

import {
    Text,
    View
} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>详情</Text>
            </View>
        )
    }
}