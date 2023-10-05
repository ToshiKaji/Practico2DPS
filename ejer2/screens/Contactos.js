import React, {useState} from 'react';
import { Text, StyleSheet,SafeAreaView ,ScrollView, View, TouchableHighlight,FlatList, TextInput, Button, Modal, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contactos = ({navigation, route,}) => {
    const[jsoncontactos, setjsoncontactos]=useState([]);
    const [name_contact,setname_contact]= useState('');
    const [lstname_contact,setlstname_contact]= useState('');
    const [number,setnumber]= useState('');
    const [objcontactos,setobjcontactos] = useState('');
    //estado de modal
    const [modal_state,setmodal_state]=useState(false);

    //funcion de carga de contactos solo cuando se navega a ella
useFocusEffect(
    React.useCallback(()=>{
getcontactos();
    },[])
);

    //funciones de guardado
    storedata_contactos = async (key, value) => {
        await AsyncStorage.setItem(key,JSON.stringify(value));

    }

Crear_contacto = async() =>{
    jsoncontactos.push({name_contact,lstname_contact,number});
    await storedata_contactos(route.params.name,jsoncontactos);
    getcontactos();
    console.log(name_contact); 

  }

  //funcion eliminar
  eliminar = async(key) =>{
    const arrfiltrado = jsoncontactos.filter((item)=>item.number!==key);
    setjsoncontactos(arrfiltrado);
    await storedata_contactos(route.params.name,arrfiltrado);
    await getcontactos();
    setobjcontactos(arrfiltrado);
    console.log(key);
 
  }

  getstorage_contactos= async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value
}

const getcontactos = async () =>{

   await getstorage_contactos(route.params.name).then(result => {
    if(!setjsoncontactos.length)
    {
         setjsoncontactos(JSON.parse(result));
         setobjcontactos(JSON.parse(result));
    }
    else{
        setobjcontactos(JSON.parse(result));
    }
    })




}


    return(
                  
      <>
      <View style={styles.containertitle}>
       <Text style={styles.labeltitle}>¡Buen Dia! {route.params.name}</Text>
      </View>
       <View style={styles.forms}>
       
       <Modal visible={modal_state} onRequestClose={()=>setmodal_state(false)} animationType='slide'>
       
       <View style={styles.form}>
      
       <View>
       <Text style={styles.label}>Nombre:</Text>
       <TextInput style={styles.input} onChangeText={ (txt) => setname_contact(txt)}/>
       </View>
      
       <View>
       <Text style={styles.label}>Apellido:</Text>
       <TextInput style={styles.input} onChangeText={ (txt) => setlstname_contact(txt)}/>
       </View>
       
       <View>
       <Text style={styles.label}>Numero:</Text>
       <TextInput style={styles.input} onChangeText={ (txt) => setnumber(txt)}/>
       </View>
     

        <View style={styles.botoncrearcontacto}>
        <Button title='Crear' onPress={Crear_contacto}/>
        </View>
        </View>
      
       </Modal>
<View>
<SafeAreaView style={styles.container3}>

<FlatList data={objcontactos}
renderItem={({item})=>(

    <View style={styles.card}>
<Text>{item.name_contact+" "+item.lstname_contact}</Text>
<Text>{item.number}</Text>
<TouchableOpacity onPress={()=>eliminar(item.number)} style={styles.botoneliminar}>
<Text>x</Text>
</TouchableOpacity>

</View>


)}

/>

</SafeAreaView>
</View>
<View style={styles.container2}>
       <TouchableOpacity style={styles.botonsctualizar} onPress={getcontactos}>
        <Text>Actualizar</Text>
        </TouchableOpacity>
       
      
       <TouchableOpacity style={styles.botoncrear} onPress={()=>{setmodal_state(true),getcontactos}}>
        <Text>+</Text>
        </TouchableOpacity>
        </View>
       
        </View>
        
        </>
    
    );
    }

    const styles = StyleSheet.create({
botoncrear:{ 
    
    right:10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top:-40,
    borderRadius: 200,
    backgroundColor: 'orange',
},
botonsctualizar:{ 
    
    right:10,
    width: 100,
    height: 50,
    top:-45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 200,
    backgroundColor: 'orange',
},
container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
},
containertitle:{
    
    height:50,
    justifyContent: 'center',
},
container2:{
    position: 'absolute',
    top:590,
    left:290
    
},

boton:{
    position: 'absolute',
    bottom:-670,
    right:10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
},
botoncrearcontacto:{
width:420,
 bottom:-420,
 right:20,

 
},
botoneliminar:{
backgroundColor: 'red',
alignItems: 'center',
position: 'absolute',
top:30,
right:30,
height:25,
width:50,
borderRadius:100,

 
},
form:{
paddingHorizontal: 20,
paddingVertical: 10,
flex: 1
},
label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
    },
    labeltitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        textAlign:'center',
        bottom:10,
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
    card: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
        },
        container3: {
            height:680,
            
          },
        

    })
    
    export default Contactos;