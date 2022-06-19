import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const UserCard = ({username, profilePic, type, style, getUser}) => {
  return (
    <TouchableOpacity
      onPress={() => getUser(username)}
      style={[styles.container, style]}>
      <View style={styles.userContainer}>
        <View style={styles.vwProfilePic}>
          <Image
            style={styles.profilePic}
            source={{
              uri: profilePic,
            }}
          />
        </View>
        <View style={styles.vwUserData}>
          <Text style={styles.userName}>{username}</Text>
          <Text>{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  vwUserData: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  vwProfilePic: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  userContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 60,
    flexDirection: 'row',
    borderRadius: 5,
  },
  container: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
