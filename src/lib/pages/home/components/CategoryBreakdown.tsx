'use client'

import { Box, Heading, Text, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { FoodAndDrinkIcon, SavingsIcon } from '~/lib/components/Icons'
import TransactionItem from '~/lib/components/TransactionItem'



const CategoryBreakdown = () => {
  return (
    <Box my='7'>
        <Stack spacing='40px'>
            <Heading fontWeight={600} fontSize={20}>CategoryBreakdown</Heading>
            <Box>
                <Stack spacing='25px'>
                    <TransactionItem image={FoodAndDrinkIcon} title='Food and Drink' percentage={40} amountSpent={20000} totalAmount={42000} />
                    <TransactionItem image={SavingsIcon} title='Savings' percentage={40} amountSpent={20000} totalAmount={42000} />
                    <TransactionItem image={FoodAndDrinkIcon} title='Food and Drink' percentage={40} amountSpent={20000} totalAmount={42000} />
                    <TransactionItem image={SavingsIcon} title='Savings' percentage={40} amountSpent={20000} totalAmount={42000} />
                    <TransactionItem image={FoodAndDrinkIcon} title='Food and Drink' percentage={40} amountSpent={20000} totalAmount={42000} />
                    <TransactionItem image={SavingsIcon} title='Savings' percentage={40} amountSpent={20000} totalAmount={42000} />
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default CategoryBreakdown