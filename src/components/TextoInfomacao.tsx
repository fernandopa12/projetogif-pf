import { View,StyleSheet,Text } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

const TextoInformacao = ({mostrarCabecalho}) => {
    
    return mostrarCabecalho ? (
    <View style={estilo.cabecalhoFlat}>
        <Ionicons
            name="arrow-up"
            size={40}
            color='white'
        />
        <Text style={estilo.txtHeaderFlat}>Para realizar a pesquisa utilize o campo acima</Text>
    </View>
    ) : null
    
}

const estilo = StyleSheet.create({
   
    cabecalhoFlat:{
        alignItems:'center',
        margin:20
    },
    txtHeaderFlat:{
        fontSize:16,
        color:'white',
        textAlign:'center',
    }
})

export default TextoInformacao