import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PlusCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
  const data = [
    {
      id: 0,
      coffeeName: 'Cappuccino',
      coffeeDescription: 'With Chocolate',
      image: require('../assets/images/card-1.png'),
      price: 'P50',
      rate: 4.9,
      size: 'Small',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus velit lorem amet. Tincidunt cras volutpat aliquam porttitor molestie. Netus neque, habitasse id vulputate proin cras. Neque, vel duis sit vel pellentesque tempor. A commodo arcu tortor arcu, elit. ',
      ingredients: ['Coffee', 'Chocolate', 'Medium Roasted'],
      icon: [require('../assets/images/icons/bean.png'), require('../assets/images/icons/chocolate.png')],
      header: require('../assets/images/header-1.png'),
    },
    {
      id: 1,
      coffeeName: 'Cappuccino',
      coffeeDescription: 'With Low Fat Milk',
      image: require('../assets/images/card-2.png'),
      price: 'P45',
      rate: 4.7,
      size: 'Large',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus velit lorem amet. Tincidunt cras volutpat aliquam porttitor molestie. Netus neque, habitasse id vulputate proin cras. Neque, vel duis sit vel pellentesque tempor. A commodo arcu tortor arcu, elit. ',
      ingredients: ['Coffee', 'Chocolate', 'Small Roasted'],
      icon: [require('../assets/images/icons/bean.png'), require('../assets/images/icons/chocolate.png')],
      header: require('../assets/images/header-2.png'),

    },
    {
      id: 2,
      coffeeName: 'Cappuccino',
      coffeeDescription: 'With Chocolate',
      image: require('../assets/images/card-1.png'),
      price: 'P50',
      rate: 4.9,
      size: 'Small',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus velit lorem amet. Tincidunt cras volutpat aliquam porttitor molestie. Netus neque, habitasse id vulputate proin cras. Neque, vel duis sit vel pellentesque tempor. A commodo arcu tortor arcu, elit. ',
      ingredients: ['Coffee', 'Chocolate', 'Medium Roasted'],
      icon: [require('../assets/images/icons/bean.png'), require('../assets/images/icons/chocolate.png')],
      header: require('../assets/images/header-1.png'),
    },
  ]

  return (
    <View className='mt-5'>
      {/* header */}
      <Text className='font-bold text-xl text-black mb-6 px-9'>Categories</Text>
      {/* button */}
      <View className='flex-row justify-between mb-2 px-9'>
        <View className='bg-[#AF795D] rounded-3xl flex-row justify-center items-center space-x-1 p-[7px]'>
          <Image source={require('../assets/images/icons/capuccino.png')} />
          <Text className='text-white font-extrabold text-xs'>Cappuccino</Text>
        </View>
        <View className='rounded-3xl flex-row justify-center items-center space-x-1 p-[7px]'>
          <Image source={require('../assets/images/icons/cold-brew.png')} />
          <Text className='text-black font-extrabold text-xs'>Cold Brew</Text>
        </View>
        <View className='rounded-3xl flex-row justify-center items-center space-x-1 p-[7px]'>
          <Image source={require('../assets/images/icons/expresso.png')} />
          <Text className='text-black font-extrabold text-xs'>Expresso</Text>
        </View>
      </View>
      {/* cards */}
      <View className='pl-9'>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const Card = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className='bg-white px-2 pt-2 pb-[10px] mt-1 mr-[14px] mb-2 ml-1 rounded-3xl'
      style={{ elevation: 5 }}
      onPress={() => navigation.navigate('CategoryScreen', data)}>

      <ImageBackground source={data.image} className='w-[129px] h-[99px] pr-[6px] pt-[6px]'>
        <View className='bg-[#AF795D] rounded-full self-end flex-row justify-center items-center p-2 space-x-1 '>
          <StarIcon size={12} color={'white'} />
          <Text className='text-[12px] font-light text-white'>{data.rate}</Text>
        </View>
      </ImageBackground>
      <Text className='text-base font-normal text-black'>{data.coffeeName}</Text>
      <View className='flex-row justify-between items-center'>
        <View>
          <Text className='text-[6px] font-normal text-black font'>{data.coffeeDescription}</Text>
          <Text className='text-xs font-bold text-black'>{data.price}</Text>
        </View>
        <View>
          <PlusCircleIcon size={37} color={'#AF795D'} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Categories

const styles = StyleSheet.create({})