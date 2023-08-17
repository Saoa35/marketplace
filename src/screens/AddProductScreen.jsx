import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../styles/styles';
import {MainButton} from '../components/buttons/MainButton';
import {AddedImage} from '../components/AddedImage';

function AddProductScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.addContainer}>
      <View style={styles.titleInputWrapper}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={e => setTitle(e)}
          placeholder="Title"
          style={styles.input}
        />
        <Text style={styles.requiredText}>Title is required</Text>
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          onChangeText={e => setDescription(e)}
          multiline
          numberOfLines={6}
          placeholder="Type here"
          style={styles.descriptionInput}
        />
      </View>

      <View style={styles.buttonsWrapper}>
        <MainButton
          name={'Add Product'}
          btnColor={COLORS.green}
          icon={
            <Entypo
              name="plus"
              style={{fontSize: 30, color: COLORS.buttonTextColor}}
            />
          }
          screen={'Home'}
        />
        <Text style={{width: 20}}></Text>
        <MainButton
          name={'Attach Image'}
          btnColor={COLORS.blue}
          icon={
            <MaterialCommunityIcons
              name="image"
              style={{fontSize: 30, color: COLORS.buttonTextColor}}
            />
          }
        />
      </View>

      <View style={styles.imagesContainer}>
        <AddedImage />
        <AddedImage />
        <AddedImage />
        <AddedImage />
        <AddedImage />
      </View>
    </View>
  );
}

export default AddProductScreen;

const styles = StyleSheet.create({
  addContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleInputWrapper: {
    width: '90%',
    marginBottom: 30,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    color: COLORS.title,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.title,
    letterSpacing: 1,
  },
  requiredText: {
    marginTop: 5,
  },
  descriptionWrapper: {
    marginBottom: 35,
    width: '90%',
  },
  descriptionInput: {
    fontSize: 16,
    marginTop: 10,
    padding: 8,
    textAlignVertical: 'top',
    letterSpacing: 1,
    textAlign: 'justify',
    opacity: 0.6,
    color: COLORS.title,
    backgroundColor: COLORS.buttonTextColor,
    borderRadius: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray,
    borderTopWidth: 2,
    borderTopColor: COLORS.gray,
    borderRightWidth: 2,
    borderRightColor: COLORS.gray,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.gray,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  imagesContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
