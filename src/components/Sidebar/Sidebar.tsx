import { Box, Flex, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaRocket, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      w="240px"
      bg="whiteAlpha.100"
      p={4}
      minH="calc(100vh - 140px)"
      display={{ base: 'none', md: 'block' }}
    >
      <Flex direction="column" gap={4}>
        <Link to="/app">
          <ChakraLink
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
            rounded="md"
            bg={isActive('/app') ? 'whiteAlpha.200' : 'transparent'}
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            <Icon as={FaRocket} />
            Launchpad
          </ChakraLink>
        </Link>
        <Link to="/create">
          <ChakraLink
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
            rounded="md"
            bg={isActive('/create') ? 'whiteAlpha.200' : 'transparent'}
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            <Icon as={FaPlus} />
            Create Listing
          </ChakraLink>
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar; 