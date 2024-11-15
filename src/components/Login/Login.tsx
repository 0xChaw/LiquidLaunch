import { Button } from '@chakra-ui/react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

export const Login = () => {
  const { primaryWallet, handleLogOut } = useDynamicContext();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      {!primaryWallet ? (
        <DynamicWidget />
      ) : (
        <Button onClick={handleLogOut}>
          Disconnect {primaryWallet.address && formatAddress(primaryWallet.address)}
        </Button>
      )}
    </>
  );
};

export default Login; 