import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../redux/actions/listAction';  //addlisti import ladik dispatch ile kullanicaz

export default function ListProcess(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    return (
        <View>
            <View>
                {state.myList.map((item, index) => {
                    return (<Text key={index}>{item}</Text>)
                })}
            </View>
            <Button title='add item' onPress={() => dispatch(addList(state.counter))} />
        </View>
    )
}

const styles = StyleSheet.create({

});