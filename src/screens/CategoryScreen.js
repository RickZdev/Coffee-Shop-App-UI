import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

const CategoryScreen = ({ route, navigation }) => {
  const [chosenSize, setChosenSize] = useState(null);
  const data = route.params;
  const sizes = ['Small', 'Medium', 'Large'];
  const { height } = Dimensions.get('window');

  const handleSize = (index) => {
    setChosenSize(index);
  }

  return (
    <View className='flex-1'>
      <ImageHeaderScrollView
        maxHeight={height / 2 - 50}
        minHeight={100}
        showsVerticalScrollIndicator={false}
        headerImage={data.header}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0}
        renderForeground={() => (
          <View className='flex-1'>
            <TouchableOpacity onPress={() => navigation.goBack()} className='w-9 h-9 rounded-full bg-white justify-center items-center mt-8 ml-6'>
              <ChevronLeftIcon size={22} color={'#AF795D'} stroke={400} />
            </TouchableOpacity>
            <View className='absolute w-full bottom-0 flex-row justify-between items-end'>
              <View className='px-5 pb-4 pt-2'>
                <Text className='font-bold text-[28px] text-white'>{data.coffeeName}</Text>
                <Text className='font-normal text-xs text-white'>{data.coffeeDescription}</Text>
              </View>
              <View className='flex-row items-center rounded-3xl bg-[#AF795D] px-3 py-2 mr-5 mb-4 space-x-1'>
                <StarIcon size={22} color='white' />
                <Text className='font-bold text-base text-white'>{data.rate}</Text>
              </View>
            </View>
          </View>
        )}
      >
        <TriggeringView className='flex-1 px-5 pt-5 pb-[120px] rounded-tl-[60px] rounded-tr-[60px]'>
          {/* ingredients */}
          <View className='bg-[#A6A6AA36] rounded-3xl flex-row p-5 justify-between items-center mb-8'>
            {data.ingredients?.map((item, index) => (
              <View key={index} className='flex-row items-center space-x-1'>
                <Image source={data.icon[index]} resizeMode='contain' />
                <Text className='text-black font-bold text-xs'>{item}</Text>
              </View>
            ))}
          </View>
          {/* sizes */}
          <Text className='text-black text-xl font-bold mb-4'>Coffee Size</Text>
          <View className='flex-row justify-between items-center mb-8'>
            {sizes?.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleSize(index)} className={`${index === chosenSize ? 'bg-[#AF795D]' : 'bg-white '} px-7 py-[6px] rounded-3xl`} style={{ elevation: 5 }}>
                <Text className={`${index === chosenSize ? 'text-white' : 'text-black'} text-base font-normal `}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* about */}
          <View className='space-y-3'>
            <Text className='font-bold text-xl text-black'>About</Text>
            <Text className='font-normal text-xs text-black'>{data.about}</Text>
            <Text className='font-normal text-xs text-black'>{data.about}</Text>
            <Text className='font-normal text-xs text-black'>{data.about}</Text>
            <Text className='font-normal text-xs text-black'>{data.about}</Text>
            <Text className='font-normal text-xs text-black'>{data.about}</Text>
          </View>
        </TriggeringView>
      </ImageHeaderScrollView>
      <View className='justify-end items-center bg-transparent pb-5 px-5 absolute bottom-0 w-full'>
        <TouchableOpacity className=' flex-row justify-between bg-[#AF795D]  py-6 px-12 w-full ' style={{ borderRadius: 70 }}>
          <Text className='text-xl font-normal text-white'>Add to Cart</Text>
          <Text className='text-xl font-normal text-white'>|</Text>
          <Text className='text-xl font-bold text-white'>{data.price}</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})