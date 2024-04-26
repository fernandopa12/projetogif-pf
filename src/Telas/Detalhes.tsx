import React from "react";
import {Linking,Image,ImageBackground, Text,View,StyleSheet} from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";


const TelaDetalhes = (props)=>{
    //console.log(props)
    const data = props.route.params.item
    console.log(data)



    return(
        <ImageBackground
            source={require('../../assets/BG.png')}
            style={estilo.container}
        >
            <SafeAreaView>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name='chevron-back' size={40} color='white'
                        onPress={()=>props.navigation.goBack()}
                    />
                    <Text style={estilo.texto}>Resultados</Text>
                </View>

                <Image 
                    source={{uri:data.images.original.url}}
                    style={{
                        width:parseInt(data.images.original.width),
                        height:parseInt(data.images.original.height)
                    }}
                />

                <Text style={estilo.texto}>{data.title}</Text>
                <Ionicons name='globe' color='white' size={40}
                    onPress={()=>Linking.openURL(data.images.original.url)}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}
const estilo = StyleSheet.create({
    container:{
        flex:1
    },
    texto:{
        fontSize:25,
        color:'white'
    }
})

export default TelaDetalhes