import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ServerStatus } from '../../types';

interface ServerStatusWidgetProps {
  servers: ServerStatus[];
}

const StatusContainer = styled(motion.div)`
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(20px);
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 1.5rem;
  border: 1px solid rgba(255, 0, 53, 0.2);
  box-shadow: ${props => props.theme.shadows.md};
`;

const Title = styled.h3`
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff0035 0%, #ff6b88 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ServerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ServerCard = styled(motion.div)<{ status: string }>`
  background: rgba(26, 10, 15, 0.5);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid ${props => 
    props.status === 'Healthy' ? '#00ff88' : 
    props.status === 'Degraded' ? '#ffd700' : 
    '#ff0035'
  };
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(255, 0, 53, 0.3);
  }
`;

const ServerName = styled.div`
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const ServerStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.85rem;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => 
    props.status === 'Healthy' ? 'rgba(0, 255, 136, 0.15)' : 
    props.status === 'Degraded' ? 'rgba(255, 215, 0, 0.15)' : 
    'rgba(255, 0, 53, 0.15)'
  };
  color: ${props => 
    props.status === 'Healthy' ? '#00ff88' : 
    props.status === 'Degraded' ? '#ffd700' : 
    '#ff0035'
  };

  &::before {
    content: '●';
    margin-right: 0.3rem;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const LatencyIndicator = styled.span<{ latency: number }>`
  color: ${props => 
    props.latency < 50 ? '#00ff88' : 
    props.latency < 100 ? '#ffd700' : 
    '#ff0035'
  };
  font-weight: 600;
`;

const ServerStatusWidget: React.FC<ServerStatusWidgetProps> = ({ servers }) => {
  return (
    <StatusContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>🌐</span> Server Status
      </Title>
      <ServerGrid>
        {servers.map((server, index) => (
          <ServerCard
            key={server.name}
            status={server.status}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServerName>{server.name}</ServerName>
            <ServerStats>
              <StatRow>
                <span>Status:</span>
                <StatusBadge status={server.status}>{server.status}</StatusBadge>
              </StatRow>
              <StatRow>
                <span>Latency:</span>
                <LatencyIndicator latency={server.latency}>
                  {server.latency}ms
                </LatencyIndicator>
              </StatRow>
              <StatRow>
                <span>Players:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>
                  {(server.players / 1000).toFixed(1)}K
                </span>
              </StatRow>
            </ServerStats>
          </ServerCard>
        ))}
      </ServerGrid>
    </StatusContainer>
  );
};

export default ServerStatusWidget;
