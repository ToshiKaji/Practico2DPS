import {
    Pressable,
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
    Platform
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  
  function Principal() {
    const navigation = useNavigation();
    const goToOtherScreen = () => {
        navigation.navigate('Canciones');
      };
    return (
        <View style={styles.container}>
        <ScrollView>
  
          <View>
            <Text style={styles.titulo}> Clasico moderno </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/MiracleMilk.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Miracle Milk</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/MilleniumMother.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Millenium Mother</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/Hue.png')}
                  />
                  <Text style={styles.sub_titulo}>Hue</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/Ame.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Ame to Taieki to Nioi/Static</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/Rightfully.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Rightfully</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/IntrauterineEducation.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Intrauterine Education</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/Chocological.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Chocological</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/hagmili.jpg')}
                  />
                  <Text style={styles.sub_titulo}>H△G×Mili</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/Klavier.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Klavier</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Mili/KeyIngredient.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Key Ingredient</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            <Text style={styles.titulo}> Electronica </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/ParallelUniverseShifter.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Parallel Universe Shifter</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/u.u.f.o.jpg')}
                  />
                  <Text style={styles.sub_titulo}>U.U.F.O</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/Tera.jpg')}
                  />
                  <Text style={styles.sub_titulo}>TERA I/O</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/DwellersEmpty.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Dweller's Empty Path</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/XronialXero.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Xronial Xero</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/Noisz.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Noisz Re:Verse</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/Goin.jpg')}
                  />
                  <Text style={styles.sub_titulo}>GOIN'</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/blackmagikblazing.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Blackmagik Blazing</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/heartofandroid.jpg')}
                  />
                  <Text style={styles.sub_titulo}>heart of android</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Camellia/crystallized.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Crystallized</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            <Text style={styles.titulo}> Rock </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/Elsilencio.jpg')}
                  />
                  <Text style={styles.sub_titulo}>El Silencio</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/Eldiablito.jpg')}
                  />
                  <Text style={styles.sub_titulo}>El diablito</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/ElnerviodelVolcan.jpg')}
                  />
                  <Text style={styles.sub_titulo}>El nervio del volcán</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/Caifanes.png')}
                  />
                  <Text style={styles.sub_titulo}>Caifanes</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/Finisterra.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Finisterra</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/LoveandOz.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Love and Oz II</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/Labruja.jpg')}
                  />
                  <Text style={styles.sub_titulo}>La Bruja</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/Grandes.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Grandes</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/CelticLand.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Celtic land</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}> 
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Rock/CelticLandOfOz.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Celtic land of Oz</Text>
                </Pressable>
              </View>
            </ScrollView>

            <Text style={styles.titulo}> J-pop </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/赤裸裸.jpg')}
                  />
                  <Text style={styles.sub_titulo}>赤裸裸</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/agitate.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Agitate</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/coloreddisc.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colored Disc</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/notitle-.jpg')}
                  />
                  <Text style={styles.sub_titulo}>No title -</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/EndlessEP.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Endless EP</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/Sigma.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Sigma</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/Phantom(me).jpg')}
                  />
                  <Text style={styles.sub_titulo}>Phantom(me)</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/Q.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Q?</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/Edge.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Edge</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/Reol/BLACKBOX.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Black Box</Text>
                </Pressable>
              </View>
            </ScrollView>

            <Text style={styles.titulo}>Filarmónica </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/Ruina.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Ruina</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/flowing.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Flowing</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/SweetsTime.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Sweets Time</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors2.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors 2</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors3.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors 3</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors4.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors 4</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors5.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors 5</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors6.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors 6</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/albums/a_hisa/colors7.jpg')}
                  />
                  <Text style={styles.sub_titulo}>Colors 7</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
  
        </ScrollView>      
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DFCCFB',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      padding: 10,
      alignContent: 'center'
    },
    album: {
      width: 175,
      height: 175,
      marginRight: 10,
      borderRadius: 20,
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 10,
      color: '#1D1C1A',
    },
    sub_titulo: {
      color: '#1D1C1A',    
      fontSize: 16,
      marginBottom: 20,
    },
  });
  
  export default Principal;