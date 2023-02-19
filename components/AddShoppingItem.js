import { StyleSheet, View,Text, TextInput, Button, Settings } from 'react-native';
import { useState } from 'react';


export const AddShoppingItem = ({addItem}) => {

    const [item,setItem] = useState('')

    const pressHandler = (item) => {
        addItem(item)
        setItem('')
    }

    console.log(item)
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Input item"
                 value={item} onChangeText={(text) => setItem(text)}/>
            <Button title='Add' onPress={() =>pressHandler(item)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        marginVertical:20,
        textAlign:'center'
    },
    container: {
        marginHorizontal:40,
    }
})