import { Box, Button, Heading, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box 
      minH="calc(100vh - 200px)" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex direction="column" gap={8} align="center" textAlign="center">
        <Heading size="2xl">Welcome to CryptoLaunch</Heading>
        <Text fontSize="xl">The next generation token launchpad platform</Text>
        <Link to="/app">
          <Button size="lg" colorScheme="blue">
            Launch App
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default LandingPage; 