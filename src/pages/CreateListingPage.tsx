import { useState } from 'react';
import { ethers } from 'ethers';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

interface StageData {
  date: string;
  price: string;
}

interface FormData {
  projectName: string;
  token1Address: string;
  token2Address: string;
  token1Amount: string;
  token2Amount: string;
  stage1: StageData;
  stage2: StageData;
  stage3: StageData;
}

const CreateListingPage = () => {
  const { primaryWallet } = useDynamicContext();
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    token1Address: '',
    token2Address: '',
    token1Amount: '',
    token2Amount: '',
    stage1: {
      date: '',
      price: ''
    },
    stage2: {
      date: '',
      price: ''
    },
    stage3: {
      date: '',
      price: ''
    }
  });

  const [signatureResult, setSignatureResult] = useState<{
    signature: string;
    signer: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [stage, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [stage]: {
          ...(prev[stage as keyof FormData] as StageData),
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask');
        return;
      }

      // Validate required fields
      if (!formData.projectName || !formData.token1Address || !formData.token2Address || 
          !formData.token1Amount || !formData.token2Amount || 
          !formData.stage1.date || !formData.stage1.price ||
          !formData.stage2.date || !formData.stage2.price ||
          !formData.stage3.date || !formData.stage3.price) {
        alert('Please fill in all fields');
        return;
      }

      const messageString = JSON.stringify({
        projectName: formData.projectName,
        token1Address: formData.token1Address,
        token2Address: formData.token2Address,
        token1Amount: formData.token1Amount,
        token2Amount: formData.token2Amount,
        stage1: formData.stage1,
        stage2: formData.stage2,
        stage3: formData.stage3,
        timestamp: Date.now()
      });

      const provider = new ethers.providers.Web3Provider(window.ethereum, {
        chainId: 1,
        name: 'Ethereum'
      });
      
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(messageString);
      const signerAddress = await signer.getAddress();

      setSignatureResult({
        signature,
        signer: signerAddress
      });

      console.log('Message:', messageString);
      console.log('Signature:', signature);
      console.log('Signer:', signerAddress);

    } catch (error: any) {
      console.error('Error creating listing:', error);
      setSignatureResult(null);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#0B1120',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    color: 'white',
    fontSize: '0.875rem',
    marginBottom: '0.5rem'
  };

  const labelStyle = {
    display: 'block',
    color: '#94a3b8',
    marginBottom: '0.25rem',
    fontSize: '0.875rem'
  };

  return (
    <div style={{
      padding: '1.5rem 2rem',
      backgroundColor: '#0B1120',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>Create New Listing</h2>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        padding: '1.5rem',
        maxWidth: '800px',
        width: '100%',
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={labelStyle}>Project Name</label>
          <input 
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Enter project name"
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={labelStyle}>Token 1 Address</label>
            <input 
              type="text"
              name="token1Address"
              value={formData.token1Address}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Enter token 1 address"
            />
          </div>

          <div>
            <label style={labelStyle}>Token 2 Address</label>
            <input 
              type="text"
              name="token2Address"
              value={formData.token2Address}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Enter token 2 address"
            />
          </div>

          <div>
            <label style={labelStyle}>Token 1 Amount</label>
            <input 
              type="text"
              name="token1Amount"
              value={formData.token1Amount}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Enter token 1 amount"
            />
          </div>

          <div>
            <label style={labelStyle}>Token 2 Amount</label>
            <input 
              type="text"
              name="token2Amount"
              value={formData.token2Amount}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Enter token 2 amount"
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Stage 1</h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={labelStyle}>Date</label>
              <input 
                type="datetime-local"
                name="stage1.date"
                value={formData.stage1.date}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Price</label>
              <input 
                type="text"
                name="stage1.price"
                value={formData.stage1.price}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Stage 1 price"
              />
            </div>
          </div>

          <div style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Stage 2</h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={labelStyle}>Date</label>
              <input 
                type="datetime-local"
                name="stage2.date"
                value={formData.stage2.date}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Price</label>
              <input 
                type="text"
                name="stage2.price"
                value={formData.stage2.price}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Stage 2 price"
              />
            </div>
          </div>

          <div style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Stage 3</h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={labelStyle}>Date</label>
              <input 
                type="datetime-local"
                name="stage3.date"
                value={formData.stage3.date}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Price</label>
              <input 
                type="text"
                name="stage3.price"
                value={formData.stage3.price}
                onChange={handleInputChange}
                style={inputStyle}
                placeholder="Stage 3 price"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          className="uniswap-button"
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem' }}
        >
          Create Listing
        </button>

        {signatureResult && (
          <div style={{
            backgroundColor: 'rgba(52, 211, 153, 0.1)', // green tint
            border: '1px solid rgba(52, 211, 153, 0.2)',
            borderRadius: '8px',
            padding: '1rem',
            marginTop: '1rem',
          }}>
            <h3 style={{ 
              color: '#34D399', 
              marginBottom: '0.5rem',
              fontSize: '1rem'
            }}>
              Listing Created Successfully!
            </h3>
            <div style={{ 
              color: '#94a3b8',
              fontSize: '0.875rem',
              wordBreak: 'break-all'
            }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Signer:</strong> {signatureResult.signer}
              </p>
              <p>
                <strong>Signature:</strong> {signatureResult.signature}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateListingPage; 