if (typeof window !== 'undefined') {
  // @ts-ignore
  window.global = window;
  // @ts-ignore
  window.process = { 
    env: {
      NODE_ENV: process.env.NODE_ENV,
      REACT_APP_INFURA_PROJECT_ID: import.meta.env.VITE_INFURA_PROJECT_ID
    } 
  };
  // @ts-ignore
  window.Buffer = window.Buffer || {};
  // @ts-ignore
  window.Browser = {
    T: () => {},
    locale: {
      getLocale: () => 'en'
    },
    encode: () => {},
    decode: () => {},
    compress: () => {},
    decompress: () => {}
  };

  // Add WalletConnect storage handler
  // @ts-ignore
  window.localStorage.setItem('walletconnect', '');
  // @ts-ignore
  window.localStorage.removeItem('walletconnect');
} 