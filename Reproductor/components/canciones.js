import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
  
  const DATA = [
    {
      title: "Red Dahlia",
      artist: "Mili",
      id: "1"
    },
    {
      title: "Ga1ahad and Scientific Witchery",
      artist: "Mili",
      id: "2"
    },
    {
      title: "Vulnerability",
      artist: "Mili",
      id: "3"
    },
    {
      title: "RTRT",
      artist: "Mili",
      id: "4"
    },
    {
      title: "Unidentified Flavourful Object",
      artist: "Mili",
      id: "5"
    },
    {
      title: "Meatball Submarine",
      artist: "TheWeeknd",
      id: "6"
    },
    {
      title: "Nenten",
      artist: "Mili",
      id: "7"
    },
    {
      title: "Bathtub Mermaid",
      artist: "Mili",
      id: "8"
    },
    {
      title: "Cerebrite",
      artist: "Mili",
      id: "9"
    },
    {
      title: "World.execute(me);",
      artist: "Mili",
      id: "10"
    },
  ];
  
  const Canciones = () => {
    const navigation = useNavigation();
    const goToOtherScreen = () => {
        navigation.navigate('MusicPlayer');
      };
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
            <TouchableOpacity onPress={goToOtherScreen} >
              <Text style={styles.item}>{item.title} - {item.artist}</Text>
              </TouchableOpacity>
            </View>
          )}
        />      
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#DFCCFB'
    },
    item: {
      backgroundColor: '#FFF3DA',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 22,
      fontWeight: 'bold',
      borderRadius: 12
    }
  });
  
  export default Canciones;
  