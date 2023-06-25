import { StyleSheet, Text, View, FlatList, Linking } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from '@expo-router'


import menuOptions from '../../../assets/menuOptions'
import Controls from '../../pages/Contols/index'


const MenuOption = () => {
  return (
    <FlatList 
    showsVerticalScrollIndicator={false}
    data={menuOptions}
    ListHeaderComponent={Controls}
    renderItem={({ item }) => (
        <View style={styles.optionRow}>

        {/* Icon */}
        <MaterialCommunityIcons name={item.iconName} size={26} color='gray'/>
    
        {/* Text */}
        <Link style={styles.optionText}> {item.name} </Link>
    
        {/* Icon */}
        <MaterialIcons 
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: 'auto'}}
        />
      </View>
    )}
    />
  )
}

export default MenuOption

const styles = StyleSheet.create({
    optionRow: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
      },
      optionText: {
        color: "#eee",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
      }
})