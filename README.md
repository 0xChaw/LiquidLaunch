# LiquidLaunch 🚀

A next-generation token launchpad platform built with React, TypeScript, and Vite. LiquidLaunch combines Dynamic wallet integration for secure authentication, Uniswap V4 hooks for token listings, and the Uniswap Widget for seamless token swapping.

## 🌟 Features

### Wallet Integration
- **Dynamic SDK Integration** for secure wallet connections
- **MetaMask Support** with custom notification handling
- **Multi-wallet Support** with future Account Abstraction capabilities
- **User Profile Management** through Dynamic's ecosystem

### Token Launchpad
- **Multi-stage Token Launches** with customizable parameters:
  - Project name configuration
  - Token pair setup (addresses and amounts)
  - Three-stage pricing model with scheduled dates
  - Secure signature verification for listings

### Trading Interface
- **Integrated Uniswap Widget** with dark theme
- **Custom Token List** support
- **Seamless Trading Experience** with direct swap functionality

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: CSS-in-JS with custom theming
- **Web3 Integration**:
  - Dynamic SDK for wallet management
  - Uniswap V4 hooks for listings
  - Uniswap Widget for swaps
  - ethers.js for blockchain interactions

## 🚀 Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Environment**
Create a `.env.local` file:
```env
VITE_DYNAMIC_ENV_ID=your_dynamic_env_id
VITE_INFURA_PROJECT_ID=your_infura_project_id
```

3. **Run Development Server**
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Navigation and wallet connection
│   ├── Footer/         # Application footer
│   ├── Sidebar/        # Navigation sidebar
│   └── Login/          # Authentication components
├── pages/
│   ├── LaunchpadPage/  # Token listing interface
│   ├── CreateListing/  # New listing creation
│   └── LandingPage/    # Welcome screen
├── styles/             # Global styles and themes
└── utils/              # Helper functions
```

## 🔒 Security Features

- Secure wallet connections via Dynamic SDK
- MetaMask signature verification for listings
- Protected routes and authentication

## 🛣 Roadmap

- [ ] Account Abstraction integration
- [ ] Enhanced listing management
- [ ] Additional token pair support
- [ ] Advanced trading features
- [ ] Analytics dashboard
- [ ] Multi-chain support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Dynamic](https://www.dynamic.xyz/) for wallet integration
- [Uniswap](https://uniswap.org/) for DEX infrastructure (Uniswap V4 Hooks and Uniswap Widget)
- [ethers.js](https://docs.ethers.org/) for blockchain interactions