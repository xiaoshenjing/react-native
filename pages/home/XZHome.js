import React from 'react'

import {
    Text,
    View,
    Button
} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center' }}>
                <Text>首页</Text>
                <Button title='内容' onPress={() => this.props.navigation.navigate('Content')} />
            </View>
        )
    }
}