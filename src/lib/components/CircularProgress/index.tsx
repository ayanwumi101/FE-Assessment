import React from 'react'
import { Box, CircularProgress, CircularProgressLabel, Stack, Text, Heading } from '@chakra-ui/react'
import { CircularProgressbarProps } from '~/lib/utilities/schema'


const index = ({value}: CircularProgressbarProps) => {
  return (
    <Box>
        <Stack spacing='30px'>
            <Box w='154px' h='154px' mx='auto' bg='#ffffff' borderRadius='50%' border='10px solid rgba(4, 102, 200, 0.4)' display='flex' alignItems='center' justifyContent='center'>
                <CircularProgress value={value} color='#0466C8' size='150px' thickness='5px'>
                    <CircularProgressLabel fontWeight={900} color='#0466C8'>{value}%</CircularProgressLabel>
                </CircularProgress>
            </Box>
            <Box textAlign='center'>
                <Text color='#707480' mb='2' fontWeight={500}>Amount spent so far</Text>
                <Heading color='#0466C8' fontSize={20} fontWeight={600}>₦50,000/ <Box as='span' color='rgba(4, 102, 200, 0.6)'>₦120,000</Box></Heading>
            </Box>
        </Stack>
      </Box>
  )
}

export default index