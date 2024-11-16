import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LaunchpadPage from './pages/LaunchpadPage';
import CreateListingPage from './pages/CreateListingPage';
import { providers } from 'ethers';
import { useState } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

const Header = () => (
  <header style={{ 
    width: '100%',
    height: '64px',
    backgroundColor: '#0B1120',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  }}>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      cursor: 'pointer',
      marginLeft: '0.3rem'
    }}>
      <img 
        src="/logo.png" 
        alt="LiquidLaunch Logo" 
        style={{ 
          height: '48px',
          width: 'auto',
          marginRight: '0.3rem'
        }} 
      />
      <h2 
        style={{ 
          color: '#FC72FF',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
        LiquidLaunch
      </h2>
    </div>
    <div style={{ marginRight: '1.5rem' }}>
      <DynamicWidget />
    </div>
  </header>
);

const Sidebar = () => (
  <nav style={{ 
    position: 'fixed',
    left: 0,
    top: '64px',
    bottom: '60px',
    width: '200px',
    padding: '1.5rem 1rem',
    backgroundColor: '#0B1120',
    borderRight: '2px solid rgba(255, 255, 255, 0.1)',
    zIndex: 5,
  }}>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0.75rem',
    }}>
      <Link 
        to="/app" 
        className="menu-link"
        style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1rem',
          padding: '0.5rem 0.75rem',
        }}>
        Launchpad
      </Link>
      <Link 
        to="/app/create" 
        className="menu-link"
        style={{ 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1rem',
          padding: '0.5rem 0.75rem',
        }}>
        Create Listing
      </Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer style={{ 
    width: '100%',
    height: '60px',
    padding: '1rem', 
    backgroundColor: '#0B1120',
    color: '#94a3b8',
    textAlign: 'center',
    borderTop: '2px solid rgba(255, 255, 255, 0.1)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  }}>
    © 2024 LiquidLaunch. All rights reserved.
  </footer>
);

const AppContent = () => (
  <main style={{ 
    position: 'fixed',
    top: '64px',
    left: '200px',
    right: 0,
    bottom: '60px',
    backgroundColor: '#0B1120',
    overflow: 'auto',
  }}>
    <Routes>
      <Route index element={<LaunchpadPage />} />
      <Route path="create" element={<CreateListingPage />} />
    </Routes>
  </main>
);

const AppLayout = () => (
  <div style={{ 
    minHeight: '100vh',
    backgroundColor: '#0B1120',
    position: 'relative',
  }}>
    <Header />
    <Sidebar />
    <AppContent />
    <Footer />
  </div>
);

const LandingPage = () => (
  <main style={{ 
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0B1120',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }}>
    <h1 style={{ 
      color: 'white', 
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    }}>
      Welcome to LiquidLaunch
    </h1>
    <p style={{ 
      color: '#94a3b8', 
      fontSize: '1.5rem',
      marginBottom: '3rem',
      maxWidth: '800px'
    }}>
      The next generation token launchpad platform
    </p>
    <Link to="/app" style={buttonStyle}>
      Launch App
    </Link>
  </main>
);

const getProvider = (wallet: any) => {
  if (wallet?.connector?.provider) {
    return new providers.Web3Provider(wallet.connector.provider);
  }
  return null;
};

export const buttonStyle = {
  backgroundColor: '#FC72FF',
  color: 'white',
  border: 'none',
  padding: '16px 32px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s'
};

const App = () => {
  return (
    <BrowserRouter>
      <DynamicContextProvider
        settings={{
          environmentId: import.meta.env.VITE_DYNAMIC_ENV_ID,
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app/*" element={<AppLayout />} />
        </Routes>
      </DynamicContextProvider>
    </BrowserRouter>
  );
};

export default App;
