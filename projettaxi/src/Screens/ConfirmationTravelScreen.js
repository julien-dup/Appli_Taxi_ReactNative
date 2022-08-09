import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const ConfirmationTravel = ( {navigation} ) => {

    

    const alert = () => {
        window.alert('Merci de votre confiance, un taxi arrive dans les meilleurs délais')
    }

    

    return(
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={{alignItems: 'center', marginTop: 24}}>
                <Text style={styles.text}>Confirmation de votre trajet :</Text>
            </View>
            <View style={{marginTop: 24}} >
                <Text style={styles.text}>Départ :</Text>
                <Text style={styles.text}> 10 Pl. Léon Meyer, 76600 Le Havre </Text>
            </View>
            <View style={{marginTop: 24}} >
                <Text style={styles.text}>Arrivé :</Text>
                <Text style={styles.text}> 71 quai Colbert, 76600 Le Havre </Text>
            </View>
            <View style={{marginTop: 24}}>
                <Text style={styles.text}>Estimation durée trajet :</Text>
                <Text style={styles.text}> 5 mn </Text>
            </View>
            <View style={{marginTop: 24}} >
                <Text style={styles.text}>Estimation du coûts du trajet :</Text>
                <Text style={styles.text}> 7.50 € </Text>
            </View>
            <View style={{marginTop: 32, alignItems: 'center', flexDirection: 'row', marginTop: 56, marginLeft: 48}}>
                <TouchableOpacity 
                style={{padding: 32, alignItems: 'center', backgroundColor: 'grey', borderRadius: 10}}
                onPress={() => navigation.navigate('Destination')}
                >
                    <Text style={{color: 'white', fontSize: 24}}>RETOUR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{padding: 32, alignItems: 'center', backgroundColor: 'orange', borderRadius: 10, marginLeft: 24}}
                onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{color: 'white', fontSize: 24}}>VALIDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ConfirmationTravel


const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'white'
    }
})