import { Box, Container } from '@chakra-ui/react';
import { Login } from '../Login';

const Layout = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Login />
      </Box>
      {/* Your main content will go here */}
    </Container>
  );
};

export default Layout;