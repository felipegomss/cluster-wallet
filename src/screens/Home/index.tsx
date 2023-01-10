import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

export function Home() {

  return (
    <View className="flex-1 items-center bg-zinc-900">
      <LinearGradient
        colors={['#4aace1', '#2f9ed4', '#2788ba', '#1f72a0', '#165e87', '#0c4a6e']}
        start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
        className=' w-full rounded-b-[62px] p-10 pt-14'>
        <View className='flex flex-row justify-start items-center gap-3'>
          <Image className='w-14 aspect-square rounded-[20px]' source={require('../../../assets/felipe.jpg')} />
          <View>
            <Text className='text-xl text-white'>Hello, Felipe</Text>
            <Text className='text-zinc-200 text-sm'>07263733544</Text>
          </View>
        </View>
        <View className='flex py-4 gap-4'>
          <View>
            <Text className='text-zinc-200 text-sm'>Wallet</Text>
            <Text className='text-white text-3xl font-bold'>$56,246<Text>.00</Text></Text>
          </View>
          <View className='flex flex-row justify-around'>
            <View className='flex justify-center items-center min-w-14 py-4'>
              <TouchableOpacity className='p-4 bg-slate-400/75 rounded-[20px] backdrop-blur-0'>
                <Feather name="arrow-up-right" size={24} color="white" />
              </TouchableOpacity>
              <Text className='text-white'>Send</Text>
            </View>
            <View className='flex justify-center items-center min-w-14'>
              <TouchableOpacity className='p-4 bg-slate-400/75 rounded-[20px] backdrop-blur-0'>
                <AntDesign name="qrcode" size={24} color="white" />
              </TouchableOpacity>
              <Text className='text-white'>Qr Code</Text>
            </View>
            <View className='flex justify-center items-center min-w-14'>
              <TouchableOpacity className='p-4 bg-slate-400/75 rounded-[20px] backdrop-blur-0'>
                <Feather name="copy" size={24} color="white" />
              </TouchableOpacity>
              <Text className='text-white'>Copy paste</Text>
            </View>
            <View className='flex justify-center items-center min-w-14'>
              <TouchableOpacity className='p-4 bg-slate-400/75 rounded-[20px] backdrop-blur-0'>
                <Ionicons name="barcode-outline" size={24} color="white" />
              </TouchableOpacity>
              <Text className='text-white'>Barcode</Text>
            </View>
          </View>
          <View className='w-full flex items-center px-5 text-white'>
            <View className='w-full flex flex-row justify-around'>
              <View className='flex justify-center items-center'>
                <Text className='text-5xl text-white'>07</Text>
                <Text className='text-zinc-200'>Payment Cards</Text>
              </View>
              <View className='flex justify-center items-center'>
                <Text className='text-5xl text-white'>19</Text>
                <Text className='text-zinc-200'>Flight Tickets</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

