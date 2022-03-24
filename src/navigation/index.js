import React, {useState} from 'react';
import { Pressable } from "native-base";
import { Text, TouchableOpacity ,View,Image,StyleSheet} from "react-native";
import { NavigationContainer,useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,DrawerItem  } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen'
import MybookScreen from '../screens/MybookScreen'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <MyDrawer/>     
   </NavigationContainer>
  );
}

   

const MyDrawer = () => {
  const{color}=useTheme();
  return (
    <Drawer.Navigator initialRouteName="Tab" screenOptions={{
      headerShadowVisible: false,
      title: '',
      drawerLabelStyle: {
        fontSize: 14,
        lineHeight: 30,
        letterSpacing: 0.016
    },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
   >
    <Drawer.Screen
         name="Tab"
         component={MyTabs}
         options={{
          headerShown: false,
          title: 'Home',
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 0
          },
    
          }}
      />
     
      <Drawer.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
          headerShown: false,
          title: 'accont',
        }}
      />
      <Drawer.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: true,
          title: "Settings",
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 0
          },
        }}
      /> 
      
    </Drawer.Navigator>

  );  
}
const CustomDrawerContent = (props) => {
  return (
      <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
          <View style={styles.avatarBox}>
              <Image source={require('../../assets/img_avatar.png')} style={styles.avatar} resizeMode={'cover'} />
          </View>
          <Text style={styles.username} >May</Text>
      </View>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      </DrawerContentScrollView>
  );
}



const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />       
      <Tab.Screen 
        name="Wishlist" 
        component={SettingsScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={MybookScreen}
        options={{
          title: "My books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const HomeStack = ({navigation}) => {
  const [mark, setmark] = useState(true);
  const markFunction = () => {
      setmark(!mark);
  };
  return (
    <Stack.Navigator
       screenOptions={{
         headerShown: false,
         headerShadowVisible:false,
       }}
    >
      <Stack.Screen
        name="s"
        component={BookScreen}
        options= {{
          title:'',
          headerShown:true,
          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons
            name={'menu'}
            size={20}
            component={MyDrawer}
            onPress={()=> navigation.openDrawer()}
            style={{marginRight: 20}}          
            />
           </Pressable>
          ),
            headerRight: ({ color }) => (
              <MaterialCommunityIcons
              name={'magnify'}
              size={25}
              component={MyDrawer}
              style={{marginRight: 3}}
              color={color}
              />
         ),
        }}
      />
      
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation}) => ({
          title:'',
          headerShown:true,
          headerShadowVisible:false,
          headerRight:() => (
            <TouchableOpacity onPress={() => markFunction()}>
            <Text>{mark ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                            <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
            </Text>
        </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const SettingsStack = ({navigation}) => { 
  return (
     <Stack.Navigator >      
       <Stack.Screen
          name="Settings"
          component={SettingsScreen}
      options={{
            title: "Settings",
            headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
           },
       }}
       />
     <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
              title: "Display",
              headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
         },
         }}
      />
  </Stack.Navigator>
  );
  }
export default Navigation;
const styles = StyleSheet.create({
  drawerHeader: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: '#EDEDEF',
      paddingTop: 40,
      paddingHorizontal: 16,
      paddingBottom: 16,
  },
  avatarBox: {
      width: 48,
      height: 48,
      borderRadius: 24
  },
  avatar: {
      width: 48,
      height: 48,
      borderRadius: 24
  },
  username: {
      color: '#131313',
      fontSize: 24,
      fontWeight: '500',
      lineHeight: 28,
      letterSpacing: 0.3,
      marginTop: 16,
  }
});