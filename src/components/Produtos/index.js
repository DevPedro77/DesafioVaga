import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Produtos({data, addToCart}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R${data.price}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart} >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#95a5a6',
    borderRadius: 12
  },
  title: {
    fontWeight: 'bold'
  },
  price: {

  },
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#27ae60',
    borderRadius: 4,
    paddingTop: 6,
    paddingBottom: 6
  },
  buttonText: {

  }
})