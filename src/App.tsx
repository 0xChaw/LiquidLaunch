// import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
// import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react';
// import Layout from './components/Layout/Layout';

// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

// const theme = extendTheme({ config });

// function App() {
//   return (
//     <ChakraProvider theme={theme} resetCSS>
//       <DynamicContextProvider
//         settings={{
//           environmentId: import.meta.env.VITE_DYNAMIC_ENV_ID,
//           walletConnectors: ["metamask", "walletconnect"],
//         }}
//       >
//         <Layout />
//       </DynamicContextProvider>
//     </ChakraProvider>
//   );
// }

// export default App;
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: '8591a906-67d2-4b85-ad1f-fa48cc504dec',
      walletConnectors: [ EthereumWalletConnectors ],
    }}>
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
