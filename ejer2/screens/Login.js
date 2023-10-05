import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({navigation}) => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    
    //verificaciones

  

const go_registro = () =>{
    
navigation.navigate('Registro');

}
getstorage_login = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value
}

const verificar_usuario = () =>{
    
    const errores = {};
    if(!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) )
    {errores.email='email invalido o vacio';
        alert('Email invalido o vacio');
    }
    if (!password) {
        errores.password='password vacia';
      }
      if(errores.lenght == 0){
    
      

    this.getstorage_login(email).then(result => {
        let obj = JSON.parse(result)
        console.log(result);
        if(!obj || obj.password!=password){
            alert('vredenciales equivocadas')
        }
        else{
            alert(obj.name)
        navigation.navigate('Contactos',obj);
        }
    })
}
    
}


return(
    <>

   


       <View>
       <Text style={styles.label}>Email:</Text>
       <TextInput style={styles.input} onChangeText={ (txt) => setemail(txt)}/>
       </View>
       
       <View>
       <Text style={styles.label}>Constraseña:</Text>
       <TextInput style={styles.input} onChangeText={ (txt) => setpassword(txt)}/>
       </View>

       <TouchableOpacity style={styles.botoningresar} onPress={verificar_usuario}>
        <Text>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.texto1}>Si no tienes una cuenta puedes </Text>
        <TouchableOpacity>
            <Text onPress={go_registro} style={styles.textoregistrarse}>Registrarte</Text>
        </TouchableOpacity>
        </View>
    </>

);

}
const styles = StyleSheet.create({
    form:{
    backgroundColor: '#9830CC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
        },
        input: {
            height: 49,
            left: 0,
            top: 0,
            width: 313,
        },
        botoningresar:{
        left:50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top:20,
        borderRadius: 200,
        backgroundColor: 'orange',
        },
        input: {
            height: 49,
            left: 0,
            top: 0,
            width: 380,
            borderWidth:1,
            borderRadius:100,
            padding:10,
            borderColor: '#030303',
        },

        container:{
            flex:1,
            alignItems:'center',
        },
        texto1:{
            position:'absolute',
            top:19,
            left:45,
        },
    textoregistrarse:{
        position:'absolute',
        top:20,
        left:65,
        textDecorationLine:'underline',
        }
        
    
    })
export default Login;