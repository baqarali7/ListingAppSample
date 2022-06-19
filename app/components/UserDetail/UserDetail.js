import React from 'react';
import {View, FlatList} from 'react-native';
import UserCard from '../UserListCard/userCard';

const UserDetail = ({userList, getUser}) => {
  const renderItem = ({item, index}) => (
    <UserCard
      style={{marginBottom: userList.length - 1 === index ? 100 : 0}}
      username={item.login}
      profilePic={item.avatar_url}
      type={item.type}
      getUser={getUser}
    />
  );
  return (
    <View>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserDetail;
