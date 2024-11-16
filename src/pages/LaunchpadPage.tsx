import { SwapWidget } from '@uniswap/widgets';
import { ethers } from 'ethers';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useState } from 'react';

const LaunchpadPage = () => {
  const [showSwapWidget, setShowSwapWidget] = useState(false);
  const { primaryWallet } = useDynamicContext();

  const provider = primaryWallet?.connector ? (primaryWallet.connector as any).provider : undefined;

  const TOKEN_LIST = [
    {
      "name": "Wrapped Ether",
      "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "symbol": "WETH",
      "decimals": 18,
      "chainId": 1,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    },
    {
      "name": "Tether USD",
      "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "symbol": "USDT",
      "decimals": 6,
      "chainId": 1,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
    },
    {
      "name": "USD Coin",
      "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "symbol": "USDC",
      "decimals": 6,
      "chainId": 1,
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
    }
  ];

  return (
    <div style={{
      padding: '1.5rem 2rem',
      backgroundColor: '#0B1120',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>Active Launches</h2>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        padding: '1.5rem',
        width: '100%',
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Project Name</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Stage</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Current Price</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Project Alpha</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Stage 1</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>0.00001 ETH</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Active</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button 
                  onClick={() => setShowSwapWidget(true)}
                  className="uniswap-button">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Project Beta</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Stage 2</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>0.00002 ETH</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Active</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button 
                  onClick={() => setShowSwapWidget(true)}
                  className="uniswap-button">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Project Gamma</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Stage 3</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>0.00005 ETH</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Active</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button 
                  onClick={() => setShowSwapWidget(true)}
                  className="uniswap-button">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Project Delta</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Stage 1</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>0.00001 ETH</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Active</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button 
                  onClick={() => setShowSwapWidget(true)}
                  className="uniswap-button">
                  Buy Now
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Project Epsilon</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Stage 2</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>0.00002 ETH</td>
              <td style={{ padding: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem' }}>Active</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button 
                  onClick={() => setShowSwapWidget(true)}
                  className="uniswap-button">
                  Buy Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
            isolation: 'isolate',
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
            <div style={{ all: 'initial' }}>
              <SwapWidget 
                provider={provider}
                tokenList={TOKEN_LIST}
                width={440}
                defaultInputAmount="0.1"
                defaultInputTokenAddress="NATIVE"
                defaultOutputTokenAddress="0xdAC17F958D2ee523a2206206994597C13D831ec7"
                hideConnectionUI={true}
                brandedFooter={false}
                defaultChainId={1}
                theme={{
                  primary: '#FFFFFF',
                  secondary: '#888D9B',
                  interactive: '#2D2D39',
                  container: '#191924',
                  module: '#191924',
                  accent: '#2172E5',
                  outline: '#313145',
                  dialog: '#191924',
                  fontFamily: 'Inter'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaunchpadPage; 