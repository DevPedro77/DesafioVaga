import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemCard({ data, addAmount, removeAmount}) {
  const [amount, setAmount] = useState(data?.amount)

  function handleIncrease(){
    addAmount()
    setAmount( item => item +1)
  }

  function handleDecrease(){
    removeAmount()
    
    if(amount ===0){
      setAmount(0)
      return;
    }
    setAmount( item =>  item - 1)
  }
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>{data.name}</Text>
        <Text style={style.price}>${data.price.toFixed(2)}</Text>
      </View>

      <View style={style.amountContainer}>
        <TouchableOpacity style={style.button} onPress={handleDecrease}>
          <Text style={style.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={style.amount}>{amount}</Text>

        <TouchableOpacity style={style.button} onPress={handleIncrease}>
          <Text style={style.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // Para espaçamento entre os botões e o texto (React Native 0.71+)
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 8, // Para espaçamento entre os botões e o texto (compatível com versões antigas)
  },
});
