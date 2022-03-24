import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading } from "native-base"


const BookDetail = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      <Box p={1} bg="#fff" w="150" height="250" >
        <Pressable  
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio marginLeft="3" marginTop="1" ratio={1}>
            <Image
            marginRight={5}
            width={140}
            height={200}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
        <Box marginTop="79" marginLeft="3">
          
            <Text fontWeight="bold">{album.title}</Text>
            <Text>{album.artist}</Text>
          </Box>

      </Box>   
    </Box>
  )};

export default BookDetail;