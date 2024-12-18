import React, {useContext, useState} from "react";
import {Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Produtos from '../../components/Produtos'
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/CartContext";
export default function Home(){
  const {cart, addCart} = useContext(CartContext)
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ])

  function handleCart(item){
    addCart(item)
  }
  return(
    <SafeAreaView style={styles.container}> 
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={ () => navigation.navigate('Cart')}
          >
          <View style={styles.dot}>
            <Text style={styles.dotText}>
              {cart?.length}
            </Text>
          </View>
        
            <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={ ({item}) => <Produtos data={item} addToCart={ () => handleCart(item)}/> }
      />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingStart: 14,
    paddingEnd: 14
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -4,
    left: -6
  },
  dotText: {
    fontSize: 12
  },
  list: {

  }
})