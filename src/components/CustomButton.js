import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CustomButton = ({ onPress, text, additionalStyle, children }) => {
  return (
    <TouchableOpacity onPress={onPress} className='bg-[#AF795D] justify-center items-center rounded-3xl ${additionalStyle} w-full' style={{ height: 62 }}>
      {children}
      <Text className='font-bold text-[#F8F7FA] text-xl'>{text}</Text>
    </TouchableOpacity>
  )
}


export default CustomButton

