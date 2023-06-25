import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome,
   Entypo, 
   MaterialCommunityIcons, 
   FontAwesome5, 
   Ionicons,
   MaterialIcons
  } from '@expo/vector-icons';
  import MenuOption from '../../pages/MenuOption/index'
  import car from '../../../assets/images/car.png'
  import Controls from '../../pages/Contols/index'






export default function Header() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
              My Model
          </Text>
          <Text style={styles.subtitle}>
            Parked
          </Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />

      </View>
      <Image source={car} style={styles.image} resizeMode='contain'/>
      <MenuOption />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
    padding: 24,
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: 500,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
