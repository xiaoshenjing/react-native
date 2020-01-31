import React from 'react'

import {
    Text,
    View
} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                <Text>内容</Text>
            </View>
        )
    }
}