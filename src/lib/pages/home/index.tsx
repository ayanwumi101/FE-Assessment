'use client'

import { Flex, Box, Stack } from '@chakra-ui/react';
import Tabs from '~/lib/components/Tabs'
import Hero from './components/Hero';
import CircularProgress from '~/lib/components/CircularProgress';
import CategoryBreakdown from './components/CategoryBreakdown';


const Home = () => {
  return (
    <Box
      w='90%'
      mx='auto'
      display='flex'
      justifyContent='center'
      alignItems='center'
      mt={['5', 0]}
      mb={[16, 0]}
    >
      <Stack spacing='30px'>
        <Hero />
        <Tabs tabsList={['Last Month', 'This Month']} />
        <CircularProgress value={25} />
        <CategoryBreakdown />
      </Stack>
    </Box>
  );
};

export default Home;
