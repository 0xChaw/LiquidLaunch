import { Box } from '@chakra-ui/react';
import { SwapWidget, Theme } from '@uniswap/widgets';
import { useState } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { TokenInfo } from '@uniswap/token-lists';

// Add Browser polyfill
if (typeof window !== "undefined") {
  // @ts-ignore
  window.Browser = {
    T: () => {}
  };
}

const LaunchpadPage = () => {
  const [showSwapWidget, setShowSwapWidget] = useState(false);
  const { primaryWallet } = useDynamicContext();

  const jsonRpcUrlMap = {
    1: [`https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_PROJECT_ID}`]
  };

  const tokens: TokenInfo[] = [
    {
      chainId: 1,
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    },
    {
      chainId: 1,
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
    }
  ];

  const provider = primaryWallet?.connector ? (primaryWallet.connector as any).provider : undefined;

  const darkTheme: Theme = {
    primary: '#FFF',
    secondary: '#94a3b8',
    interactive: '#3B82F6',
    container: '#0B1120',
    module: '#1A1F2E',
    accent: '#3B82F6',
    outline: 'rgba(255, 255, 255, 0.1)',
    dialog: '#0B1120',
    fontFamily: 'Inter',
    borderRadius: {
      xsmall: 4,
      small: 8,
      medium: 12,
      large: 20
    }
  };

  return (
    <div style={{
      padding: '3rem',
      backgroundColor: '#0B1120',
    }}>
      <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.5rem' }}>Active Launches</h2>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginTop: '1rem',
      }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Project Name</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Stage</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Current Price</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Project Alpha</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Stage 1</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>0.00001 ETH</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Active</td>
            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={() => setShowSwapWidget(true)}
                className="uniswap-button">
                Buy Now
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Project Beta</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Stage 2</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>0.00002 ETH</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Active</td>
            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={() => setShowSwapWidget(true)}
                className="uniswap-button">
                Buy Now
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Project Gamma</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Stage 3</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>0.00005 ETH</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Active</td>
            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={() => setShowSwapWidget(true)}
                className="uniswap-button">
                Buy Now
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Project Delta</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Stage 1</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>0.00001 ETH</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Active</td>
            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={() => setShowSwapWidget(true)}
                className="uniswap-button">
                Buy Now
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Project Epsilon</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Stage 2</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>0.00002 ETH</td>
            <td style={{ padding: '1rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Active</td>
            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={() => setShowSwapWidget(true)}
                className="uniswap-button">
                Buy Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {showSwapWidget && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            position: 'relative',
            backgroundColor: '#0B1120',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '480px',
            width: '100%',
          }}>
            <button 
              onClick={() => setShowSwapWidget(false)}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '1rem',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 1001,
                padding: '0.5rem',
                lineHeight: 1,
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              ×
            </button>
            <SwapWidget 
              provider={provider}
              jsonRpcUrlMap={jsonRpcUrlMap}
              tokenList={tokens}
              theme={darkTheme}
              width={440}
              defaultInputTokenAddress="NATIVE"
              defaultOutputTokenAddress="0xdAC17F958D2ee523a2206206994597C13D831ec7"
              hideConnectionUI={true}
              brandedFooter={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LaunchpadPage; 