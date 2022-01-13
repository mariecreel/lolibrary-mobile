import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingSpinner = ({searching}) => {
    return (
        <View style={style.wrapper}>
            <ActivityIndicator size="large" color="pink" animating={searching}/>
        </View>

    )
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '60%',
        marginTop: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default LoadingSpinner;