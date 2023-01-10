import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, iCard } from '../../components/Card';
import { CcMask } from '../../utils/CcMask';

const DATACARDS = [
  {
    _id: 1,
    name: 'Luis F N Gomes',
    cardNumber: 5211251730509497,
    cvv: 121,
    expiresM: 9,
    expiresY: 32,
    type: 'credit'
  },
  {
    _id: 2,
    name: 'Luis Felipe N Gomes',
    cardNumber: 5532582663887365,
    cvv: 883,
    expiresM: 5,
    expiresY: 29,
    type: 'credit'
  },
  {
    _id: 3,
    name: 'Luis Felipe N Gomes',
    cardNumber: 4532222760969104,
    cvv: 556,
    expiresM: 2,
    expiresY: 32,
    type: 'credit'
  },
  {
    _id: 4,
    name: 'Luis F N Gomes',
    cardNumber: 4532035044159478,
    cvv: 357,
    expiresM: 9,
    expiresY: 32,
    type: 'debit'
  },
  {
    _id: 5,
    name: 'Luis Felipe N Gomes',
    cardNumber: 4916360155048674,
    cvv: 300,
    expiresM: 11,
    expiresY: 33,
    type: 'credit'
  },
  {
    _id: 6,
    name: 'Luis F N Gomes',
    cardNumber: 5581349367179600,
    cvv: 245,
    expiresM: 12,
    expiresY: 29,
    type: 'debit'
  },
  {
    _id: 7,
    name: 'Luis Felipe N Gomes Gomes Gomes',
    cardNumber: 5581349367179600,
    cvv: 245,
    expiresM: 9,
    expiresY: 32,
    type: 'credit'
  },
]

export function Cards() {
  const [cards, setCards] = useState<iCard[]>([])
  const [cardIndex, setCardIndex] = useState(0)
  useEffect(() => {
    const getcards = () => setCards(DATACARDS)
    getcards()
  }, [])

  const handleUseCard = (id) => {
    setCardIndex(id)
  }
  return (
    <View className="flex-1 items-center bg-zinc-900">
      <View className='fixed pt-24 pb-10 w-full items-center bg-zinc-900'>
        {
          cards.length > 0 ?
            <Card
              name={cards[cardIndex].name}
              cardNumber={cards[cardIndex].cardNumber}
              cvv={cards[cardIndex].cvv}
              expiresM={cards[cardIndex].expiresM}
              expiresY={cards[cardIndex].expiresY}
              type={cards[cardIndex].type}
              _id={cards[cardIndex]._id}
            /> :
            <Card
              name="XXXX XXXXXX X XXXXX"
              cardNumber={8888888888888888}
              cvv={888}
              expiresM={8}
              expiresY={88}
              type="credit"
              _id={99999999}
            />
        }
      </View>
      <ScrollView className='gap-4'>
        {cards.length > 0 &&
          cards.map((card, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleUseCard(card._id)}>
                <LinearGradient
                  colors={['rgba(74, 172, 225, .5)', 'rgba(47, 158, 212, .5)', 'rgba(39, 136, 186, .5)', 'rgba(31, 114, 160, .5)', 'rgba(22, 94, 135, .5)', 'rgba(12, 74, 110, .5)']}
                  start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
                  className='w-[350px] h-16 border-4 border-[#4aace1] rounded-2xl py-2 px-4 flex justify-between  backdrop-blur-sm flex-col'>
                  <Text className='text-white'>
                    {card.name}
                  </Text>
                  <View className='flex flex-row justify-between w-full'>
                    <Text className='text-white'>
                      <CcMask cNumber={card.cardNumber} hidden={true} />
                    </Text>
                    <Text className='text-white'>
                      {card.type}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  );
}

