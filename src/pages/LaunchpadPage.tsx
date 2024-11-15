import { Box } from '@chakra-ui/react';

const LaunchpadPage = () => {
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
              <button style={{
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'background-color 0.2s',
              }}>
                Buy Now
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LaunchpadPage; 