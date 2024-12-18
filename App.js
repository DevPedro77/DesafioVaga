import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import CartProvider from './src/contexts/CartContext'
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Routes/>
        <StatusBar backgroundColor="#fafafa" barStyle='dark-content' />
      </CartProvider>
    </NavigationContainer>
  );
}


