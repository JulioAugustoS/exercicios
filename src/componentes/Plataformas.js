import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'ios'){
            Alert.alert('Informação', msg)
        }else{
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }
    }

    return (
        <Button title='Plataforma?'
            onPress={() => notificar('Parabéns!')} />
    )
}