import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Cart = ({ route }) => {
  // تأكد من وجود route و params
  const order = route?.params?.order || [];

  // تحقق إذا كان الكارت فارغ
  if (order.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.text}>No items in your cart yet!</Text>
      </View>
    );
  }

  // عرض الطلبات في الكارت
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={order}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>🍵 {item.title}</Text>
            <Text style={styles.itemText}>📖 {item.description}</Text>
            <Text style={styles.itemText}>🛒 Ordered: {item.count} pcs</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B2E83',
  },
  text: {
    fontSize: 16,
    color: '#4B2E83',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: '#4B2E83',
  },
});
