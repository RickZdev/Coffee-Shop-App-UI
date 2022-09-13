import { FlatList, Image, Text, View, useWindowDimensions, Animated, TouchableOpacity, Button, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const OnboardingScreen = ({ navigation }) => {
  const dummyData = [
    {
      id: 0,
      title: 'Good coffee,\nGood friends,\nlet it blends',
      description: 'The best grain, the finest roast, the most powerful flavor.',
    },
    {
      id: 1,
      title: 'Life begins after coffee',
      description: 'Creamiest coffee in town.',
    },
    {
      id: 2,
      title: 'Make some coffee and own the day',
      description: 'Sign up today and enjoy the first month of coffee premium benefits on us.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const scrollTo = async () => {
    if (currentIndex < dummyData.length - 1) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1
      });
    } else {
      navigation.replace('HomeTab');
    }
  }

  return (
    <ImageBackground className='flex-1 justify-center items-center bg-black py-10'
      source={require('../assets/images/onboarding.png')}
      resizeMode='cover'
    >
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnboardingItem data={item} />}
        horizontal={true}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }
        }], {
          useNativeDriver: false,
        })}
      />

      <OnboardingPaginator data={dummyData} scrollX={scrollX} />
      <View className='w-full px-11'>
        {
          currentIndex !== 2 ?
            <CustomButton onPress={scrollTo} text='Next' /> :
            <CustomButton onPress={scrollTo} text='Get Started' />
        }
      </View>
    </ImageBackground>

  )
}

const OnboardingItem = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <View className="justify-end items-center " style={{ width: width }} >
      <View className='pt-10 pb-5' style={{ width: '72%' }}>
        <Text className=' text-[#CBCBD4] font-bold  text-2xl text-center'>{data.title}</Text>
        <Text className='text-center text-white text-xs font-normal py-3'>{data.description}</Text>
      </View>
    </View>
  )
}

const OnboardingPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View className='flex-row h-16 justify-center'>
      {data.map((item, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 40, 10],
          extrapolate: 'clamp',
        })

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })

        console.log(index)
        return (
          <Animated.View className='h-1 rounded-md bg-[#AF795D] mx-2' style={{ width: dotWidth, opacity: dotOpacity }} key={item.id} />
        )
      })}
    </View>
  )
}

export default OnboardingScreen