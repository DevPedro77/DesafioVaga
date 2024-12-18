import React from "react";
import {Text, View, StyleSheet} from 'react-native';

export default function Cart(){
  return(
    <View style={styles.container}>
      <Text>Carrinho</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  }
})