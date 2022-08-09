import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { TextInput } from 'react-native-paper';

const InfoScreen = ( ) => {
    return (
        <View style={{padding: 16, backgroundColor: 'black', flex:1}}>
           
           <View>
                <View style={{marginTop: 24}}>
                    <Text style={styles.text}>Votre adresse mail: </Text>
                </View>
                <View>
                    <TextInput
                    style={{marginTop: 16}}
                    label='paul@ricard.com'
                    />
                </View>
                <View style={{marginTop: 24}}>
                    <Text style={styles.text}>Votre nom d'utilisateur : </Text>
                </View>
                <View>
                    <TextInput
                    style={{marginTop: 16}}
                    label='1tiJaune'
                    />
                </View>
                <View style={{marginTop: 32, alignItems: 'center'}}>
                <TouchableOpacity 
                style={{padding: 32, alignItems: 'center', backgroundColor: 'orange', borderRadius: 10}}
                onPress={()=>handleLogin()}
                >
                    <Text style={{color: 'white', fontSize: 24}}>VALIDER</Text>
                </TouchableOpacity>
            </View>
                <View style={{marginTop: 24}}>
                    <Text style={styles.text}>Vos adresses : </Text>
                </View>
                <TouchableOpacity style={{backgroundColor: 'blue', width: '30%',alignItems: 'center', marginTop: 24}}>
                    <Text style={{color:'white', fontSize: 24}}>MAISON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'red', width: '30%',alignItems: 'center', marginTop: 24}}>
                    <Text style={{color:'white', fontSize: 24}}>Travail</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
    }

    export default InfoScreen

    const styles = StyleSheet.create({
        text: {
            fontSize: 24,
            color: 'white'
        }
    })