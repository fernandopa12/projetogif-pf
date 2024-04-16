import React from "react";
import {Text,View} from 'react-native'


const TelaResultado = ({route})=>{
    
    

    const escolha = route.params.escolha
    const link = `api.giphy.com/v1/${escolha}/search`;
    console.log(link)

    return(
        <View>
            <Text>TELA RESULTADO</Text>
        </View>
    )
}


export default TelaResultado