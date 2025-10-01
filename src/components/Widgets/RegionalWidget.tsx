import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { RegionalData } from '../../types';

interface RegionalWidgetProps {
  regions: RegionalData[];
}

const RegionContainer = styled(motion.div)`
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

const RegionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const RegionCard = styled(motion.div)<{ serverStatus: string }>`
  background: rgba(26, 10, 15, 0.5);
  border-radius: 12px;
  padding: 1.25rem;
  border-left: 4px solid ${props => 
    props.serverStatus === 'Healthy' ? '#00ff88' : 
    props.serverStatus === 'Degraded' ? '#ffd700' : 
    '#ff0035'
  };
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px ${props => 
      props.serverStatus === 'Healthy' ? 'rgba(0, 255, 136, 0.2)' : 
      props.serverStatus === 'Degraded' ? 'rgba(255, 215, 0, 0.2)' : 
      'rgba(255, 0, 53, 0.2)'
    };
  }
`;

const RegionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const RegionName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const StatusIndicator = styled.span<{ status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
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
  border: 1px solid ${props => 
    props.status === 'Healthy' ? 'rgba(0, 255, 136, 0.3)' : 
    props.status === 'Degraded' ? 'rgba(255, 215, 0, 0.3)' : 
    'rgba(255, 0, 53, 0.3)'
  };

  &::before {
    content: '●';
    margin-right: 0.3rem;
    animation: ${props => props.status === 'Healthy' ? 'none' : 'blink 2s ease-in-out infinite'};
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const RegionStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
`;

const StatLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

const StatValue = styled.span<{ type?: string }>`
  font-weight: 600;
  color: ${props => {
    if (props.type === 'latency') {
      const latency = parseInt(props.children as string);
      if (latency < 50) return '#00ff88';
      if (latency < 100) return '#ffd700';
      return '#ff0035';
    }
    return '#fff';
  }};
`;

const PlayerCount = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff0035;
  margin-top: 0.5rem;
  text-align: center;
`;

const RegionalWidget: React.FC<RegionalWidgetProps> = ({ regions }) => {
  const formatPlayers = (players: number) => {
    if (players >= 1000) {
      return `${(players / 1000).toFixed(1)}K`;
    }
    return players.toString();
  };

  return (
    <RegionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <span>🌍</span> Regional Distribution
      </Title>
      <RegionGrid>
        {regions.map((region, index) => (
          <RegionCard
            key={region.region}
            serverStatus={region.serverStatus}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <RegionHeader>
              <RegionName>{region.region}</RegionName>
              <StatusIndicator status={region.serverStatus}>
                {region.serverStatus}
              </StatusIndicator>
            </RegionHeader>
            <RegionStats>
              <StatRow>
                <StatLabel>Latency</StatLabel>
                <StatValue type="latency">{region.latency}ms</StatValue>
              </StatRow>
              <PlayerCount>{formatPlayers(region.players)}</PlayerCount>
            </RegionStats>
          </RegionCard>
        ))}
      </RegionGrid>
    </RegionContainer>
  );
};

export default RegionalWidget;
