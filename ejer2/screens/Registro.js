import React, {useId, useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registro = ({navigation}) => {
const [name,setname]= useState('');
const [email,setemail]= useState('');
const [password,setpassword]= useState('');
const [password2,setpassword2]= useState('');
const [loginid,setloginid]= useState('');


//crear usuario
storedata_registro = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
navigation.navigate('Contactos', {name: name, email: email, password: password});
}

 savedata_registro = () => {

    

    if(password==password2){
this.storedata_registro(email,{name: name, email: email, password: password})
    }else{
        alert('Las contraseñas no coinciden');
    }

}

getstorage_registro = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value
}


readstorage_registro = () =>{
    this.getstorage_registro(loginid).then(result => {
        let obj = JSON.parse(result)
        alert(obj.name+" "+obj.password)
    })
     
        
    
}


return(
    <>
    <View>
    <View>
<Text style={styles.label}>Nombre:</Text>
<TextInput style={styles.input} onChangeText={ (txtname) => setname(txtname)}/>
    </View>
<View>
<Text style={styles.label}>Correo:</Text>
<TextInput style={styles.input} onChangeText={ (txtemail) => setemail(txtemail)}/>
</View>

<View>
<Text style={styles.label}>Contraseña:</Text>
<TextInput style={styles.input} onChangeText={ (txtpassw) => setpassword(txtpassw)}/>
</View>

<View>
<Text style={styles.label}>Repetir Contraseña:</Text>
<TextInput style={styles.input} onChangeText={ (txtpassw) => setpassword2(txtpassw)}/>
</View>



<View>
   <TouchableOpacity style={styles.botoningresar} onPress={savedata_registro}>
    <Text>Registrar</Text>
   </TouchableOpacity>
</View>
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
            width: 380,
            borderWidth:1,
            borderRadius:100,
            padding:10,
            borderColor: '#030303',
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
    

})
export default Registro;