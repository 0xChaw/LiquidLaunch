import { Box } from '@chakra-ui/react';

const CreateListingPage = () => {
  return (
    <div style={{
      padding: '3rem',
      backgroundColor: '#0B1120',
    }}>
      <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.5rem' }}>Create New Listing</h2>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '800px'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            color: '#94a3b8', 
            marginBottom: '0.5rem' 
          }}>
            Project Name
          </label>
          <input 
            type="text" 
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#0B1120',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              color: 'white',
              fontSize: '1rem'
            }}
            placeholder="Enter project name"
          />
        </div>
        {/* Add more form fields as needed */}
      </div>
      <button className="uniswap-button">
        Create Listing
      </button>
    </div>
  );
};

export default CreateListingPage; 