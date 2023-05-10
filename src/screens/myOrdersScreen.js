import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../global/style';


// This is a React Native component called MyOrderScreen that renders a list of orders. 
// It has a state that includes an array of objects, where each object represents an order 
// with its own id, name, price, and quantity
export default class MyOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          id: 1,
          name: 'Cheeseburger',
          price: '£5.99',
          quantity: 2,
        },
        {
          id: 2,
          name: 'Fries',
          price: '£2.99',
          quantity: 1,
        },
        {
          id: 3,
          name: 'Milkshake',
          price: '£3.99',
          quantity: 1,
        },
      ],
    };
  }
  // In the render method, the orders array is looped over using the map function, which returns a view for each order. 
  // Each order view contains two child views: one for the order information (name and price) and one for the order quantity. 
  // The key prop is set to order.id to help React identify each order view.
  render() {
    const { orders } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Orders</Text>
        {orders.map((order) => (
          <View style={styles.orderContainer} key={order.id}>
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{order.name}</Text>
              <Text style={styles.orderPrice}>{order.price}</Text>
            </View>
            <View style={styles.orderQuantity}>
              <Text style={styles.orderQuantityText}> {order.quantity}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderName: {
    flex: 1,
    fontSize: 18,
  },
  orderPrice: {
    fontSize: 18,
  },
  orderQuantity: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttons,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5
   
  },
  orderQuantityText: {
    fontSize: 18,
    color:"white"
  },
});







