import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { NavItemProps } from '../utilities/schema';
import { HomeIcon, ReportsIcon, BudgetIcon, ProfileIcon, ChartIcon } from '../components/Icons';
import { useState } from 'react';



const NavItem = ({Icon, label, isActive, onClick}: NavItemProps) => {
  return (
    <Box onClick={onClick} cursor='pointer'>
    <Stack alignItems='center'>
      <Icon isActive={isActive} />
      <Text color={isActive ? '#001233' : '#C1C4CD'} fontWeight={600}>{label}</Text>
    </Stack>
    </Box>
  )
}

const Header = () => {
  const [position, setPosition] = useState<number>(3);
  const navLinks = [
    {
      Icon: HomeIcon,
      label: 'Home'
    },
    {
      Icon: ReportsIcon,
      label: 'Reports'
    },
    {
      Icon: BudgetIcon,
      label: 'Budget'
    },
    {
      Icon: ChartIcon,
      label: 'Chart'
    },
    {
      Icon: ProfileIcon,
      label: 'Profile'
    }
  ]
  return (
    <Box as='header' width="full" boxShadow='md' position={['fixed', 'static']} bottom='0px' bg='#FFFFFF' py='2'>
      <Flex w={['90%','50%']} mx='auto' alignItems='center' justifyContent='space-between'>
        {navLinks.map((navLink, index) => <NavItem Icon={navLink.Icon} isActive={index === position ? true : false} label={navLink.label} onClick={() => setPosition(index)} />)}
      </Flex>
    </Box>
  );
};

export default Header;
