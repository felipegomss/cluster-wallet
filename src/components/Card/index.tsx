import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { CcMask } from './../../utils/CcMask';
import { DateMask } from '../../utils/DateMask';
import { useState } from 'react';
import { CvvMask } from '../../utils/CvvMask';

export interface iCard {
  _id: number
  name: string,
  cardNumber: number,
  expiresM: number,
  expiresY: number,
  cvv: number
  type: string
}

export function Card({ name,
  cardNumber,
  expiresM,
  expiresY,
  cvv }: iCard) {

  const [toggleHidden, setToggleHidden] = useState(true)

  return (
    <LinearGradient
      colors={['rgba(74, 172, 225, .5)', 'rgba(47, 158, 212, .5)', 'rgba(39, 136, 186, .5)', 'rgba(31, 114, 160, .5)', 'rgba(22, 94, 135, .5)', 'rgba(12, 74, 110, .5)']}
      start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
      className='w-[350px] h-[222.30px] border-4 border-[#4aace1] rounded-2xl p-4 flex justify-between items-start backdrop-blur-sm'>
      <View className='flex flex-row justify-between w-full items-center'>
        <Text className='text-2xl text-white'>{name.substring(0, 20)}</Text>
        <TouchableOpacity onPress={() => { setToggleHidden(!toggleHidden) }}>
          {
            toggleHidden ?
              <FontAwesome name="eye-slash" size={24} color="white" />
              :
              <FontAwesome name="eye" size={24} color="white" />
          }
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text className='text-xs text-white'>
            Card number
          </Text>
          <Text className='text-2xl text-white'>
            <CcMask cNumber={cardNumber} hidden={toggleHidden} />
          </Text>
        </View>
        <View className='flex flex-row justify-between w-full items-end'>
          <View className='flex flex-row gap-5'>
            <View>
              <Text className='text-xs text-white'>Expiry date</Text>
              <Text className='text-base text-white'><DateMask expiresM={expiresM} expiresY={expiresY} hidden={toggleHidden} /></Text>
            </View>
            <View>
              <Text className='text-xs text-white'>CVV</Text>
              <Text className='text-base text-white'>
                <CvvMask cvvNumber={cvv} hidden={toggleHidden} />
              </Text>
            </View>
          </View>
          <MaterialCommunityIcons name="cellphone-nfc" size={24} color="white" />
        </View>
      </View>
    </LinearGradient>
  );
}

