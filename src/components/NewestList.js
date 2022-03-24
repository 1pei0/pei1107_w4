import React from "react";
import { FlatList } from "react-native";
import NewestDetail from "./NewestDetail";

const NewestList = ({ list, navigation }) => {
  const renderItem= ({ item }) => <NewestDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default NewestList;