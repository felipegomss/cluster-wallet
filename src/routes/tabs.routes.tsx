import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Add } from '../screens/Add';
import { Cards } from '../screens/Cards';
import { Config } from '../screens/Config';
import { Home } from '../screens/Home'
import { Tickets } from '../screens/Tickets';

import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {

  return (
    <Navigator screenOptions={{
      tabBarShowLabel: false, headerShown: false,
      tabBarStyle: {
        backgroundColor: '#0c4a6e',
        position: 'absolute',
        height: 70,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        paddingHorizontal: 20,
        borderTopWidth: 0,
      }
    }}>
      <Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => <View className='absolute top-5'>
          <FontAwesome name='google-wallet' color={focused ? '#c8e8fd' : color} size={size} />
        </View>
        ,
      }} />
      <Screen name="Cards" component={Cards} options={{
        tabBarIcon: ({ color, size, focused }) => <View className='absolute top-5'>
          <FontAwesome name='cc-mastercard' color={focused ? '#c8e8fd' : color} size={size} />
        </View>,
      }}

      />
      <Screen name="Add" component={Add} options={{
        tabBarIcon: ({ size }) =>
          <LinearGradient
            colors={['#4aace1', '#2f9ed4', '#2788ba', '#1f72a0', '#165e87', '#0c4a6e']}
            start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
            className='flex items-center justify-center w-20 h-20 rounded-full mb-14 border-8 border-zinc-900 shadow-sky-200 shadow-2xl'>
            <AntDesign name="swap" color='#c8e8fd' size={(size * 1.5)} />
          </LinearGradient>
        ,
      }} />
      <Screen name="Tickets" component={Tickets} options={{
        tabBarIcon: ({ color, size, focused }) => <View className='absolute top-5'>
          <Ionicons name='airplane' color={focused ? '#c8e8fd' : color} size={size} />
        </View>,
      }} />
      <Screen name="Configs" component={Config} options={{
        tabBarIcon: ({ color, size, focused }) => <View className='absolute top-5'>
          <Ionicons name='settings' color={focused ? '#c8e8fd' : color} size={size} />
        </View>,
      }} />
    </Navigator>
  )
}