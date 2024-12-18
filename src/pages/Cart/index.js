import React, {useContext} from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CartContext} from '../../contexts/CartContext'
import ItemCard from "../../components/ItemCard";

export default function Cart(){
  const {cart, addCart, removeItemCart } = useContext(CartContext);
  return(
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={ ({item}) => (
          <ItemCard
            data={item}
            addAmount={() =>addCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 14,
  }
})