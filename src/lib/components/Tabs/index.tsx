import { Box, Text, Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { TabProps } from '~/lib/utilities/schema'


const index = ({tabsList}: TabProps) => {
  const [position, setPosition] = useState<number>(0);
  const handleClick = (index: number) => {
    setPosition(index)
  }
  return (
    <Box>
        <Flex alignItems='center' gap='40px'>
            {tabsList?.map((tab, index) => <Button onClick={() => handleClick(index)} key={index} fontWeight={500} color={index === position ? '#0466C8' : '#707480'} p='0' borderBottom={index === position ? '3px solid #0466C8' : 'none'} borderRadius='0' bg='none' _hover={{ borderBottom: '3px solid #0466C8'}} >{tab}</Button>)}
        </Flex>
    </Box>
  )
}

export default index