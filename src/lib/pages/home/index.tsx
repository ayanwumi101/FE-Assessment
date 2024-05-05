'use client';

import { Box, Stack } from '@chakra-ui/react';

import CircularProgress from '~/lib/components/CircularProgress';
import Tabs from '~/lib/components/Tabs';

import CategoryBreakdown from './components/CategoryBreakdown';
import Hero from './components/Hero';

const Home = () => {
  return (
    <Box
      w="90%"
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={['5', 0]}
      mb={[16, 0]}
    >
      <Stack spacing="30px">
        <Hero />
        <Tabs tabsList={['Last Month', 'This Month']} />
        <CircularProgress value={25} />
        <CategoryBreakdown />
      </Stack>
    </Box>
  );
};

export default Home;
