import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BellIcon, } from "react-native-heroicons/outline";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon } from 'react-native-heroicons/solid';
import Categories from '../components/Categories';
import Promo from '../components/Promo';
import { TEXT } from '../global/STYLES';

const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white '>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* nav */}
        <View className='justify-between items-center flex-row pt-9 px-9'>
          <Image
            source={require('../assets/images/fred.jpg')}
            className='w-[60px] h-[60px] rounded-full'
            resizeMode='contain'
          />
          <View className='flex-row space-x-1 justify-center items-center'>
            <MapPinIcon size={25} color='#AF795D' />
            <Text className='text-xs font-extrabold text-black font-sans'>Pasig City, Ph</Text>
          </View>
          <View>
            <View className='w-1.5 h-1.5 bg-[#FE8668] rounded-full absolute right-[4px] top-1 z-10' />
            <BellIcon size={25} color='black' />
          </View>
        </View>
        {/* header */}
        <Text className={TEXT.textBig}>Good morning, Developer</Text>
        {/* searchbar */}
        <View className='mt-5 mx-9'>
          <TextInput
            className='border-2 rounded-3xl border-[#CBCBD4] bg-[#F8F7FA] pl-14'
            placeholder='Search Coffee..'
            placeholderTextColor={'#CBCBD4'}
          />
          <View className='absolute w-full flex-row justify-between items-center px-5 pt-2.5'>
            <MagnifyingGlassIcon size={32} color="#A6A6AA" fontWeight={500} style={{ fontWeight: '800' }} />
            <AdjustmentsHorizontalIcon size={32} color="#AF795D" />
          </View>
        </View>
        {/* content */}
        <Categories />
        <Promo />
      </ScrollView>
    </View>
  )
}

export default HomeScreen