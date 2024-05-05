import { Box, Image, Heading, Text, Flex, Stack, Icon } from '@chakra-ui/react'
import React from 'react'
import { TransactionItemProps } from '~/lib/utilities/schema'


const index = ({image, title, percentage, totalAmount, amountSpent}: TransactionItemProps) => {
  return (
    <Box>
        <Flex alignItems='flex-start' justifyContent='space-between' gap={['30px', '50px']}>
            <Box>
                <Flex gap='10px' alignItems='center'>
                    <Icon as={image} />
                    <Stack>
                        <Heading fontSize={16}>{title}</Heading>
                        <Text fontWeight={600} color='#707480'>{percentage}%</Text>
                    </Stack>
                </Flex>
            </Box>
            <Box>
                <Heading color='#0466C8' fontSize={16} fontWeight={600}>₦{amountSpent}/ <Box as='span' color='#C1C4CD'>₦{totalAmount}</Box></Heading>
            </Box>
        </Flex>
    </Box>
  )
}

export default index