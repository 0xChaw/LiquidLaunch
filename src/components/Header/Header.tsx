import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Link } from 'react-router-dom';

const Header = () => {
  const { primaryWallet, handleLogOut } = useDynamicContext();

  return (
    <Box bg="whiteAlpha.100" px={8} py={4}>
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
        <Link to="/">
          <Text fontSize="2xl" fontWeight="bold">
            CryptoLaunch
          </Text>
        </Link>
        
        {primaryWallet ? (
          <Flex align="center" gap={4}>
            <Text>{primaryWallet.address.slice(0, 6)}...{primaryWallet.address.slice(-4)}</Text>
            <Button onClick={handleLogOut} colorScheme="blue" variant="outline">
              Disconnect
            </Button>
          </Flex>
        ) : (
          <Link to="/app">
            <Button colorScheme="blue">Launch App</Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Header; 