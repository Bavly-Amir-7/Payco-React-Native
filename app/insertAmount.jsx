import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import user from '../assets/images/user.svg';

const TransactionScreen = () => {
  const [note, setNote] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const router = useRouter();

  const handleBackPress = () => {
    router.push('/payment');
  };

  const handlePayPress = () => {
    setModalVisible(true);
  };

  const handleConfirmPayment = () => {
    setTransactionSuccess(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text style={styles.headerText}>Transaction</Text>
      </TouchableOpacity>

      {/* User Info */}
      <Image source={user} style={styles.userImage} />
      <Text style={styles.userName}>AYMAN SHAHED</Text>

      {/* Amount */}
      <Text style={styles.amount}>$150</Text>

      {/* Note Input */}
      <TextInput
        style={styles.input}
        placeholder="What's this for ?"
        value={note}
        onChangeText={setNote}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.requestButton]}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.payButton]} onPress={handlePayPress}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={70} color="red" />
            {!transactionSuccess ? (
              <>
                <Text style={styles.modalTitle}>Transaction Confirmation</Text>
                <Text style={styles.modalText}>Are you sure you want to pay $150 to Ayman Elshahed?</Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
                    <Text style={styles.confirmText}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Successful Transaction</Text>
                <Text style={styles.modalText}>$150 has been sent successfully to Ayman Elshahed</Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  backButton: { flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 40, left: 20 },
  headerText: { fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  userImage: { width: 60, height: 60, borderRadius: 30, marginVertical: 20 },
  userName: { fontSize: 16, fontWeight: 'bold' },
  amount: { fontSize: 40, fontWeight: 'bold', marginVertical: 20 },
  input: { width: '90%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, textAlign: 'center', marginVertical: 10 },
  buttonContainer: { flexDirection: 'row', marginTop: 20 },
  button: { flex: 1, padding: 15, borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
  requestButton: { backgroundColor: 'red' },
  payButton: { backgroundColor: 'red' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  // Modal Styles
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: 300, backgroundColor: '#fff', borderRadius: 20, padding: 20, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  modalText: { fontSize: 14, textAlign: 'center', marginVertical: 10 },
  modalButtons: { flexDirection: 'row', marginTop: 10, width: '100%' },
  cancelButton: { flex: 1, padding: 10, alignItems: 'center', borderTopWidth: 1, borderColor: '#ddd' },
  confirmButton: { flex: 1, padding: 10, alignItems: 'center', borderTopWidth: 1, borderColor: '#ddd', backgroundColor: 'red' },
  cancelText: { fontSize: 16, color: 'gray' },
  confirmText: { fontSize: 16, color: '#fff', fontWeight: 'bold' }
});

export default TransactionScreen;
