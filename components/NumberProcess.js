import React from "react";
import { Text, Button, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// useSelector data okumaya yaran bir nesne / useDispatch ise actions lari tetiklemeye yarayan bir nesne
import { increaseNumber, decreaseNumber } from '../redux/actions/numberAction';

function NumberProcess() {

    const dispatch = useDispatch();     //burda da dispatchi tanimladik tetikliyoruz
    const state = useSelector((state) => state);  //selector ile storun guncel bilgisini cekmis oluyoruz
    console.log(state);  //state.counter da diyebiliriz object cunku
    return (
        <>
            <View style={styles.container} >
                <Button title='+' style={{ width: 100, padding: 15 }} onPress={() => dispatch(increaseNumber())} />
                <Text>
                    {state.counter}
                </Text>
                <Button title='-' style={{ width: 100, padding: 15 }} onPress={() => dispatch(decreaseNumber())} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width:200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default NumberProcess;