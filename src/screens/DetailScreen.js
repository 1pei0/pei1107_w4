import React from 'react';
import { Linking } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({ route }) => {
  const { title,
    artist,
    price,
    url,
    image,
    description,
  } = route.params;
  return (
    <Center bg="#fff" h="800" >
      <ScrollView >
        <AspectRatio bg="#fff" w="100%"  ratio={16/9} >
          <Image
          bg="#fff"
          marginTop={5}
          marginLeft={82}
          w={210}
          h={300}
            source={{uri: image }}
            alt='albumImage'
          />
        </AspectRatio>
        <Box bg="#fff" h="400" marginTop="120">
          <Center>
            <Heading pt={1} fontSize="2xl" color='#131313'>{title}</Heading>
            <Heading fontSize="sm" fontWeight="light" color='#666666' marginTop="1">{artist}</Heading>
            <Heading>
          <MaterialCommunityIcons name="star" color="#FFC41F" size={14} />
          <MaterialCommunityIcons name="star" color="#FFC41F" size={14} />
          <MaterialCommunityIcons name="star" color="#FFC41F" size={14} />
          <MaterialCommunityIcons name="star" color="#FFC41F" size={14} />
          <MaterialCommunityIcons name="star" color="#EDEDEF" size={14} />
              <Text fontSize="sm" fontWeight="light" color='#131313' >4.0/5.0</Text>
              </Heading>
            <Heading marginLeft="10" marginRight="10" fontSize="sm" fontWeight="light" color='#131313'>{description}</Heading>
          </Center>
          <Button 
          bg="#6200EE"
            mt="4"
            h="36"
            marginLeft="85"
            w="190"
            onPress={() => Linking.openURL(url)}
          >
           <Text color="#fff">BUY NOW FOR ${price}</Text>
          </Button>   
        </Box>
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;