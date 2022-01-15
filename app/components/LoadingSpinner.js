import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingSpinner = ({searching, marginTop}) => {
    return (
        <View style={{marginTop: marginTop, ...style.wrapper}}>
            <ActivityIndicator size="large" animating={searching}/>
        </View>

    )
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
});


export default LoadingSpinner;