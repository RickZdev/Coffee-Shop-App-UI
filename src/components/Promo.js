import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Promo = () => {
  const data = [
    {
      id: 0,
      name: 'Limited',
      description: 'Buy 1 get 1 free if you buy with Gopay',
      image: require('../assets/images/promo-1.png')
    },
    {
      id: 1,
      name: 'New',
      description: 'Get a chance to win P1,000 for every P600 purchase',
      image: require('../assets/images/promo-1.png')
    },
  ]
  return (
    <View className='px-9 mt-5'>
      <View className='flex-row items-center space-x-1'>
        <Text className='text-xl font-bold text-black mb-2'>Special Offer </Text>
        <Image source={require('../assets/images/icons/fire.png')} />
      </View>
      <View className=''>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card data={item} />}
        />
      </View>
    </View>
  )
}

const Card = ({ data }) => {
  return (
    <View className='flex-row mb-3 space-x-4 rounded-3xl bg-white p-2 mx-1 mt-1' style={{ elevation: 5 }}>
      <Image
        source={data.image}
        resizeMode='cover'
      />
      <View className=' flex-1 space-y-3'>
        <View className='rounded-3xl items-start'>
          <Text className='text-white text-xs font-black px-2 py-1 rounded-3xl bg-[#AF795D] '>{data.name}</Text>
        </View>
        <Text className='font-extrabold text-xs text-black'>{data.description}</Text>
      </View>
    </View>
  )
}

export default Promo

const styles = StyleSheet.create({})