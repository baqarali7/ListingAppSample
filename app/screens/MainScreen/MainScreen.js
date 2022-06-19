import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import {fetchUsers, fetchUser} from '../../actions/serviceActions';
import UserDetail from '../../components/UserDetail/UserDetail';
import UserModal from '../../components/UserModal/userModal';
import {Types} from '../../actions/actionTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#ededed',
  },
});

const MainScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state.service);
  const updateSearch = value => {
    setSearchValue(value);
    if (value !== '') {
      var condition = new RegExp(value);
      var result = state.usersData.filter(function (el) {
        return condition.test(el.login);
      });
      dispatch({type: Types.USERS_DATA, payload: result});
    } else {
      dispatch({type: Types.USERS_DATA, payload: state.usersDataClone});
    }
  };
  const getUser = userName => {
    dispatch(fetchUser(userName));
  };

  const closeModal = () => {
    dispatch({type: Types.MODAL_VISIBLE, payload: false});
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchValue}
        updateSearch={updateSearch}
        style={{marginTop: '0%'}}
      />
      {state.usersLoading ? (
        <ActivityIndicator />
      ) : (
        <UserDetail userList={state.usersData} getUser={getUser} />
      )}
      <UserModal
        modalVisible={state.modalVisible}
        userData={state.user}
        userLoading={state.userLoading}
        closeModal={closeModal}
      />
    </View>
  );
};

export default MainScreen;
