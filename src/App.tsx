import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LaunchpadPage from './pages/LaunchpadPage';
import CreateListingPage from './pages/CreateListingPage';

const Header = () => (
  <header style={{ 
    width: '100%',
    height: '64px',
    padding: '0 2rem', 
    backgroundColor: '#0B1120',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  }}>
    <h2 style={{ color: 'white', fontSize: '1.5rem' }}>LiquidLaunch</h2>
    <div style={{ marginRight: '4rem' }}>
      <DynamicWidget />
    </div>
  </header>
);

const Sidebar = () => (
  <nav style={{ 
    position: 'fixed',
    left: 0,
    top: '64px', // Header height
    bottom: '60px', // Footer height
    width: '240px',
    padding: '2rem 1rem',
    backgroundColor: '#0B1120',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 5,
  }}>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
    }}>
      <Link to="/app" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Launchpad</Link>
      <Link to="/app/create" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>Create Listing</Link>
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
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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
    left: '240px',
    right: 0,
    bottom: '60px',
    backgroundColor: '#0B1120',
    overflow: 'auto',
  }}>
    <Routes>
      <Route path="/" element={<LaunchpadPage />} />
      <Route path="/create" element={<CreateListingPage />} />
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
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    gap: '20px',
    backgroundColor: '#0B1120'
  }}>
    <h1 style={{ color: 'white', fontSize: '3rem' }}>Welcome to LiquidLaunch</h1>
    <p style={{ color: '#94a3b8', fontSize: '1.5rem' }}>The next generation token launchpad platform</p>
    <Link to="/app" style={{
      padding: '16px 32px',
      backgroundColor: '#3B82F6',
      color: 'white',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    }}>
      Launch App
    </Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <DynamicContextProvider
      settings={{
        environmentId: '8591a906-67d2-4b85-ad1f-fa48cc504dec',
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

export default App;
