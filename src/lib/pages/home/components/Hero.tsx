import { Box, Stack, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { NairaIcon } from '~/lib/components/Icons'



const Hero = () => {
  return (
    <Box>
        <Stack spacing='30px'>
            <Box>
                <Heading color='#001233'>Budget</Heading>
            </Box>
            <Box maxW='400px'>
                <Stack spacing='20px'>
                    <Box>
                        <Flex gap='10px' alignItems='center'>
                            <NairaIcon />
                            <Text color='#707480' fontWeight={500}>Monthly Budget</Text>
                        </Flex>
                    </Box>
                    <Box py='3' px='5' boxShadow='md' borderRadius='10px'>
                        <Heading color='#001233'>₦120,000</Heading>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Hero