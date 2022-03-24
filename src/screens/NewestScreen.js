import React from "react";
import { Box,ScrollView,Text,View} from "native-base";
import NewestList from "../components/Newestlist";
import albumData from "../json/albums.json";


const NewestScreen = ({ navigation }) => {
  return (
    <ScrollView >
      <View>
    <Box bg="#fff" horizontal={false} h="320" >
      
      <NewestList
      
      horizontal={true}
        list={albumData.albumList2}  
        navigation={navigation}
      />
      </Box>
      </View> 
    </ScrollView>
  );
};

export default NewestScreen;