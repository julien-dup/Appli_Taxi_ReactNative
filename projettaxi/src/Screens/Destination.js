import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';

const Destination = ( {navigation}) => {
    return(
        <View style={{flex: 1, backgroundColor: 'black'}}>
             <View>
                <Text style={styles.text}>Ou souhaitez aller ? </Text>
            </View>
            <View style={{marginTop: 24}}>
                <Text style={styles.text}>Mes adresses : </Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <TouchableOpacity style={{backgroundColor: 'blue', width: '30%',alignItems: 'center', marginTop: 24, marginLeft: 16}}>
                        <Text style={{color:'white', fontSize: 24}}>MAISON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'red', width: '30%',alignItems: 'center', marginTop: 24, marginLeft: 16}}
                onPress={() => navigation.navigate('Confirmation')}>
                        <Text style={{color:'white', fontSize: 24}}>Travail</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 24}}>
                <Text style={styles.text}>Entrer une adresse manuellement : </Text>
            </View>
            <View>
                <View>
                        <TextInput
                        style={{marginTop: 16}}
                        label='adresse'
                        />
                </View>
                <View >
                        <TextInput
                        style={{marginTop: 16}}
                        label='code postal'
                        />
                </View>
                <View>
                        <TextInput
                        style={{marginTop: 16}}
                        label='ville'
                        />
                </View>
            </View>
            <View style={{marginTop: 32, alignItems: 'center'}}>
                <TouchableOpacity 
                style={{padding: 32, alignItems: 'center', backgroundColor: 'orange', borderRadius: 10}}
                onPress={() => navigation.navigate('Confirmation')}
                >
                    <Text style={{color: 'white', fontSize: 24}}>VALIDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Destination

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'white'
    }
})