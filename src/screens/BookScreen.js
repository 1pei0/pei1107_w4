import React from "react";
import { Box,ScrollView,Text,View} from "native-base";
import BookList from "../components/BookList";
import albumData from "../json/albums.json";
import NewestList from "../components/NewestList";


const BookScreen = ({ navigation }) => {
  return (
    <ScrollView >
      <View>
    <Box bg="#fff" horizontal={false} h="630">
      <Text fontSize="24" fontWeight="bold" marginLeft="5" marginTop="4" marginBottom="1">Popular Books</Text>
      <BookList
      horizontal={true}
        list={albumData.albumList1}  
        navigation={navigation}
      />
      <Text fontSize="24" fontWeight="bold" marginLeft="5" marginTop="-4">Newest</Text>
      <NewestList
      marginTop={300}
       horizontal={true}
       list={albumData.albumList2}  
       navigation={navigation}
       />
      </Box>
      </View>   
      </ScrollView>
  );
};

export default BookScreen;