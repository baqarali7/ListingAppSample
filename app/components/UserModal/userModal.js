import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const UserModal = ({modalVisible, userData, userLoading, closeModal}) => {
  return (
    <Modal transparent={true} visible={modalVisible}>
      {userLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <View style={styles.topContainer}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: userData?.avatar_url,
                }}
              />
            </View>
            <View style={styles.midContainer}>
              <Text style={styles.name}> {userData?.name} </Text>
              <Text style={styles.blog}> {userData?.blog} </Text>
              <View style={styles.socialContainer}>
                <TouchableOpacity
                  onPress={() => console.log(userData?.twitter_username)}>
                  <Image
                    style={styles.socialIcon}
                    source={{
                      uri: 'https://img.icons8.com/ios-glyphs/344/twitter.png',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log(userData?.html_url)}>
                  <Image
                    style={styles.socialIcon}
                    source={{
                      uri: 'https://img.icons8.com/ios-glyphs/344/github.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => closeModal()}
                style={styles.closeButton}>
                <Text style={styles.textClose}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default UserModal;

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  blog: {
    fontSize: 10,
    fontWeight: '400',
  },

  socialIcon: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  closeButton: {
    width: 200,
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#063970',
  },

  textClose: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: '400',
  },

  modalContainer: {
    backgroundColor: 'white',
    height: 300,
    width: 300,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
