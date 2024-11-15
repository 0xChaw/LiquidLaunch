import { Button } from '@chakra-ui/react';
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react';

export const Login = () => {
  const { user, handleLogOut } = useDynamicContext();

  return (
    <>
      {!user ? (
        <DynamicWidget />
      ) : (
        <Button onClick={handleLogOut}>
          Disconnect {user.wallet.address.slice(0, 6)}...{user.wallet.address.slice(-4)}
        </Button>
      )}
    </>
  );
}; 